"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UserPlus, LogOut, User } from "lucide-react";

export default function SignInSection() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    // Simple signup logic - in production, this would connect to an auth service
    if (name && email && password) {
      setIsSignedIn(true);
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  if (isSignedIn) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Account Created!
              </CardTitle>
              <CardDescription>
                Your account has been successfully created.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Welcome! You can now enjoy all the features of our platform.
                </p>
                <Button 
                  onClick={handleSignOut} 
                  variant="destructive" 
                  className="w-full"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Sign Up
            </CardTitle>
            <CardDescription>
              Create a new account to get started.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="signup-name" className="text-sm font-medium">
                  Full Name
                </label>
                <Input
                  id="signup-name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="signup-email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="signup-password" className="text-sm font-medium">
                  Password
                </label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

