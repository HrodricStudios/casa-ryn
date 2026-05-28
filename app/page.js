"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProductsCarousel from "@/components/ProductsCarousel";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Navbar />
      <Hero />
      <Services />
      <ProductsCarousel />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}