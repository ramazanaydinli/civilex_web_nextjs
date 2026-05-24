// src/app/atik/delete-data/page.tsx
//
// Atik - Veri Silme (hesap korunur). Play Console commitment 2026-05-24:
// kullanıcı hesabını silmeden sadece skor + okul bilgisini sıfırlayabilmeli.
// Tam silme için /atik/delete-account ayrı sayfa (Tally form rjk67N).
//
// Bu sayfa Tally form eqYKLJ embed eder. Form submit edilince:
//   1. Tally → ramazan'ın gmail'ine notification (admin)
//   2. Admin manuel: Firebase Console → users/{uid} schoolName/grade/section
//      delete + totalScore=0 + level=1, leaderboard/{uid} + scoreSubmits/{uid}
//      + nicknameChanges/{uid}/events/* + nicknameRequests (uid eşli) delete.
//      Auth account + Premium subscription + parentalConsent KORUNUR.
//   3. Admin manuel: kullanıcıya "tamamlandı" e-postası
//
// UX farkı vs delete-account:
//   - delete-account: red warning (full destructive)
//   - delete-data:    amber warning (reversible-feel — hesap kalır)

"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { deleteAccountContent } from "@/content/deleteAccount";

export default function AtikDeleteDataPage() {
    const { lang } = useLanguage();
    const t = deleteAccountContent.atikData[lang];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-[#FF5A5F] selection:text-white overflow-x-hidden flex flex-col">
            <Navbar />
            <main className="flex-grow w-full relative z-10 max-w-[800px] mx-auto px-6 pt-12 md:pt-20 pb-20">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-black">{t.title}</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">{t.description}</p>
                </div>

                {/* Amber Uyarı Kutusu — data deletion daha az destructive (hesap kalır), */}
                {/* delete-account'taki red kutudan farklı sinyal: "dikkat ama yıkıcı değil". */}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10 text-center">
                    <p className="text-amber-700 font-bold">{t.warning}</p>
                </div>

                <div className="w-full bg-white rounded-[20px] border border-gray-200 shadow-lg overflow-hidden relative min-h-[900px]">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">{t.loading}</div>

                    {/* VERİ SİLME FORMU — Tally form ID eqYKLJ */}
                    <iframe
                        src="https://tally.so/embed/eqYKLJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                        className="relative z-10 w-full h-full min-h-[900px]"
                        frameBorder="0" marginHeight={0} marginWidth={0} style={{ backgroundColor: 'transparent' }}
                        loading="lazy"
                        title="Atik Arena - Veri Silme Formu"
                    >
                        Yükleniyor...
                    </iframe>
                </div>
            </main>
            <Footer />
        </div>
    );
}
