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
    badge: "MEB DESTEKLİ · 6–10 YAŞ",
    question: "Hangi telefonun var?",
    android: "Android",
    androidSub: "Google Play'den indir",
    iphone: "iPhone",
    iphoneSub: "App Store",
    iosTitle: "iOS sürümü çok yakında!",
    iosMsg: "iPhone uygulaması yolda. Şu an Android'de oynanabilir.",
    iosAlt: "Android'de oyna",
    back: "Geri dön",
    foot: "Civilex.AI · Hareketle oynanan çocuk oyunları",
  },
  en: {
    toggle: "TR",
    tagline: "No controller. You are the hero.",
    badge: "BACKED BY MoNE · AGES 6–10",
    question: "Which phone do you have?",
    android: "Android",
    androidSub: "Get it on Google Play",
    iphone: "iPhone",
    iphoneSub: "App Store",
    iosTitle: "iOS version coming very soon!",
    iosMsg: "The iPhone app is on the way. Available on Android right now.",
    iosAlt: "Play on Android",
    back: "Go back",
    foot: "Civilex.AI · Move-to-play games for kids",
  },
} as const;

export default function Indir() {
  const [lang, setLang] = useState<"tr" | "en">("tr");
  const [showIos, setShowIos] = useState(false);
  const t = copy[lang];

  return (
    <main className="min-h-screen w-full bg-[#FAF6EE] text-[#1B1A1F] flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-[400px] flex flex-col items-center text-center">

        {/* Dil değiştir */}
        <button
          onClick={() => { setLang(lang === "tr" ? "en" : "tr"); }}
          className="self-end mb-2 text-sm font-bold text-gray-500 hover:text-black border border-gray-300 rounded-lg px-3 py-1 transition-colors"
        >
          {t.toggle}
        </button>

        {/* Logo + ad */}
        <Image src="/atik_logo.png" alt="Atik Arena" width={480} height={460} priority className="w-[76px] h-auto" />
        <h1 className="text-4xl font-extrabold mt-3 tracking-tight">Atik Arena</h1>
        <p className="text-base text-gray-600 mt-2 leading-relaxed">{t.tagline}</p>
        <span className="mt-3 text-xs font-bold tracking-wider text-[#D64A35] bg-[#F25E47]/10 rounded-full px-3 py-1">
          {t.badge}
        </span>

        {/* Cihaz seçimi / iOS durumu */}
        <div className="w-full mt-8">
          {!showIos ? (
            <>
              <p className="font-bold text-lg mb-4">{t.question}</p>

              {/* Android → Google Play */}
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center gap-4 bg-[#F25E47] text-white rounded-2xl py-4 px-5 mb-3 shadow-lg hover:scale-[1.02] active:scale-95 transition-transform"
              >
                <svg viewBox="0 0 576 512" className="w-8 h-8 fill-white shrink-0" aria-hidden="true">
                  <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1-24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24m273.7-144.5 47.9-83a10 10 0 1 0-17.3-10l-48.5 84.1a301.3 301.3 0 0 0-246.6 0L116.2 64.4a10 10 0 1 0-17.3 10l47.9 83C64.5 202.2 8.2 285.6 0 384h576c-8.2-98.4-64.5-181.8-146.9-226.6" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-extrabold text-lg">{t.android}</span>
                  <span className="text-sm opacity-90">{t.androidSub}</span>
                </span>
              </a>

              {/* iPhone → iOS yakında */}
              <button
                onClick={() => { setShowIos(true); }}
                className="w-full flex items-center gap-4 bg-white text-[#1B1A1F] border-2 border-gray-200 rounded-2xl py-4 px-5 hover:border-gray-400 active:scale-95 transition-all"
              >
                <svg viewBox="0 0 384 512" className="w-7 h-7 fill-[#1B1A1F] shrink-0" aria-hidden="true">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-extrabold text-lg">{t.iphone}</span>
                  <span className="text-sm text-gray-500">{t.iphoneSub}</span>
                </span>
              </button>
            </>
          ) : (
            <div className="w-full flex flex-col items-center bg-white border-2 border-gray-100 rounded-2xl py-7 px-5">
              <svg viewBox="0 0 384 512" className="w-9 h-9 fill-[#1B1A1F] mb-3" aria-hidden="true">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              <p className="font-bold text-xl mb-1">{t.iosTitle}</p>
              <p className="text-gray-600 mb-5 leading-relaxed">{t.iosMsg}</p>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F25E47] text-white rounded-xl py-3 px-5 font-bold mb-3 hover:scale-[1.02] active:scale-95 transition-transform"
              >
                {t.iosAlt}
              </a>
              <button onClick={() => { setShowIos(false); }} className="text-sm font-medium text-gray-500 hover:text-black underline">
                {t.back}
              </button>
            </div>
          )}
        </div>

        {/* Ekran görüntüsü */}
        <div className="mt-9 w-[168px] rounded-3xl overflow-hidden border-4 border-black/80 shadow-xl">
          <Image src="/atik_2.png" alt="Atik Arena oyun ekranı" width={1509} height={3354} className="w-full h-auto block" />
        </div>

        <p className="mt-7 text-xs text-gray-400">{t.foot}</p>
      </div>
    </main>
  );
}
