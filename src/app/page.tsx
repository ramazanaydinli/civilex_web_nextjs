// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // DEĞİŞİKLİK BURADA: 'pb-[100px] md:pb-0' eklendi.
    // Bu sayede mobilde en alta 100px boşluk bırakılır, menü içeriği kapatmaz.
    <div className="min-h-screen bg-white text-black overflow-x-hidden relative selection:bg-[#B9FF66] selection:text-black pb-[100px] md:pb-0">
      
      {/* --- BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      <div className="absolute top-0 left-0 z-0 w-[500px] h-[500px] bg-[#61DEF4] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Hero />

      {/* --- FOOTER SECTION --- */}
      <Footer />

    </div>
  );
}