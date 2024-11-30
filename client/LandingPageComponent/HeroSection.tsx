import React from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";

export const HeroSection = () => {
  return (
    <div>
      <section className="min-h-[50vh]  flex items-center justify-center p-4 md:p-6 px-4 md:px-8">
        <motion.div
          className="text-center px-4 md:px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-extrabold text-[#1d1d1f] leading-snug mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-9xl">
              Elevé
            </span>{" "}
            Refined by Nature, Crafted with Passion
          </h1>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-[#333] leading-snug mt-2">
            <span className="text-blue-500">Indulge</span> in the Finest
            Artisanal Goods, Curated Just for You
          </h3>
        </motion.div>
      </section>

      <section className="lg:flex md:flex flex-wrap items-center justify-center lg:justify-between gap-8 p-6 md:p-16 bg-gray-100 mt-8">
        <motion.div
          className="w-full md:w-3/4 lg:w-1/2 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://storage.googleapis.com/kwik-bucketz/hero1.jpg"
            alt="Hero"
            className="rounded-xl shadow-2xl w-full h-auto max-h-96 object-cover"
          />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mt-6 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Experience the Art of Fine Living with{" "}
            <span className="text-green-600">Elevé</span>
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            Discover a curated selection of the finest artisanal goods, crafted
            with passion and designed for those who seek refinement. Elevé is
            where quality and elegance meet.
          </p>
        </motion.div>
      </section>
      <hr className="border-gray-300 my-4" />

      <section className="lg:flex md:flex flex-wrap lg:flex-nowrap items-center justify-center gap-8 p-6 md:p-16 bg-gray-100">
        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Why Choose <span className="text-green-600">Elevé</span>?
          </h2>
          <ul className="space-y-4 text-sm sm:text-lg md:text-xl text-gray-700 leading-relaxed">
            <li>
              🌟 <strong>Unmatched Quality:</strong> Only the finest ingredients
              and expert craftsmanship for products that stand out.
            </li>
            <li>
              🍴 <strong>Unique Flavors:</strong> Each product is a distinctive
              taste experience you'll savor.
            </li>
            <li>
              🛠️ <strong>Small Batches:</strong> Ensuring every piece meets the
              highest standards of quality.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://storage.googleapis.com/kwik-bucketz/hero2.jpg"
            alt="Hero"
            className="rounded-xl shadow-2xl w-full h-auto max-h-96 object-cover"
          />
        </motion.div>
      </section>

      <footer className="bg-gray-900 text-gray-950 p-4">
        <motion.div
          className="text-center text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Elevé. All rights reserved.
        </motion.div>
      </footer>
    </div>
  );
};
