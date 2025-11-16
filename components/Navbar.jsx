"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#DFBCA3] border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-50">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-auto h-auto  object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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

          {/* Desktop Utility Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="/search">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary h-9 w-9 lg:h-10 lg:w-10"
              >
                <Search className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary h-9 w-9 lg:h-10 lg:w-10"
              >
                <User className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary relative h-9 w-9 lg:h-10 lg:w-10"
            >
              <ShoppingBag className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Utility Icons */}
            <Link href="/search">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary h-9 w-9"
              >
                <Search className="h-4 w-4" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary relative h-9 w-9"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute top-0 right-0 h-3 w-3 bg-primary text-primary-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            {/* Hamburger Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-primary h-9 w-9"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              className="block text-base font-medium text-foreground hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Shop
            </Link>
            <Link
              href="/hairisafe"
              className="block text-base font-medium text-primary hover:text-primary/80 transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Hairisafe
            </Link>
            <Link
              href="/our-story"
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Our story
            </Link>
            <Link
              href="/contact"
              className="block text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
            <Link
              href="/login"
              className="flex items-center text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
              onClick={closeMobileMenu}
            >
              <User className="h-4 w-4 mr-2" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
