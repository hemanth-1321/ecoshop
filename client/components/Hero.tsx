import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-red-200 via-purple-200 to-blue-200 flex items-center justify-between px-8 pt-16">
      <div className="flex-1">
        <h1 className="text-6xl font-semibold text-[#1d1d1f]">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Store.
          </span>
          Gift magic this holiday.
        </h1>
      </div>

      <div className="flex flex-col items-end space-y-6">
        <div className="text-right">
          <h2 className="text-xl font-medium mb-2">Need shopping help?</h2>
          <a
            href="#"
            className="text-blue-600 hover:underline flex items-center justify-end"
          >
            Ask a Specialist <span className="ml-1">↗</span>
          </a>
        </div>

        <div className="text-right">
          <h2 className="text-xl font-medium mb-2">Visit an Apple Store</h2>
          <a
            href="#"
            className="text-blue-600 hover:underline flex items-center justify-end"
          >
            Find one near you <span className="ml-1">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
