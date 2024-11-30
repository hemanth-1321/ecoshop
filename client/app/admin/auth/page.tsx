"use client";

import axiosInstance from "@/lib/axiosInstance";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError("All fields are required.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.post("/admin/login", formData);
      console.log(response.data);
      if (response.status === 201) {
        const token = response.data.token;
        localStorage.setItem("token", token);
        setError(null);
        console.log("Redirecting to /auth/login...");

        router.push("/admin/dashboard");
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-10 rounded-md shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            type="submit"
            disabled={loading}
          >
            {loading ? "Loggingin..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
