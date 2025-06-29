import Benefits02 from "@/components/landing/Benefits02";
import CTA03 from "@/components/landing/CTA03";
import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Pricing02 from "@/components/landing/Pricing02";
import SocialProof02 from "@/components/landing/SocialProof02";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <div className="pt-16">
        <Hero />
        <Features />
        <Benefits02 />
        <SocialProof02 />
        <Pricing02 />
        <CTA03 />
        <Footer />
      </div>
    </div>
  );
}
