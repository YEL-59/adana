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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Know What's in your Hair Products.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            HairSafe helps you scan and detect harmful ingredients in seconds — so you can protect your health, your hair, and your peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/hairisafe">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 px-8 py-6 text-base">
                Scan a product
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/how-it-works">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
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

