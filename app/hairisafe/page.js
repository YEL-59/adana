import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function HairisafePage() {
  const features = [
    {
      icon: Shield,
      title: "Ingredient Safety Analysis",
      description: "Get instant analysis of harmful ingredients in your hair products with our AI-powered scanner.",
    },
    {
      icon: Zap,
      title: "Fast & Accurate",
      description: "Scan product labels in seconds and receive detailed safety reports immediately.",
    },
    {
      icon: CheckCircle2,
      title: "Science-Backed Results",
      description: "Our database is built on scientific research and health studies for reliable information.",
    },
  ];

  const benefits = [
    "Protect your health from harmful chemicals",
    "Make informed decisions about hair products",
    "Discover safe alternatives to your current products",
    "Learn about ingredient safety and health impacts",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-background py-12 sm:py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
                HairiSafe: Your Ingredient Safety Guide
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Scan product labels to instantly identify harmful ingredients and protect your health, your hair, and your peace of mind.
              </p>
              <Link href="/search">
                <Button size="lg" className="bg-[#5C4033] text-white hover:bg-[#4a3328] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base">
                  Start Scanning
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-foreground">
                How HairiSafe Works
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Simple steps to safer hair care
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-[#5C4033]/10 flex items-center justify-center">
                          <Icon className="h-8 w-8 text-[#5C4033]" />
                        </div>
                      </div>
                      <CardTitle className="text-xl sm:text-2xl mb-2">{feature.title}</CardTitle>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center text-foreground">
                Why Use HairiSafe?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[#5C4033] flex-shrink-0 mt-0.5" />
                    <p className="text-base sm:text-lg text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                Ready to Start?
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                Scan your first product and discover what's really inside
              </p>
              <Link href="/search">
                <Button size="lg" className="bg-[#5C4033] text-white hover:bg-[#4a3328] px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base">
                  Scan a Product Now
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

