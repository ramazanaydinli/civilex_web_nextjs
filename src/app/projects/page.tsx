"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { projectsContent } from "@/content/projects";

// Atik Arena mağaza linkleri (Hero.tsx ile aynı olmalı)
const ATIK_PLAY_URL = "https://play.google.com/store/apps/details?id=com.civilexai.atik";
const ATIK_TESTFLIGHT_URL = "https://testflight.apple.com/join/DqUPsrdF";

// --- MODERN KART BİLEŞENİ ---
const ModernCard = ({ title, text, variant, index }: { title: string; text: string; variant: string; index: number }) => {
  const variants: Record<string, string> = {
    dark: "bg-[#191A23]/95 text-white border-gray-800 shadow-xl",
    blue: "bg-gradient-to-br from-[#3F73D8] to-[#244280] text-white border-blue-400/30 shadow-blue-900/20",
    light: "bg-white/60 backdrop-blur-md text-[#191A23] border-gray-200 hover:border-[#61DEF4]/50",
  };

  const accentColors: Record<string, string> = {
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
      <div className="absolute top-6 right-8 text-6xl font-bold opacity-5 pointer-events-none select-none">
        0{index + 1}
      </div>

      <div className="relative z-10 mb-6">
        <div className={`w-12 h-1 mb-4 rounded-full ${accentColors[variant]} transition-all group-hover:w-20`}></div>
        <h3 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight">
          {title}
        </h3>
      </div>

      <p className="relative z-10 text-base md:text-lg leading-relaxed opacity-90 font-light">
        {text}
      </p>
    </div>
  );
};

export default function ProjectsPage() {
  const { lang } = useLanguage();
  const t = projectsContent[lang];
  const playBadge = lang === "tr" ? "/gplay_badge_tr.png" : "/gplay_badge_en.png";

  return (
    <div className="min-h-screen bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden pb-[100px] md:pb-0 relative">

      {/* --- ORTAK ARKA PLAN --- */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
      <div className="fixed top-0 right-0 z-0 w-[600px] h-[600px] bg-[#61DEF4] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 z-0 w-[500px] h-[500px] bg-[#4F46E5] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="w-full relative z-10">

        {/* --- SAYFA BAŞLIĞI --- */}
        <section className="pt-20 pb-8 px-6">
          <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-6 max-w-4xl text-[#191A23]">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              {t.hero.description}
            </p>
          </div>
        </section>

        {/* ================= ANA ÜRÜN: ATİK ARENA ================= */}
        <section className="pt-8 pb-24 px-6 relative" id="atik-arena">
          <div className="max-w-[1400px] mx-auto">

            {/* --- Ürün başlığı --- */}
            <div className="flex flex-col items-start mb-14">
              <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full pl-3 pr-4 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
                <span className="text-sm font-bold text-[#0F766E]">{t.atik.eyebrow}</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">{t.atik.title}</h2>
              <p className="text-2xl md:text-4xl font-medium text-gray-400 tracking-tight mb-8 max-w-3xl">
                {t.atik.tagline}
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                {t.atik.description}
              </p>
            </div>

            {/* --- Görsel + hızlı bakış + indirme --- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

              {/* Sol: telefon mockup */}
              <div className="lg:col-span-5 flex justify-center relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-gradient-to-tr from-[#10B981]/25 to-[#61DEF4]/10 blur-3xl rounded-full z-0"></div>

                <div className="relative z-10 w-[260px] md:w-[300px]">
                  <div className="relative w-full aspect-[9/19] bg-white rounded-[45px] border-[12px] border-black shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[28px] w-[110px] bg-black rounded-b-[20px] z-20"></div>
                    <Image
                      src="/atik_3.png"
                      alt={t.atik.tagline}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-[100px] -left-[4px] w-[4px] h-[30px] bg-gray-800 rounded-l-sm"></div>
                  <div className="absolute top-[140px] -left-[4px] w-[4px] h-[50px] bg-gray-800 rounded-l-sm"></div>
                  <div className="absolute top-[120px] -right-[4px] w-[4px] h-[60px] bg-gray-800 rounded-r-sm"></div>
                </div>
              </div>

              {/* Sağ: hızlı bakış tablosu + CTA */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-[2rem] overflow-hidden border border-gray-200 mb-10">
                  {t.atik.facts.map((fact, idx: number) => (
                    <div key={idx} className="bg-white p-6 md:p-8">
                      <span className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
                        {fact.label}
                      </span>
                      <span className="block text-xl md:text-2xl font-medium tracking-tight text-[#191A23]">
                        {fact.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href={ATIK_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-transform hover:scale-105 active:scale-95"
                  >
                    <Image
                      src={playBadge}
                      alt="Google Play"
                      width={646}
                      height={250}
                      className="h-[58px] w-auto"
                    />
                  </a>

                  <a
                    href={ATIK_TESTFLIGHT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-black border border-gray-200 hover:border-gray-300 rounded-full px-5 py-3 transition-colors"
                  >
                    <svg viewBox="0 0 384 512" className="w-4 h-4 fill-current shrink-0" aria-hidden="true">
                      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                    </svg>
                    TestFlight
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* --- Özellik kartları (2x2) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24">
              {t.atik.cards.map((card, idx: number) => (
                <ModernCard
                  key={idx}
                  index={idx}
                  title={card.title}
                  text={card.text}
                  variant={card.variant}
                />
              ))}
            </div>

            {/* --- Arenadaki oyunlar --- */}
            <div className="bg-[#191A23] text-white rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#10B981] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

              <div className="relative z-10">
                <div className="max-w-3xl mb-12">
                  <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-5">
                    {t.atik.gamesTitle}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {t.atik.gamesNote}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {t.atik.games.map((game, idx: number) => (
                    <div
                      key={idx}
                      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.75rem] p-7 hover:bg-white/10 hover:border-[#10B981]/40 transition-all duration-300"
                    >
                      <div className="w-10 h-1 mb-5 rounded-full bg-[#10B981] transition-all group-hover:w-16"></div>
                      <h4 className="text-xl font-medium mb-3 text-white">{game.name}</h4>
                      <p className="text-gray-400 leading-relaxed font-light">{game.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= AR-GE ÇALIŞMALARI ================= */}
        <section className="py-24 px-6 bg-[#F8F9FA]/60 backdrop-blur-sm rounded-[3rem] mx-2 md:mx-6 mb-20" id="rnd">
          <div className="max-w-[1400px] mx-auto">

            <div className="max-w-3xl mb-16">
              <span className="text-[#3F73D8] font-bold tracking-widest uppercase text-sm mb-3 block">
                {t.rnd.eyebrow}
              </span>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6">{t.rnd.title}</h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {t.rnd.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {t.rnd.items.map((item, idx: number) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-[#61DEF4]/60 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <span className="text-[#3F73D8] font-bold tracking-widest uppercase text-xs mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
