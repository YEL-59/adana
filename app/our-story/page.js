import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function OurStoryPage() {
  const values = [
    {
      title: "Transparency",
      description: "We believe in complete transparency about what goes into hair products and how it affects your health.",
    },
    {
      title: "Empowerment",
      description: "We empower individuals, especially women of color, with the knowledge to make informed decisions.",
    },
    {
      title: "Health First",
      description: "Your health and well-being are our top priority. We're committed to helping you avoid harmful ingredients.",
    },
    {
      title: "Science-Based",
      description: "Our platform is built on scientific research and evidence-based information about ingredient safety.",
    },
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
                Our Story
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Born from a mission to protect your health, your hair, and your peace of mind
              </p>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="mb-8 sm:mb-12">
                  <div className="w-full max-w-2xl mx-auto rounded-3xl overflow-hidden mb-6 sm:mb-8">
                    <Image
                      src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=600&fit=crop"
                      alt="Our story"
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
                    Because What We Put on Our Hair Matters
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                    For too long, harmful ingredients have been hidden behind complicated labels and marketing jargon. 
                    Many of us have struggled to understand what's really in our hair products and how those ingredients 
                    might affect our health and our hair.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
                    HairiSafe was created to change that. We started with a simple mission: to empower individuals, 
                    especially women of color, with transparent, science-backed ingredient information. We believe 
                    everyone deserves to know what they're putting on their hair and make choices that honor their 
                    health and heritage.
                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Our platform uses advanced technology to scan product labels and instantly identify potentially 
                    harmful ingredients. But we don't just tell you what's wrong—we help you understand why and 
                    provide safe alternatives so you can make informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center text-foreground">
                Our Values
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">{value.title}</CardTitle>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#5C4033] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Our Mission</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
                Protecting Your Health, Your Hair, and Your Peace of Mind
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                We're committed to making ingredient transparency the norm, not the exception. 
                Every scan, every product analysis, and every piece of information we provide 
                is a step toward a healthier, more informed community.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

