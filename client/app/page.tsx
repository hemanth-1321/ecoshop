"use client";

import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/auth/register");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
