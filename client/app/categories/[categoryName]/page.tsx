"use client";
import { useEffect, useState } from "react";
import axiosInstance from "@/lib/axiosInstance";
import { useParams, useRouter } from "next/navigation"; // Use useParams and useRouter

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // For navigation

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(
          `/products/category/${categoryName}`
        );
        const productData = response.data.products;
        if (Array.isArray(productData)) {
          setProducts(productData);
        } else {
          setError("Invalid data format: Expected an array.");
        }
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching products:", error);
        setError("Failed to load products.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (loading) {
    return <div className="text-center py-12 text-xl">Loading products...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-12 text-xl text-red-600">{error}</div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Elevate Your Senses: Premium Handcrafted Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(({ id, name, description, price, image }) => (
          <div
            key={id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <a
              href={`/product/${id}`} // Navigate to the product detail page
              className="block"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">{description}</p>
                <p className="text-xl font-bold text-gray-900 mb-6">₹{price}</p>
                <button
                  className="w-full py-3 bg-gray-900 text-white font-semibold text-lg rounded-md hover:bg-gray-700 transition-colors"
                  onClick={() => console.log(`Added ${name} to cart`)}
                >
                  Add
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
