// src/components/PhoneScreenContent.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// --- ATİK ARENA EKRAN GÖRÜNTÜLERİ ---
// Telefon mockup'ında dönen slaytlar. Kare eklemek/değiştirmek için
// sadece bu listeyi güncelle (dosyalar public/ altında olmalı, telefon oranı ~9:19).
// ⚠️ atik_2.png (oyun menüsü) 2026-08-10'da listeden ÇIKARILDI: karede sağ üstte
// hata ayıklama (bug) düğmesi görünüyor, ayrıca oyun adları eski ("Balon Patlatma",
// "Kaleci Antrenmanı") ve ORTAOKUL sekmesi 6–10 yaş konumlandırmasıyla çelişiyor.
// Taze kare gelince yenisi konup listeye geri eklenecek.
const atikSlides = [
  { src: "/atik_3.png", alt: "Atik Arena – Vücudun kumandan: canlı iskelet takibi" },
  { src: "/atik_1.png", alt: "Atik Arena – Açılış ekranı" },
];

const PhoneScreenContent = () => {
  const [internalIndex, setInternalIndex] = useState(0);

  useEffect(() => {
    // 1.8 saniyede bir slayt değiştir
    const timer = setInterval(() => {
      setInternalIndex((prev) => (prev + 1) % atikSlides.length);
    }, 1800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-[35px] bg-gray-50">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${internalIndex * 100}%)` }}
      >
        {atikSlides.map((slide) => (
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
