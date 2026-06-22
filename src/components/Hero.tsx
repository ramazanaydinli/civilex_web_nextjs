// src/components/Hero.tsx
"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent } from "@/content/hero";
import PhoneScreenContent from "@/components/PhoneScreenContent";

// Tek öne çıkan ürün: Atik Arena (yeşil tema)
const ATIK_BG = "/phone_bg_green.png";

// Atik Arena Google Play mağaza linki (Android, canlı)
const ATIK_PLAY_URL = "https://play.google.com/store/apps/details?id=com.civilexai.atik";

const Hero = () => {
  const { lang } = useLanguage();
  const t = heroContent[lang];
  const atik = t.projects[0]; // Artık tek ürün var

  // Dile göre resmi Google Play rozeti
  const playBadge = lang === "tr" ? "/gplay_badge_tr.png" : "/gplay_badge_en.png";

  return (
    <section className="relative w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between px-6 pt-8 md:px-[100px] md:pt-6 md:pb-20 gap-12 overflow-visible">

      {/* --- SOL TARAF --- */}
      <div className="flex-1 flex flex-col items-start max-w-[600px] z-10 md:sticky md:top-40">

        {/* ÜRÜN ROZETİ (eski sekme menüsünün yerine) */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gray-100 rounded-full pl-3 pr-4 py-2 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
          <span className="text-sm font-bold text-gray-800">{atik.name}</span>
        </div>

        {/* BAŞLIK */}
        <h1 className="text-5xl md:text-[64px] leading-[1.1] font-medium tracking-tight text-gray-900 mb-6">
          {t.title} – <br />
          <span className="text-gray-400">{t.subtitle}</span>
        </h1>

        {/* AÇIKLAMA */}
        <div className="mb-8">
          <p className="text-lg text-gray-600 leading-relaxed animate-fade-in">
            {atik.mainDescription}
          </p>
        </div>

        {/* CTA — Google Play (Android, canlı) */}
        <a
          href={ATIK_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.download}
          className="inline-block transition-transform hover:scale-105 active:scale-95"
        >
          <Image
            src={playBadge}
            alt={t.download}
            width={646}
            height={250}
            priority
            className="h-[60px] w-auto"
          />
        </a>

        {/* Platform notu */}
        <p className="mt-3 text-sm text-gray-400">{t.platformNote}</p>

      </div>

      {/* --- SAĞ TARAF --- */}
      <div className="flex-1 flex flex-col w-full relative mt-12 md:mt-8 pb-[100px] md:pb-0">

        {/* TELEFON KAPSAYICISI */}
        <div className="relative w-full h-[600px] md:h-[750px]">

          {/* ARKA PLAN ŞEKLİ */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[600px] flex items-center justify-center z-0 pointer-events-none">
            <div className="relative w-[510px] h-[600px] opacity-90">
              <Image
                src={ATIK_BG}
                alt="Background abstract shape"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* TELEFON MOCKUP */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] md:w-[320px] transition-transform duration-500 hover:scale-[1.02]">

            <div className="relative w-full aspect-[9/19] bg-white rounded-[45px] border-[12px] border-black shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-black rounded-b-[20px] z-20"></div>

              {/* EKRAN İÇERİĞİ */}
              <PhoneScreenContent />

            </div>

            {/* Yan Tuşlar */}
            <div className="absolute top-[100px] -left-[4px] w-[4px] h-[30px] bg-gray-800 rounded-l-sm"></div>
            <div className="absolute top-[140px] -left-[4px] w-[4px] h-[50px] bg-gray-800 rounded-l-sm"></div>
            <div className="absolute top-[120px] -right-[4px] w-[4px] h-[60px] bg-gray-800 rounded-r-sm"></div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
