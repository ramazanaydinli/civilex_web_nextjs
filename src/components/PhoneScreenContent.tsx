// src/components/PhoneScreenContent.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

// --- ATİK ARENA EKRAN GÖRÜNTÜLERİ ---
// 2026-08-10: kareler emülatörde uygulamanın GÜNCEL sürümünden yeniden çekildi
// (Pixel_5, API 37, uygulama dili `cmd locale set-app-locales` ile ayarlandı).
//
// 🚨 Eski `atik_1/2/3.png` KULLANMA:
//   atik_1 → splash'te marka "Atik" yazıyordu, artık "Atik Arena".
//   atik_2 → karede hata ayıklama düğmesi vardı, oyun adları eskiydi.
//   atik_3 → o ekran ("Vücudun kumandan" tanıtım turu) uygulamadan KALDIRILDI;
//            yerine 3 adımlı satır içi eğitim geldi. Var olmayan ekranı gösterme.
//
// Diller ayrı: uygulamanın İngilizce çevirisi menü ekranlarında eksik olduğu için
// (bkz. values-en 508/813 anahtar) İngilizce tarafta yalnızca tam çevrilmiş
// ekranlar kullanılıyor. Menü karesi çeviri tamamlanınca EN'e de eklenebilir.
const slidesByLang = {
  tr: [
    { src: "/shot_tr_menu.png", alt: "Atik Arena – oyun menüsü" },
    { src: "/shot_tr_splash.png", alt: "Atik Arena – açılış ekranı" },
  ],
  en: [
    { src: "/shot_en_welcome.png", alt: "Atik Arena – play with your body, never touch your phone" },
    { src: "/shot_en_splash.png", alt: "Atik Arena – splash screen" },
  ],
};

const PhoneScreenContent = () => {
  const { lang } = useLanguage();
  const slides = slidesByLang[lang];
  const [internalIndex, setInternalIndex] = useState(0);

  // Dil değişince ilk slayta dön — aksi halde kısa listede indeks taşabilir.
  useEffect(() => {
    setInternalIndex(0);
  }, [lang]);

  useEffect(() => {
    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % slides.length);
    }, 2600);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[35px] bg-gray-50">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${internalIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneScreenContent;
