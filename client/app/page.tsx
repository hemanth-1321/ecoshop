"use client";
import LandingPage from "@/LandingPageComponent/LandingPage";
import Appbar from "@/components/Appbar";
import PromoBanner from "@/components/Banner";
import Hero from "@/components/Hero";

import CategoryCarousel from "@/components/carousel";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <LandingPage />
      {/* <Appbar />

      <HeroSection />

      <CategoryCarousel /> */}
    </div>
  );
}
