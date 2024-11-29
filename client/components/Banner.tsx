import React from "react";

const PromoBanner = () => {
  return (
    <div className="sm:hidden bg-[#fff] text-center py-3 px-4">
      <div className="flex items-center justify-center space-x-1 text-sm">
        <span role="img" aria-label="gift" className="text-lg">
          🎁
        </span>
        <p>
          Starting 11/29, get an Apple Gift Card up to $200 when you buy an
          eligible product — online and in-store.°°
          <a href="#" className="text-blue-600 hover:underline ml-1">
            Learn more &gt;
          </a>
        </p>
      </div>
    </div>
  );
};

export default PromoBanner;
