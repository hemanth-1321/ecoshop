import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Appbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-b from-green-100 to-gray-50 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Left Section */}
          <div className="flex items-center space-x-20">
            <span className="font-extrabold">Elevé</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            <Link href={"/search"}>
              <Search className="h-4 w-4 text-[#1d1d1f] cursor-pointer" />
            </Link>
            <Link href={"/checkoutPage/checkout"}>
              <ShoppingBag className="h-4 w-4 text-[#1d1d1f] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white shadow-lg rounded-lg mt-2 transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 transform scale-y-100 max-h-screen"
            : "opacity-0 transform scale-y-0 max-h-0 overflow-hidden"
        }`}
      ></div>
    </nav>
  );
};

export default Appbar;
