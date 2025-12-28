// src/components/PhoneScreenContent.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Comfortaa } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";
import { heroContent } from "@/content/hero";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

interface PhoneScreenContentProps {
  currentIndex: number;
}

const PhoneScreenContent = ({ currentIndex }: PhoneScreenContentProps) => {
  const { lang } = useLanguage();
  const t = heroContent[lang];
  const [internalIndex, setInternalIndex] = useState(0);

  // 1.5 saniyede bir slayt değiştir
  useEffect(() => {
    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % 3);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Proje değişince slaytı başa sar
  useEffect(() => {
    setInternalIndex(0);
  }, [currentIndex]);

  // --- 1. PROJE: POSE PERFECT PILATES (Dokunulmadı) ---
  if (currentIndex === 0) {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[35px] bg-gray-50">
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${internalIndex * 100}%)` }}
        >
          {/* SLAYT 1: LOGO */}
          <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center relative">
            <div className="relative w-[150px] h-[150px] mb-4">
              <Image
                src="/logo_poseperfect.png"
                alt="Pose Perfect Pilates Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className={`text-center mb-12 ${comfortaa.className}`}>
              <span className="block text-2xl font-bold text-black leading-none">
                Pose Perfect
              </span>
              <span className="block text-2xl font-bold text-[#4F46E5] leading-tight mt-1">
                Pilates
              </span>
            </div>
            <div className="absolute bottom-10 flex flex-col items-center z-20 opacity-80">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">
                Powered By
              </span>
              <div className="w-16 h-5 relative">
                <Image src="/civilexlogo.png" alt="Civilex" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* SLAYT 2: DOĞRU */}
          <div className="w-full h-full flex-shrink-0 relative">
            <Image
              src="/Exercisescreen-horizontal-true.png"
              alt="Correct Exercise"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-20 left-6 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm z-20">
              <span className="block text-xs text-gray-500 font-medium">{t.time}</span>
              <span className="block text-xl font-bold text-gray-900">08:45</span>
            </div>
          </div>

          {/* SLAYT 3: YANLIŞ */}
          <div className="w-full h-full flex-shrink-0 relative">
            <Image
              src="/Exercisescreen-horizontal-false.png"
              alt="Incorrect Exercise"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-20 left-6 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm z-20">
              <span className="block text-xs text-gray-500 font-medium">{t.time}</span>
              <span className="block text-xl font-bold text-gray-900">08:47</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- 2. PROJE: PENTATHLON (GÜNCELLENDİ) ---
  // Pilates yapısının aynısı kopyalandı, içerikler Lazer Run için uyarlandı.
  if (currentIndex === 1) {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-[35px] bg-gray-50">
        
        {/* KAYAN RAY (Aynı Mantık) */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${internalIndex * 100}%)` }}
        >
          
          {/* --- SLAYT 1: PENTATHLON LOGO EKRANI --- */}
          <div className="w-full h-full flex-shrink-0 flex flex-col items-center justify-center relative">
            
            {/* Logo: Lazer Run */}
            <div className="relative w-[150px] h-[150px] mb-4">
              <Image
                src="/lazer_run.png" // LOGO DEĞİŞTİ
                alt="Pentathlon Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Uygulama İsmi */}
            <div className={`text-center mb-12 ${comfortaa.className}`}>
              <span className="block text-xl font-bold text-black leading-none">
                Pentathlon
              </span>
              {/* Rengi Kırmızı (#ef4444) yaptık tema uyumu için */}
              <span className="block text-xl font-bold text-[#ef4444] leading-tight mt-1">
                Exercise Tracker
              </span>
            </div>

            {/* Powered By (Aynı kalıyor) */}
            <div className="absolute bottom-10 flex flex-col items-center z-20 opacity-80">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold mb-1">
                Powered By
              </span>
              <div className="w-16 h-5 relative">
                <Image
                  src="/civilexlogo.png"
                  alt="Civilex"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* --- SLAYT 2: EKRAN GÖRÜNTÜSÜ 1 --- */}
          {/* Şimdilik elinde görsel yoksa yapı bozulmasın diye Pilates'tekini placeholder olarak bıraktım. */}
          {/* Buraya '/pent_screen_1.png' gibi kendi resmin gelince değiştirirsin. */}
          <div className="w-full h-full flex-shrink-0 relative">
            <Image
              src="/pent_1.png" // DEĞİŞTİRİLECEK
              alt="Pentathlon Action 1"
              fill
              className="object-cover"
              priority
            />
        
          </div>

          {/* --- SLAYT 3: EKRAN GÖRÜNTÜSÜ 2 --- */}
          {/* Buraya da '/pent_screen_2.png' gelecek */}
          <div className="w-full h-full flex-shrink-0 relative">
            <Image
              src="/pent_2.png" // DEĞİŞTİRİLECEK
              alt="Pentathlon Action 2"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-10 left-6 bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-sm z-20">
               <span className="block text-xs text-gray-500 font-medium">
                Target
              </span>
              <span className="block text-xl font-bold text-gray-900">5 Hits</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  return null;
};

export default PhoneScreenContent;