import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LoginSection from "@/components/LoginSection";
import SignInSection from "@/components/SignUpSection";
import Hairsafe from "@/components/Hairsafe";
import FeaturesSection from "@/components/Features";
import Trust from "@/components/Trust";
import CtaSection from "@/components/Ctasection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Hairsafe />
        <FeaturesSection />
        <Trust />
        <CtaSection />

      </main>
      <Footer />
    </div>
  );
}
