"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const hanndleGetStartedClick = () => {
    router.push("/auth/login");
  };
  return (
    <div className="shadow-md fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-opacity-70">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side: Logo/Brand Name */}
        <div className="text-xl font-bold text-gray-700">Elevé</div>

        {/* Nav links for desktop and larger screens */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Why Elevé?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Right side: SignIn Button */}
        <div>
          <button
            className="px-4 py-2 bg-blue-600 text-gray-800 rounded-full hover:bg-blue-700 transition duration-300"
            onClick={hanndleGetStartedClick}
          >
            Get Started
          </button>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-100 py-3 space-y-3 text-center backdrop-blur-md bg-opacity-30">
          <ul>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
              >
                Why Elevé?
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-gray-700 hover:text-blue-600 transition duration-300 py-2"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
