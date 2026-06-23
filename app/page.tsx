import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Screenshots />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
