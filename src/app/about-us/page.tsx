// src/app/about-us/page.tsx
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { aboutContent } from "@/content/about";

export default function AboutUs() {
  const { lang } = useLanguage();
  const t = aboutContent[lang];

  return (
    <div className="min-h-screen bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden pb-[100px] md:pb-0 relative">
      
      {/* --- ARKA PLAN (Global) --- */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
      
      {/* Glow Efektleri */}
      <div className="fixed top-0 left-0 z-0 w-[500px] h-[500px] bg-[#61DEF4] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 z-0 w-[400px] h-[400px] bg-[#3F73D8] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="w-full relative z-10">
        
        {/* --- HERO / BAŞLIK SECTION --- */}
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-[1200px] mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 text-[#191A23]">
              {t.title}
            </h1>
            <div className="w-24 h-1 bg-[#61DEF4] mx-auto rounded-full"></div>
          </div>
        </section>

        {/* --- HİKAYEMİZ VE MİSYONUMUZ (Yan Yana Kartlar) --- */}
        <section className="py-12 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Hikayemiz */}
            <div className="bg-[#F3F3F3]/80 backdrop-blur-sm p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-3xl md:text-4xl font-medium mb-6 text-[#191A23] tracking-tight">
                {t.story.title}
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed font-light">
                {t.story.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Misyonumuz */}
            <div className="bg-[#191A23] text-white p-8 md:p-12 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
               {/* Arka plan dekoratif glow */}
               <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#3F73D8] rounded-full blur-[50px] opacity-40 pointer-events-none group-hover:opacity-60 transition-opacity"></div>
              
              <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight relative z-10 text-white">
                {t.mission.title}
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed font-light relative z-10">
                {t.mission.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* --- BİZİ FARKLI KILAN NEDİR? --- */}
        <section className="py-16 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight text-[#191A23]">{t.difference.title}</h2>
              <p className="text-xl text-gray-500 font-medium">{t.difference.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.difference.features.map((feature, idx) => (
                <div key={idx} className="bg-white border border-gray-200 p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl hover:border-[#61DEF4]/50 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[#61DEF4]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#61DEF4] transition-all duration-300">
                     <div className="w-4 h-4 bg-[#61DEF4] group-hover:bg-white rounded-full transition-colors"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#191A23]">{feature.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- VİZYONUMUZ --- */}
        <section className="py-16 px-6 mb-12">
          <div className="max-w-[1200px] mx-auto bg-gradient-to-br from-[#3F73D8] to-[#244280] text-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl hover:shadow-[#3F73D8]/30 transition-shadow">
             {/* Dekoratif üst glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
             
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight relative z-10">{t.vision.title}</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-xl md:text-2xl text-white/90 leading-relaxed font-light relative z-10">
              {t.vision.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}