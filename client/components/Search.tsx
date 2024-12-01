"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "@/lib/axiosInstance";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    // Fetching products from the API (use the endpoint you provided)
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/allproducts/products"); // Replace with your actual API endpoint
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on the search query
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(result);
  }, [query, products]);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 18l6-6m0 0l-6-6m6 6H4"
            />
          </svg>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-56 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 truncate">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 truncate">
                    {product.description}
                  </p>
                  <p className="text-gray-900 text-lg font-bold mt-4">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-600">
              No products found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
