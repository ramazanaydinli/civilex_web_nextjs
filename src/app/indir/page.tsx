// src/app/indir/page.tsx
// Fuar / QR iniş sayfası: cihaz seç → mağazaya yönlendir.
"use client";

import Image from "next/image";
import { useState } from "react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.civilexai.atik";

const copy = {
  tr: {
    toggle: "EN",
    tagline: "Kumanda yok. Kahramanı sen oynuyorsun.",
    question: "Hangi telefonu kullanıyorsun?",
    android: "Android",
    androidSub: "Google Play'den indir",
    iphone: "iPhone",
    iphoneSub: "App Store",
    iosTitle: "iOS sürümü çok yakında!",
    iosMsg: "iPhone uygulaması yolda. Şimdilik Android'de oynayabilirsin.",
    iosAlt: "Android'de oyna",
    back: "Geri dön",
    shot: "Telefonu koy, karşısına geç, hareketle oyna.",
    foot: "Civilex.AI · Hareketle oynanan çocuk oyunları",
  },
  en: {
    toggle: "TR",
    tagline: "No controller. You are the hero.",
    question: "Which phone do you use?",
    android: "Android",
    androidSub: "Get it on Google Play",
    iphone: "iPhone",
    iphoneSub: "App Store",
    iosTitle: "iOS version coming very soon!",
    iosMsg: "The iPhone app is on the way. For now you can play on Android.",
    iosAlt: "Play on Android",
    back: "Go back",
    shot: "Place the phone, step in front, play with movement.",
    foot: "Civilex.AI · Move-to-play games for kids",
  },
} as const;

const AndroidIcon = () => (
  <svg viewBox="0 0 576 512" className="w-7 h-7 fill-white shrink-0" aria-hidden="true">
    <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.5 47.9-83a10 10 0 1 0-17.3-10l-48.5 84.1a301.3 301.3 0 0 0-246.6 0L116.2 64.4a10 10 0 1 0-17.3 10l47.9 83C64.5 202.2 8.2 285.6 0 384h576c-8.2-98.4-64.5-181.8-146.9-226.6" />
  </svg>
);

const AppleIcon = ({ className = "w-6 h-6 fill-[#1B1A1F] shrink-0" }: { className?: string }) => (
  <svg viewBox="0 0 384 512" className={className} aria-hidden="true">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const Chevron = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default function Indir() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [showIos, setShowIos] = useState(false);
  const t = copy[lang];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#FAF6EE] text-[#1B1A1F] flex flex-col items-center justify-center px-6 py-12">

      {/* Dekoratif arka plan lekeleri */}
      <div className="pointer-events-none absolute -top-20 -right-16 w-64 h-64 rounded-full bg-[#F4B73C]/30 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-24 w-60 h-60 rounded-full bg-[#7FB3D5]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-0 w-72 h-72 rounded-full bg-[#F25E47]/20 blur-3xl" />

      <div className="relative w-full max-w-[400px] flex flex-col items-center text-center">

        {/* Dil değiştir */}
        <button
          onClick={() => { setLang(lang === "tr" ? "en" : "tr"); }}
          className="self-end mb-4 text-sm font-bold text-gray-500 hover:text-black bg-white/70 border border-black/10 rounded-full px-3.5 py-1.5 shadow-sm transition-colors"
        >
          {t.toggle}
        </button>

        {/* Logo + ad */}
        <div className="w-[88px] h-[88px] rounded-[24px] bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] flex items-center justify-center">
          <Image src="/atik_logo.png" alt="Atik Arena" width={480} height={460} priority className="w-[54px] h-auto" />
        </div>
        <h1 className="text-[34px] font-extrabold mt-4 tracking-tight">Atik Arena</h1>
        <p className="text-base text-gray-600 mt-2 leading-relaxed max-w-[300px]">{t.tagline}</p>

        {/* Cihaz seçimi / iOS durumu */}
        {!showIos ? (
          <div className="w-full mt-8 bg-white/80 backdrop-blur-sm rounded-[28px] border border-black/5 shadow-[0_16px_44px_-18px_rgba(0,0,0,0.22)] p-5">
            <p className="font-bold text-lg mb-4">{t.question}</p>
            <div className="flex flex-col gap-3">

              {/* Android → Google Play */}
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#F25E47] text-white rounded-2xl p-4 shadow-[0_10px_22px_-8px_rgba(242,94,71,0.7)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
              >
                <span className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                  <AndroidIcon />
                </span>
                <span className="flex-1 flex flex-col items-start leading-tight">
                  <span className="font-extrabold text-lg">{t.android}</span>
                  <span className="text-sm text-white/85">{t.androidSub}</span>
                </span>
                <Chevron className="w-5 h-5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* iPhone → iOS yakında */}
              <button
                onClick={() => { setShowIos(true); }}
                className="group flex items-center gap-4 bg-white text-[#1B1A1F] rounded-2xl p-4 border border-black/10 shadow-sm hover:-translate-y-0.5 hover:border-black/20 active:scale-[0.98] transition-all"
              >
                <span className="w-12 h-12 rounded-xl bg-[#F4EFE6] flex items-center justify-center shrink-0">
                  <AppleIcon />
                </span>
                <span className="flex-1 flex flex-col items-start leading-tight">
                  <span className="font-extrabold text-lg">{t.iphone}</span>
                  <span className="text-sm text-gray-500">{t.iphoneSub}</span>
                </span>
                <Chevron className="w-5 h-5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full mt-8 bg-white/80 backdrop-blur-sm rounded-[28px] border border-black/5 shadow-[0_16px_44px_-18px_rgba(0,0,0,0.22)] p-7 flex flex-col items-center">
            <span className="w-14 h-14 rounded-2xl bg-[#F4EFE6] flex items-center justify-center mb-3">
              <AppleIcon className="w-7 h-7 fill-[#1B1A1F]" />
            </span>
            <p className="font-extrabold text-xl mb-1">{t.iosTitle}</p>
            <p className="text-gray-600 mb-5 leading-relaxed">{t.iosMsg}</p>
            <a
              href={PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#F25E47] text-white rounded-2xl py-3.5 px-5 font-bold mb-3 shadow-[0_10px_22px_-8px_rgba(242,94,71,0.7)] hover:-translate-y-0.5 active:scale-[0.98] transition-all"
            >
              {t.iosAlt}
            </a>
            <button onClick={() => { setShowIos(false); }} className="text-sm font-medium text-gray-500 hover:text-black underline">
              {t.back}
            </button>
          </div>
        )}

        {/* Ekran görüntüsü */}
        <div className="mt-10 flex flex-col items-center">
          <div className="w-[172px] rounded-[32px] overflow-hidden border-[6px] border-[#1B1A1F] shadow-[0_20px_44px_-16px_rgba(0,0,0,0.45)]">
            <Image src="/atik_2.png" alt="Atik Arena oyun ekranı" width={1509} height={3354} className="w-full h-auto block" />
          </div>
          <p className="mt-4 text-xs text-gray-400 max-w-[250px] leading-relaxed">{t.shot}</p>
        </div>

        <p className="mt-8 text-xs text-gray-400">{t.foot}</p>
      </div>
    </main>
  );
}
