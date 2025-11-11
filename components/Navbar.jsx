"use client";

import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={80} height={80} className="sm:w-[100px] sm:h-[100px] lg:w-full lg:h-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/hairisafe"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Hairisafe
            </Link>
            <Link
              href="/our-story"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary"
              >
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary relative"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
