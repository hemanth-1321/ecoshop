"use client";

import Appbar from "@/components/Appbar";
import PromoBanner from "@/components/Banner";
import HeroSection from "@/components/Hero";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/auth/register");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Appbar />
      <HeroSection />
      <PromoBanner />
      <div>hello</div>
    </div>
  );
}
