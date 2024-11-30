"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LandingPage from "@/LandingPageComponent/LandingPage";
import Appbar from "@/components/Appbar";
import Hero from "@/components/Hero";
import CategoryCarousel from "@/components/carousel";

export default function Home() {
  const [hasToken, setHasToken] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true); // User is authenticated
    } else {
      setHasToken(false); // User is not authenticated
    }
  }, []);

  if (!hasToken) {
    // Optionally, redirect unauthenticated users
    return <LandingPage />;
  }

  // Render authenticated layout
  return (
    <div>
      <Appbar />
      <Hero />
      <CategoryCarousel />
    </div>
  );
}
