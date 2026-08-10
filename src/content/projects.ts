// src/content/projects.ts
//
// YAPI (2026-08-10 yeniden düzenlendi):
//   atik → yayındaki ana ürün, sayfanın en üstünde, zengin bölüm
//   rnd  → PilAItes / Fizyoterapi / Kemer Tespiti, aşağıda kompakt Ar-Ge kartları
//
// 🚨 DOĞRULUK KURALI: buraya SADECE uygulamada gerçekten yayında olan özellik
// yazılır. Oyun listesi `app/.../games/registry/modules/*GameModule.kt` içindeki
// `isComingSoon = false` olan modüllerle birebir eşleşir. Yeni oyun açıldığında
// (isComingSoon=false yapıldığında) buraya da eklenir.

export const projectsContent = {
  en: {
    hero: {
      title: "Where Research Meets Reality",
      description:
        "On-device AI that solves real problems, securely and efficiently — from computer-vision research to a product families use every day."
    },

    // --- YAYINDAKİ ANA ÜRÜN ---
    atik: {
      eyebrow: "Flagship Product · Live on Google Play",
      title: "Atik Arena",
      tagline: "No controller. You are the hero.",
      description:
        "A camera-controlled motion game arena for children aged 6–10. The child moves in front of the phone's camera, and on-device AI reads their body movement in real time and places them inside the game. No controller, no touchscreen, no extra hardware.",
      facts: [
        { label: "Age group", value: "6–10" },
        { label: "Platform", value: "Android live · iOS beta" },
        { label: "Vision processing", value: "100% on-device" },
        { label: "Pricing", value: "Free to start" }
      ],
      cards: [
        {
          title: "No controller — just a camera",
          text: "The game is played with the camera. On-device pose detection reads the child's body movement and turns it into gameplay instantly. No controller, no touchscreen, no accessory to buy — a phone or tablet is all it takes.",
          variant: "dark"
        },
        {
          title: "Camera footage never leaves the device",
          text: "All vision processing happens inside the phone. The camera feed is never recorded, never sent to a server, never uploaded anywhere. A privacy-first design built for children's data — safe for parents and schools alike.",
          variant: "light"
        },
        {
          title: "Play and movement in one",
          text: "The child knows they are playing a game and never notices they are exercising. Each game targets a different motor skill: reflexes, balance, coordination, reaction time and stamina.",
          variant: "blue"
        },
        {
          title: "Built to be played together",
          text: "In \"Get in Shape\", two children stand in front of the same camera and clear the wall together in co-op mode. Turns a single phone into a shared activity — for siblings, classrooms and family time.",
          variant: "light"
        }
      ],
      gamesTitle: "Games in the arena",
      gamesNote:
        "Every game is built from levels rated 1 to 3 stars; the stars a child collects unlock the next game, so difficulty grows at their own pace. New games are added with each release.",
      games: [
        {
          name: "Animal Rescue",
          text: "Reach out and pop the balloons to free the animals inside. Reflexes and hand-eye coordination."
        },
        {
          name: "Goalkeeper",
          text: "Save the shots coming at your goal. Curled shots train anticipation and reaction time."
        },
        {
          name: "Runner",
          text: "Run in place, dodge the obstacles, collect the coins. Pace and stamina."
        },
        {
          name: "Get in Shape",
          text: "Fit your body through the hole in the approaching wall. Playable solo or two-player co-op."
        },
        {
          name: "Candy Pop",
          text: "Pop the matching candies with your movements. Speed and focus."
        },
        {
          name: "Sauce Time",
          text: "Catch the falling tomatoes and fill the crate. A 3D scene against the clock."
        }
      ]
    },

    // --- AR-GE ÇALIŞMALARI (ürün değil, araştırma) ---
    rnd: {
      eyebrow: "R&D",
      title: "Our R&D Work",
      description:
        "The on-device vision engine behind Atik Arena grew out of these studies. The projects below are research and prototype work rather than commercial products.",
      items: [
        {
          category: "Mobile AI",
          title: "PilAItes",
          text: "A Pilates coach study that analyses posture through the camera in real time and delivers corrective audio cues — the first testbed for our on-device pose pipeline."
        },
        {
          category: "Health Tech",
          title: "Physiotherapy Clinic",
          text: "Research into clinician-supervised remote exercise: motion tracking with real-time visual feedback, adaptive difficulty and automated session reporting."
        },
        {
          category: "Safety AI",
          title: "Harness Detection",
          text: "A computer-vision study that detects from drone footage whether workers at height are properly attached to their safety lines, and alerts safety teams with visual evidence."
        }
      ]
    }
  },

  tr: {
    hero: {
      title: "Araştırmanın Gerçekle Buluştuğu Yer",
      description:
        "Gerçek sorunları güvenli ve verimli şekilde çözen cihaz-içi (on-device) yapay zekâ — bilgisayarlı görü araştırmalarından ailelerin her gün kullandığı bir ürüne."
    },

    // --- YAYINDAKİ ANA ÜRÜN ---
    atik: {
      eyebrow: "Ana Ürün · Google Play'de yayında",
      title: "Atik Arena",
      tagline: "Kumanda yok. Kahramanı sen oynuyorsun.",
      description:
        "6–10 yaş çocuklar için kamerayla oynanan bir hareket oyunu arenası. Çocuk telefonun kamerası önünde hareket eder; cihaz üzerinde çalışan yapay zekâ vücut hareketini anlık olarak okur ve onu oyunun içine alır. Kumanda, dokunmatik ya da ek donanım gerekmez.",
      facts: [
        { label: "Yaş grubu", value: "6–10" },
        { label: "Platform", value: "Android'de yayında · iOS beta" },
        { label: "Görüntü işleme", value: "%100 cihaz içinde" },
        { label: "Fiyatlandırma", value: "Ücretsiz başlangıç" }
      ],
      cards: [
        {
          title: "Kumanda yok, kamera var",
          text: "Oyun kamerayla oynanır. Cihaz üzerinde çalışan poz tespiti çocuğun vücut hareketini okur ve anında oyuna çevirir. Kumanda, dokunmatik ekran ya da satın alınacak bir aksesuar yok — bir telefon veya tablet yeterli.",
          variant: "dark"
        },
        {
          title: "Kamera görüntüsü cihazdan çıkmaz",
          text: "Tüm görüntü işleme telefonun içinde yapılır. Kamera görüntüsü kaydedilmez, sunucuya gönderilmez, hiçbir yere yüklenmez. Çocuk verisini merkeze alan, veli ve okul için güvenli bir tasarım.",
          variant: "light"
        },
        {
          title: "Oyunla hareketi birleştirir",
          text: "Çocuk oyun oynadığını bilir, egzersiz yaptığını fark etmez. Her oyun farklı bir motor beceriyi hedefler: refleks, denge, koordinasyon, tepki süresi ve dayanıklılık.",
          variant: "blue"
        },
        {
          title: "Birlikte oynanmak için tasarlandı",
          text: "\"Şekle Gir\"de iki çocuk aynı kameranın önüne geçer ve duvarı birlikte geçer (co-op). Tek telefon, paylaşılan bir etkinliğe dönüşür — kardeşler, sınıf ve aile için.",
          variant: "light"
        }
      ],
      gamesTitle: "Arenadaki oyunlar",
      gamesNote:
        "Her oyun 1, 2 ve 3 yıldızla derecelenen seviyelerden oluşur; toplanan yıldızlar sıradaki oyunun kilidini açar, böylece zorluk çocuğun kendi hızında artar. Her sürümle yeni oyunlar eklenir.",
      games: [
        {
          name: "Hayvanları Kurtar",
          text: "Ellerini uzat, balonlara dokun ve içindeki hayvanları kurtar. Refleks ve el-göz koordinasyonu."
        },
        {
          name: "Kaleci",
          text: "Kaleye gelen şutları kurtar. Falsolu toplar tahmin ve tepki süresini çalıştırır."
        },
        {
          name: "Koşucu",
          text: "Yerinde koş, engellerden kaç, altınları topla. Tempo ve dayanıklılık."
        },
        {
          name: "Şekle Gir",
          text: "Yaklaşan duvardaki deliğe vücudunla gir. Tek başına ya da iki kişilik co-op olarak oynanır."
        },
        {
          name: "Şeker Patlat",
          text: "Eşleşen şekerleri hareketlerinle patlat. Hız ve dikkat."
        },
        {
          name: "Salça Zamanı",
          text: "Düşen domatesleri yakala ve kasayı doldur. Zamana karşı 3B sahne."
        }
      ]
    },

    // --- AR-GE ÇALIŞMALARI (ürün değil, araştırma) ---
    rnd: {
      eyebrow: "Ar-Ge",
      title: "Ar-Ge Çalışmalarımız",
      description:
        "Atik Arena'nın arkasındaki cihaz-içi görü motoru bu çalışmaların üzerine kuruldu. Aşağıdaki projeler ticari ürün değil, araştırma ve prototip çalışmalarımızdır.",
      items: [
        {
          category: "Mobil Yapay Zekâ",
          title: "PilAItes",
          text: "Kameradan duruşu gerçek zamanlı analiz edip sesli düzeltme veren pilates koçu çalışması — cihaz-içi poz hattımızın ilk test alanı."
        },
        {
          category: "Sağlık Teknolojisi",
          title: "Fizyoterapi Kliniği",
          text: "Klinisyen gözetiminde uzaktan egzersiz araştırması: gerçek zamanlı görsel geri bildirimle hareket takibi, uyarlanabilir zorluk ve otomatik seans raporlaması."
        },
        {
          category: "İş Güvenliği Yapay Zekâsı",
          title: "Emniyet Kemeri Tespiti",
          text: "Yüksekte çalışan işçilerin emniyet halatlarına bağlı olup olmadığını drone görüntüsünden tespit eden ve güvenlik ekibini görsel kanıtla uyaran bilgisayarlı görü çalışması."
        }
      ]
    }
  }
};
