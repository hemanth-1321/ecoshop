import React from "react";

export const HeroSection = () => {
  return (
    <div className="min-h-[100vh]">
      {/* First Section */}
      <section className="min-h-[50vh] bg-gradient-to-b from-red-200 via-purple-100 to-blue-50 flex items-center justify-center p-6  px-4 md:px-8">
        <div className="text-center px-4 md:px-8">
          <h1 className="text-6xl font-semibold text-[#1d1d1f]">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text mt-16">
              Elevé
            </span>{" "}
            Refined by Nature, Crafted with Passion
          </h1>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-8 p-6 md:p-16 bg-gray-100">
        <div className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
          <img
            src="https://storage.googleapis.com/kwik-bucketz/hero1.jpg"
            alt="Hero"
            className="rounded-xl shadow-2xl w-full h-auto max-h-80 sm:max-h-96 object-cover"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Experience the Art of Fine Living with{" "}
            <span className="text-green-600">Elevé</span>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Discover a curated selection of the finest artisanal goods, crafted
            with passion and designed for those who seek refinement. Elevé is
            where quality and elegance meet.
          </p>
        </div>
      </section>
      {/* Fourth Section */}
      <section className="flex flex-wrap items-center justify-between gap-8 p-6 md:p-16 bg-gray-100">
        <div className="w-full sm:w-1/2 md:w-1/2 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Choose <span className="text-green-600">Elevé</span>?
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            🌟 <strong>Unmatched Quality:</strong> Only the finest ingredients
            and expert craftsmanship for products that stand out.
          </p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
            🍴 <strong>Unique Flavors:</strong> Each product is a distinctive
            taste experience you'll savor.
          </p>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            🛠️ <strong>Small Batches:</strong> Ensuring every piece meets the
            highest standards of quality.
          </p>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0">
          <img
            src="https://storage.googleapis.com/kwik-bucketz/hero2.jpg"
            alt="Hero"
            className="rounded-xl shadow-2xl w-full h-auto max-h-80 sm:max-h-96 object-cover"
          />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white p-2">
        <div className="text-center text-sm sm:text-base">
          &copy; {new Date().getFullYear()} Elevé. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
