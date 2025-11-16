"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff } from "lucide-react";

export default function SignInSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Signup logic here
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Signup:", { name, email, password });
  };

  const handleGoogleSignup = () => {
    // Google signup logic here
    console.log("Google signup");
  };

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-[#DFBCA3]">
      <div className="container mx-auto max-w-md">
        <div className="bg-[#FDFAF5] rounded-lg border-2 border-gray-300 shadow-lg p-6 sm:p-8">
          {/* Logo */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-gray-700">OUR </span>
              <span className="text-[#5C4033]">HAIRITAGE</span>
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Sign Up</h2>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-11 border-gray-300 focus:border-[#5C4033] focus:ring-[#5C4033]"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 border-gray-300 focus:border-[#5C4033] focus:ring-[#5C4033]"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Enter your password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 pr-10 border-gray-300 focus:border-[#5C4033] focus:ring-[#5C4033]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-11 pr-10 border-gray-300 focus:border-[#5C4033] focus:ring-[#5C4033]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <Button
              type="submit"
              className="w-full h-11 bg-[#5C4033] text-white hover:bg-[#4a3328] font-medium"
            >
              Sign up
            </Button>
          </form>

          {/* Separator */}
          <div className="flex items-center my-6">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-gray-500">Or</span>
            <Separator className="flex-1" />
          </div>

          {/* Google Signup Button */}
          <Button
            type="button"
            variant="outline"
            onClick={handleGoogleSignup}
            className="w-full h-11 border-gray-300 hover:bg-gray-50 font-medium"
          >
            <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google
          </Button>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-[#5C4033] font-medium hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

