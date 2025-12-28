// src/app/about-us/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { aboutContent } from "@/content/about";

export default function AboutUs() {
  const { lang } = useLanguage();
  const t = aboutContent[lang];

  return (
    <div className="min-h-screen bg-white text-[#191A23] flex flex-col overflow-x-hidden selection:bg-[#B9FF66] selection:text-black">
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content - Coming Soon Section */}
      <main className="flex-grow flex items-center justify-center relative z-10 w-full px-6 py-20 md:py-0">
        
        <div className="w-full max-w-[600px] mx-auto text-center p-6 md:p-10">
          
          {/* Logo */}
          <div className="mb-10 relative w-[120px] h-[120px] mx-auto opacity-80">
             <Image 
                src="/civilexlogo.png" 
                alt="Civilex.AI Logo" 
                fill 
                className="object-contain"
                priority
             />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#191A23] mb-6 tracking-tight leading-[1.2]">
            {t.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-[500px] mx-auto">
            {t.description}
          </p>

          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-block bg-[#61DEF4] text-[#191A23] px-8 py-4 rounded-lg font-semibold text-base border-2 border-[#61DEF4] transition-all duration-300 hover:bg-white hover:text-[#61DEF4] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(97,222,244,0.3)]"
          >
            {t.backButton}
          </Link>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}