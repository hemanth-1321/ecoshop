import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navItems = [
  { name: "Store", href: "/store" },
  { name: "Mac", href: "/mac" },
  { name: "iPad", href: "/ipad" },
  { name: "iPhone", href: "/iphone" },
  { name: "Watch", href: "/watch" },
  { name: "Vision", href: "/vision" },
  { name: "AirPods", href: "/airpods" },
  { name: "TV & Home", href: "/tv-home" },
  { name: "Entertainment", href: "/entertainment" },
  { name: "Accessories", href: "/accessories" },
  { name: "Support", href: "/support" },
];

const Appbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <nav className="bg-gradient-to-b from-green-100 to-gray-50  backdrop-blur-md fixed w-full z-50">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className=" flex items-center justify-between h-12">
          {/* left section*/}
          <div className="flex items-center space-x-20">
            <span className="font-extrabold"> Elevé </span>
            <div className="hidden md:flex space-x-4 ">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-[#1d1d1f] hover:text-gray-500"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          {/* righ section*/}
          <div className="flex items-center space-x-6">
            <Link href={"/search"}>
              <Search className="h-4 w-4 text-[#1d1d1f] cursor-pointer" />
            </Link>
            <Link href={"/cart"}>
              <ShoppingBag className="h-4 w-4 text-[#1d1d1f] cursor-pointer" />
            </Link>

            {/*hamburger menu for mobile*/}
            <div className="md:hidden">
              {isMenuOpen ? (
                <HiOutlineX
                  className="h-6-w-6 text=[#1d1d1f] cursor-pointer"
                  onClick={toggleMenu}
                />
              ) : (
                <HiOutlineMenu
                  className="h-6 w-6 text-[#1d1d1f] cursor-pointer"
                  onClick={toggleMenu}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/*mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2">
          <div className="flex flex-col space-y-2 py-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#1d1d1f] hover:text-gray-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Appbar;
