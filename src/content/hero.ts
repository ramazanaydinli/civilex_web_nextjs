// src/content/hero.ts
//
// KANONİK KONUMLANDIRMA (pazarlama materyalleriyle birebir aynı kalmalı —
// broşür, roll-up, pitch deck ve /indir sayfası aynı dili kullanır):
//   Ana tagline : "Kumanda yok. Kahramanı sen oynuyorsun."
//   Alt mesaj   : kameranın önünde hareket et → cihaz-içi yapay zekâ seni oyunun içine alır
//   Satış kolonları: kumanda yok · gizlilik cihazda · 6–10 yaş · eğlence+egzersiz · freemium
// Bu metni değiştirirken atik-fuar materyallerini de güncelle.

export const heroContent = {
  en: {
    badge: "Featured Product",
    title: "No controller",
    subtitle: "You are the hero",
    cta: "Participate in the Test Phase",
    download: "Get it on Google Play",
    platformNote: "Now on Android",
    iosBeta: "iPhone (Beta) — Join on TestFlight",
    paused: "Paused",
    time: "Time",
    projects: [
      {
        id: 1,
        name: "Atik Arena",
        mainDescription:
          "Atik Arena is a camera-controlled motion game arena for children aged 6–10. The child moves in front of the phone's camera, and on-device AI reads their body movement in real time and places them inside the game. No controller, no touchscreen, no extra hardware. All vision processing runs on the device — camera footage never leaves the phone.",
        tagline: "Ages 6–10 · Motion-controlled game arena",
        description: "Move in front of the camera and become the hero of the game."
      }
    ]
  },
  tr: {
    badge: "Öne Çıkan Ürün",
    title: "Kumanda yok",
    subtitle: "Kahramanı sen oynuyorsun",
    cta: "Test Aşamasına Katıl",
    download: "Google Play'den İndir",
    platformNote: "Android'de yayında",
    iosBeta: "iPhone (Beta) — TestFlight'ta katıl",
    paused: "Durduruldu",
    time: "Süre",
    projects: [
      {
        id: 1,
        name: "Atik Arena",
        mainDescription:
          "Atik Arena, 6–10 yaş çocuklar için kamerayla oynanan bir hareket oyunu arenasıdır. Çocuk telefonun kamerası önünde hareket eder; cihaz üzerinde çalışan yapay zekâ vücut hareketlerini anlık olarak okur ve onu oyunun içine alır. Kumanda, dokunmatik ya da ek donanım gerekmez. Tüm görüntü işleme cihazda yapılır — kamera görüntüsü telefondan hiç çıkmaz.",
        tagline: "6–10 yaş · Hareketle oynanan oyun arenası",
        description: "Kameranın önünde hareket et, oyunun kahramanı ol."
      }
    ]
  }
};
