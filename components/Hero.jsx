"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [bgImage, setBgImage] = useState("/hero_bg.jpg");

  useEffect(() => {
    // Check if image loads, fallback to external URL if not
    const img = new Image();
    img.onerror = () => {
      setBgImage("https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1920&q=80");
    };
    img.src = bgImage;
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay - uses local image from public folder with fallback */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div> */}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Know What's in your Hair Products.
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            HairiSafe helps you scan and detect harmful ingredients in seconds — so you can protect your health, your hair, and your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4">
            <Link href="/hairisafe" className="w-full sm:w-auto">
              <Button size="lg" className="bg-[#5C4033] text-white hover:bg-[#4a3328] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto transition-all duration-200 shadow-lg hover:shadow-xl">
                Scan a product
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-transparent w-full sm:w-auto transition-all duration-200"
              >
                Learn how It Works
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

