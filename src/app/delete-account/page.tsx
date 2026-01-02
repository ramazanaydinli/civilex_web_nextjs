"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { deleteAccountContent } from "@/content/deleteAccount";

export default function DeleteAccountPage() {
    const { lang } = useLanguage();
    const t = deleteAccountContent[lang];

    return (
        <div className="min-h-screen bg-white text-black selection:bg-[#B9FF66] selection:text-black overflow-x-hidden flex flex-col">

            {/* Navbar */}
            <Navbar />

            <main className="flex-grow w-full relative z-10 max-w-[800px] mx-auto px-6 pt-12 md:pt-20 pb-20">

                {/* Başlık Bölümü */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-black">
                        {t.title}
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {t.description}
                    </p>
                </div>

                {/* Uyarı Kutusu */}
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 text-center">
                    <p className="text-red-600 font-bold">
                        {t.warning}
                    </p>
                </div>

                {/* GOOGLE FORM EMBED ALANI */}
                <div className="w-full bg-white rounded-[20px] border border-gray-200 shadow-lg overflow-hidden relative min-h-[900px]">
                    
                    {/* Yükleniyor Yazısı (En altta kalacak) */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                        {t.loading}
                    </div>

                    {/* Iframe (Üstte duracak) */}
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScyo2W2xeyhR3WEHyk_wNGiW2eJjDQ2UI9HAatrWdfQcvMKvw/viewform?embedded=true" 
                        className="relative z-10 w-full h-full min-h-[900px]" // w-full ve h-full önemli
                        frameBorder="0" 
                        marginHeight={0} 
                        marginWidth={0}
                        style={{ backgroundColor: 'white' }} // Yüklenince alttaki yazıyı kapatması için beyaz arka plan
                    >
                        Yükleniyor...
                    </iframe>
                </div>

            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}