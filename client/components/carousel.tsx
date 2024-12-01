import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axiosInstance from "@/lib/axiosInstance";
import Link from "next/link";

interface Category {
  id: string;
  name: string;
  image: string; // Assuming this is a URL string for the category image
}

const CategoryCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get<Category[]>(
          "/category/categories"
        );
        setCategories(response.data);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching categories:", error);
        setError("Failed to load categories.");
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -280, behavior: "smooth" });
      setScrollDirection("left");
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 280, behavior: "smooth" });
      setScrollDirection("right");
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="px-4 py-8 relative bg-gradient-to-r from-gray-100 to-green-50 backdrop-blur-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel */}
      <div
        className="flex items-center space-x-6 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ref={carouselRef}
      >
        {categories.map(({ id, name, image }) => (
          <Link
            key={id}
            href={`/categories/${encodeURIComponent(name)}`}
            passHref
          >
            <div className="min-w-[280px] p-6 bg-white rounded-xl shadow-xl flex flex-col items-center space-y-4 select-none">
              <div className="p-4 bg-gray-50 rounded-full">
                <img
                  src={image}
                  alt={name}
                  className="w-[140] h-[140] object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Left arrow */}
      {isHovered && scrollDirection !== "left" && (
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-400 text-gray-800 p-2 rounded-full shadow-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </div>
      )}

      {/* Right arrow */}
      {isHovered && scrollDirection !== "right" && (
        <div
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={scrollRight}
        >
          <ChevronRight size={24} />
        </div>
      )}
    </div>
  );
};

export default CategoryCarousel;
