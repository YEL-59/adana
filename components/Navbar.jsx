"use client";

import Link from "next/link";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Active path checker
  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={80}
              height={80}
              className="w-auto h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                isActive("/")
                  ? "text-[#2A2A2A] border-b-2 border-[#2A2A2A]"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Hairisafe
            </Link>

            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive("/contact")
                  ? "text-[#2A2A2A] border-b-2 border-[#2A2A2A]"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link href="/login">
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-primary h-9 w-9 lg:h-10 lg:w-10"
              >
                <User className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingBag className="h-4 w-4" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9"
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

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-4 border-t border-border">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`block text-base font-medium py-2 transition-colors ${
                isActive("/")
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Hairisafe
            </Link>

            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className={`block text-base font-medium py-2 transition-colors ${
                isActive("/contact")
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="flex items-center text-base font-medium text-muted-foreground hover:text-primary py-2"
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
