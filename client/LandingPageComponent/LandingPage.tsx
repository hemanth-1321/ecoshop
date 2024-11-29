import React from "react";

import NavBar from "@/LandingPageComponent/NavBar";
import Hero from "@/components/Hero";
import { HeroSection } from "./HeroSection";
const LandingPage = () => {
  return (
    <div>
      <NavBar />

      <HeroSection />
    </div>
  );
};

export default LandingPage;
