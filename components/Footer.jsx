"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col leading-none mb-4 -ml-5">
              <Image src="/footer.jpg" alt="Logo" width={200} height={200} />
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Helping you identify harmful ingredients in hair products and protect your health, your hair, and your peace of mind.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/hairisafe" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hairisafe
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="mailto:info@ourhairitage.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@ourhairitage.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} Our Hairitage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

