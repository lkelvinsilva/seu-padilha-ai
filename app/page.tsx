import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import AISection from "@/components/AISection";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import AIChat from "@/components/AIChat";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      <Menu />

      <AISection />

      <Stats />

      <Footer />

      <AIChat />
    </>
  );
}