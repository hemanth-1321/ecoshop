import React from "react";

const Hero = () => {
  return (
    <div className="min-h-[50vh] bg-gradient-to-b from-red-200 via-purple-100 w-full  to-blue-50 flex items-center justify-between px-4 md:px-8 pt-12 md:pt-16">
      <div className="flex flex-col items-center text-center px-4 md:px-8">
        <h1 className="text-6xl font-semibold text-[#1d1d1f]">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mr-4">
            Elevé
          </span>
          Refined by Nature, Crafted with Passion
        </h1>
      </div>
    </div>
  );
};

export default Hero;
