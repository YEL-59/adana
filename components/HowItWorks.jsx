"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Simple. Fast. Empowering.
          </p>
        </div>

        {/* Steps Grid - 4 columns: Card, Card, Circle, Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-6 lg:gap-8  items-start md:items-center justify-center">
          {/* Step 1: Scan - Card */}
          <div className="flex flex-col text-start">
            <div className="w-full aspect-square rounded-lg overflow-hidden shadow-sm border border-border/50">
              <img
                src="/work1.png"
                alt="Scan product"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600";
                }}
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground mt-4 sm:mt-0">
              1. Scan
            </h3>
            <p className="text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Snap a photo of your product label or upload an image.
            </p>
          </div>

          {/* Step 2: Detect - Card with overlapping circle */}
          <div className="flex flex-col text-start">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground mt-4 sm:mt-0">
              2. Detect
            </h3>
            <p className="text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Our system identifies harmful or questionable ingredients —
              including those linked to health risks.
            </p>
            <div className=" w-full aspect-square rounded-lg overflow-visible">
              <div className="w-full h-full rounded-lg overflow-hidden ">
                <img
                  src="/work2.png"
                  alt="Detect ingredients"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/600";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-4 sm:py-0">
            <Link href="/search" className="z-10 group">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#111010] text-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mb-1" />
                <span className="text-[10px] sm:text-xs md:text-sm font-medium text-center px-2 leading-tight">
                  Scan a product
                </span>
              </div>
            </Link>
          </div>

          {/* Step 3: Protect - Card */}
          <div className="flex flex-col text-start">
            <div className="w-full aspect-square rounded-lg overflow-hidden shadow-sm border border-border/50">
              <img
                src="work3.png"
                alt="Protect your hair"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600";
                }}
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground mt-4 sm:mt-0">
              3. Protect
            </h3>
            <p className="text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Get instant clarity, safe alternatives, and learn what's really
              going into your hair.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
