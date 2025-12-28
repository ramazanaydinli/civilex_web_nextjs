"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { projectsContent } from "@/content/projects";

// --- MODERN KART BİLEŞENİ ---
// Glassmorphism ve Hover efektleriyle güçlendirilmiş kart yapısı
const ModernCard = ({ title, text, variant, index }: { title: string; text: string; variant: 'dark' | 'blue' | 'light'; index: number }) => {
  
  // Renk varyasyonlarını modern gradyanlar ve borderlarla güncelledik
  const variants = {
    dark: "bg-[#191A23]/95 text-white border-gray-800 shadow-xl",
    blue: "bg-gradient-to-br from-[#3F73D8] to-[#244280] text-white border-blue-400/30 shadow-blue-900/20",
    light: "bg-white/60 backdrop-blur-md text-[#191A23] border-gray-200 hover:border-[#61DEF4]/50",
  };

  const accentColors = {
    dark: "bg-[#61DEF4]",
    blue: "bg-white",
    light: "bg-[#3F73D8]",
  };

  return (
    <div 
      className={`
        group relative w-full p-8 rounded-[2rem] border transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-start h-full
        ${variants[variant]}
      `}
    >
      {/* Dekoratif Numara (Opsiyonel: Kartlara sıra numarası ekler) */}
      <div className="absolute top-6 right-8 text-6xl font-bold opacity-5 pointer-events-none select-none">
        0{index + 1}
      </div>

      {/* Başlık ve İkon Alanı */}
      <div className="relative z-10 mb-6">
        <div className={`w-12 h-1 mb-4 rounded-full ${accentColors[variant]} transition-all group-hover:w-20`}></div>
        <h3 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
          {title}
        </h3>
      </div>

      {/* Metin */}
      <p className="relative z-10 text-base md:text-lg leading-relaxed opacity-90 font-light">
        {text}
      </p>
    </div>
  );
};

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = projectsContent[lang];

  return (
    <div className="min-h-screen bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden pb-[100px] md:pb-0 relative">
      
      {/* --- ORTAK ARKA PLAN (Ana Sayfa ile Aynı) --- */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
      
      {/* Sağ Üst Glow */}
      <div className="fixed top-0 right-0 z-0 w-[600px] h-[600px] bg-[#61DEF4] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      {/* Sol Alt Glow */}
      <div className="fixed bottom-0 left-0 z-0 w-[500px] h-[500px] bg-[#4F46E5] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="w-full relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-20 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 max-w-4xl text-[#191A23]">
              {t.hero.title}
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-16">
              {t.hero.description}
            </p>

            {/* Hero Illustration - Yüzen Animasyon */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-fade-in-up">
               {/* Arka plan glow */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#61DEF4]/20 to-transparent blur-3xl rounded-full"></div>
               <Image 
                  src="/images/Illustration5.png" 
                  alt="Research Illustration" 
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
            </div>
          </div>
        </section>


        {/* --- PROJE 1: PILAITES --- */}
        <section className="py-24 px-6 relative" id="pilates">
          <div className="max-w-[1400px] mx-auto">
            
            {/* Section Header */}
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-gray-200 pb-8">
              <div>
                <span className="text-[#3F73D8] font-bold tracking-widest uppercase text-sm mb-2 block">Mobile AI</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight">{t.pilates.title}</h2>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl text-right md:text-right">
                {t.pilates.description}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Sol Taraf: Telefon Görseli */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
                {/* Dekoratif Daire */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#191A23]/5 rounded-full z-0"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-[#191A23]/5 rounded-full z-0"></div>
                
                <div className="relative w-[320px] h-[640px] md:w-[400px] md:h-[800px] z-10 rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-in-out">
                  <Image 
                    src="/images/Phone.png" 
                    alt="PilAItes App" 
                    fill 
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Sağ Taraf: Özellik Kartları */}
              <div className="lg:col-span-7 grid grid-cols-1 gap-6">
                 {t.pilates.cards.map((card: any, idx: number) => (
                    <ModernCard 
                      key={idx}
                      index={idx}
                      title={card.title}
                      text={card.text}
                      variant={card.variant}
                    />
                 ))}
              </div>

            </div>
          </div>
        </section>


        {/* --- PROJE 2: PHYSIOTHERAPIST --- */}
        <section className="py-24 px-6 bg-[#F8F9FA]/50 backdrop-blur-sm rounded-[3rem] my-12" id="physiotherapist">
          <div className="max-w-[1400px] mx-auto">
            
             <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="text-[#61DEF4] font-bold tracking-widest uppercase text-sm mb-2 block">Health Tech</span>
                <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">{t.physio.title}</h2>
                <p className="text-xl text-gray-600">
                  {t.physio.description}
                </p>
            </div>

            {/* Illustration */}
            <div className="w-full flex justify-center mb-16">
              <div className="relative w-full max-w-[900px] h-[300px] md:h-[500px] group">
                <Image 
                  src="/images/Illustration6.png" 
                  alt="Physiotherapy Illustration"
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Grid Cards (2x2) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
               {t.physio.cards.map((card: any, idx: number) => (
                  <ModernCard 
                    key={idx}
                    index={idx}
                    title={card.title}
                    text={card.text}
                    variant={card.variant}
                  />
               ))}
            </div>

          </div>
        </section>


        {/* --- PROJE 3: HARNESS DETECTION (Dark Theme Section) --- */}
        <section className="py-24 px-6 bg-[#191A23] text-white rounded-[3rem] mx-2 md:mx-6 mb-20 shadow-2xl relative overflow-hidden" id="harness">
          
          {/* Arka plan efekti */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#61DEF4] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto relative z-10">
             
             {/* Header */}
             <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 border-b border-white/10 pb-8">
                <div>
                  <span className="text-[#61DEF4] font-bold tracking-widest uppercase text-sm mb-2 block">Safety AI</span>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">{t.harness.title}</h2>
                  <p className="text-lg text-gray-400 max-w-2xl">{t.harness.description}</p>
                </div>
                
                {/* Modern Video Button */}
                <Link href="#" className="group flex items-center gap-4 px-6 py-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all">
                   <div className="w-12 h-12 bg-[#61DEF4] rounded-full flex items-center justify-center text-[#191A23] group-hover:scale-110 transition-transform">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                   </div>
                   <span className="font-medium text-lg">{t.harness.watchVideo}</span>
                </Link>
             </div>

             {/* Cards with Icons */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 1. Kart */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-3 text-white">{t.harness.cards[0].title}</h3>
                      <p className="text-gray-400">{t.harness.cards[0].text}</p>
                    </div>
                    <div className="relative w-24 h-24 flex-shrink-0">
                       <Image src="/images/Illustration7.png" alt="Icon" fill className="object-contain opacity-80" />
                    </div>
                </div>

                {/* 2. Kart (Açık renk stil) */}
                <div className="bg-[#61DEF4] text-[#191A23] p-8 rounded-[2rem] hover:shadow-[0_0_30px_rgba(97,222,244,0.3)] transition-shadow flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-3">{t.harness.cards[1].title}</h3>
                      <p className="text-[#191A23]/80 font-medium">{t.harness.cards[1].text}</p>
                    </div>
                    <div className="relative w-24 h-24 flex-shrink-0">
                       <Image src="/images/Illustration8.png" alt="Icon" fill className="object-contain mix-blend-multiply" />
                    </div>
                </div>

                 {/* 3. Kart (Mavi stil) */}
                 <div className="bg-[#3F73D8] text-white p-8 rounded-[2rem] hover:shadow-[0_0_30px_rgba(63,115,216,0.4)] transition-shadow flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-3">{t.harness.cards[2].title}</h3>
                      <p className="text-white/90">{t.harness.cards[2].text}</p>
                    </div>
                    <div className="relative w-24 h-24 flex-shrink-0">
                       <Image src="/images/Illustration9.png" alt="Icon" fill className="object-contain" />
                    </div>
                </div>

                {/* 4. Kart */}
                <div className="bg-white text-[#191A23] p-8 rounded-[2rem] border border-transparent hover:border-[#61DEF4] transition-all flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium mb-3">{t.harness.cards[3].title}</h3>
                      <p className="text-gray-600">{t.harness.cards[3].text}</p>
                    </div>
                    <div className="relative w-24 h-24 flex-shrink-0">
                       <Image src="/images/Illustration10.png" alt="Icon" fill className="object-contain" />
                    </div>
                </div>
             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}