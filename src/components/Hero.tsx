// src/components/Hero.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent } from "@/content/hero";
import PhoneScreenContent from "@/components/PhoneScreenContent";

// Görsel Verileri
const projectVisuals = [
  {
    id: 1,
    color: "#4F46E5",
    bgImage: "/phone_bg.png"
  },
  {
    id: 2,
    color: "#8B5CF6",
    bgImage: "/phone_bg_purple.png"
  }
];

const Hero = () => {
  const { lang } = useLanguage();
  const t = heroContent[lang];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // ANA SÜRE: 4500ms (4.5 Saniye)
  const DURATION = 4500;
  const UPDATE_INTERVAL = 20;

  useEffect(() => {
    if (isPaused) return;

    const step = 100 * (UPDATE_INTERVAL / DURATION);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % projectVisuals.length);
          return 0;
        }
        return prev + step;
      });
    }, UPDATE_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const handleManualChange = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const currentVisual = projectVisuals[currentIndex];

  // E-posta konu başlığını dile göre ayarla
  const mailSubject = lang === 'en' ? "Test Phase Participation" : "Test Aşamasına Katılım";

  const tabMenu = (
    <div className="w-full max-w-[500px] bg-gray-100 rounded-full p-1 flex relative overflow-hidden shadow-sm">
      {/* Dolan Bar */}
      <div
        className="absolute top-1 bottom-1 rounded-full transition-all duration-75 ease-linear opacity-20"
        style={{
          backgroundColor: currentVisual.color,
          left: currentIndex === 0 ? "4px" : "calc(50% + 2px)",
          width: `calc(${progress / 2}% - 4px)`
        }}
      ></div>

      {/* Aktif Tab Kutusu */}
      <div
        className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm border border-gray-200 transition-all duration-300 ease-in-out"
        style={{
          width: "calc(50% - 4px)",
          left: currentIndex === 0 ? "4px" : "calc(50%)"
        }}
      ></div>

      {/* Butonlar */}
      {t.projects.map((proj, index) => {
        const isActive = currentIndex === index;
        return (
          <button
            key={index}
            onClick={() => handleManualChange(index)}
            className={`relative z-10 flex-1 py-3 text-[11px] md:text-sm font-bold transition-colors duration-300 text-center whitespace-nowrap overflow-hidden text-ellipsis px-2
                        ${isActive ? "text-black" : "text-gray-400 hover:text-gray-600"}
                      `}
          >
            {proj.name}
          </button>
        );
      })}
    </div>
  );

  return (
    <section className="relative w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between px-6 pt-8 md:px-[100px] md:pt-6 md:pb-20 gap-12 overflow-visible">

      {/* --- SOL TARAF --- */}
      <div
        className="flex-1 flex flex-col items-start max-w-[600px] z-10 md:sticky md:top-40"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >

        {/* 1. TAB MENÜSÜ */}
        <div className="mb-8 w-full">
          {tabMenu}
        </div>

        {/* BAŞLIK */}
        <h1 className="text-5xl md:text-[64px] leading-[1.1] font-medium tracking-tight text-gray-900 mb-6">
          {t.title} – <br />
          <span className="text-gray-400">{t.subtitle}</span>
        </h1>

        {/* AÇIKLAMA */}
        <div className="mb-8">
          <p
            key={currentIndex}
            className="text-lg text-gray-600 leading-relaxed animate-fade-in"
          >
            {t.projects[currentIndex].mainDescription}
          </p>
        </div>

        {/* GÜNCELLENEN BUTON (mailto linki) */}
        <a 
          href={`mailto:info@civilex.ai?subject=${encodeURIComponent(mailSubject)}`}
          className="bg-[#171717] text-white px-8 py-4 rounded-xl font-medium text-lg hover:bg-black hover:scale-105 transition-all shadow-lg inline-block text-center"
        >
          {t.cta}
        </a>

      </div>

      {/* --- SAĞ TARAF --- */}
      <div className="flex-1 flex flex-col w-full relative mt-12 md:mt-8 pb-[100px] md:pb-0">

        {/* 2. TAB MENÜSÜ (Mobil) */}
        <div className="block md:hidden w-full mb-8 z-30">
          {tabMenu}
        </div>

        {/* TELEFON KAPSAYICISI */}
        <div className="relative w-full h-[600px] md:h-[750px]">

          {/* ARKA PLAN ŞEKLİ */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[520px] h-[600px] flex items-center justify-center z-0 pointer-events-none">
            <div className="relative w-[510px] h-[600px] opacity-90 transition-opacity duration-500">
              <Image
                key={currentVisual.bgImage}
                src={currentVisual.bgImage}
                alt="Background abstract shape"
                fill
                className="object-contain animate-fade-in"
                priority
              />
            </div>
          </div>

          {/* TELEFON MOCKUP */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] md:w-[320px] transition-transform duration-500 hover:scale-[1.02]">

            <div className="relative w-full aspect-[9/19] bg-white rounded-[45px] border-[12px] border-black shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-black rounded-b-[20px] z-20"></div>

              {/* EKRAN İÇERİĞİ */}
              <PhoneScreenContent currentIndex={currentIndex} />

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