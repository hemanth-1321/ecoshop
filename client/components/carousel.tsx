import React, { useRef, useState } from "react";
import {
  Smartphone,
  Tablet,
  Watch,
  Headphones,
  Target,
  Tv,
  Speaker,
  Laptop,
  Camera,
  Gamepad,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const category = [
  {
    title: "iPhone",
    price: "$999",
    icon: Smartphone,
    description: "Latest iPhone with amazing camera and performance",
  },
  {
    title: "iPad",
    price: "$799",
    icon: Tablet,
    description: "Powerful tablet for work and creativity",
  },
  {
    title: "Apple Watch",
    price: "$399",
    icon: Watch,
    description: "Stay connected and track your fitness",
  },
  {
    title: "AirPods",
    price: "$249",
    icon: Headphones,
    description: "Immersive audio experience",
  },
  {
    title: "AirTag",
    price: "$29",
    icon: Target,
    description: "Never lose your important items",
  },
  {
    title: "Apple TV 4K",
    price: "$179",
    icon: Tv,
    description: "Premium entertainment hub",
  },
  {
    title: "HomePod",
    price: "$299",
    icon: Speaker,
    description: "Room-filling sound with Siri",
  },
  {
    title: "MacBook",
    price: "$1299",
    icon: Laptop,
    description: "Powerful laptop for professionals",
  },
  {
    title: "iSight Camera",
    price: "$199",
    icon: Camera,
    description: "High-quality video conferencing",
  },
  {
    title: "Apple Arcade",
    price: "$4.99/mo",
    icon: Gamepad,
    description: "Premium gaming experience",
  },
];

const CategoryCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);

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
      className="px-4 py-8 relative bg-gradient-to-r from-gray-100 to-green-50 backdrop-blur-md "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex items-center space-x-6 overflow-x-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        ref={carouselRef}
      >
        {category.map(({ title, price, icon: IconComponent, description }) => (
          <div
            key={title}
            className="min-w-[280px] p-6 bg-white rounded-xl shadow-lg flex flex-col items-center space-y-4 select-none"
          >
            <div className="p-4 bg-gray-50 rounded-full">
              <IconComponent size={32} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{price}</p>
            <p className="text-gray-600 text-center text-sm">{description}</p>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      {isHovered && scrollDirection !== "left" && (
        <div
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
          onClick={scrollLeft}
        >
          <ChevronLeft size={24} />
        </div>
      )}

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
