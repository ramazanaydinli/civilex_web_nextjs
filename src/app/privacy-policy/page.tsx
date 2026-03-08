// src/app/privacy-policy/page.tsx
"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { privacyHubContent } from "@/content/privacy"; 

export default function PrivacyPolicyHub() {
  const { lang } = useLanguage();
  const t = privacyHubContent[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#B9FF66] selection:text-black overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow relative z-10 max-w-[1000px] w-full mx-auto px-6 pt-12 md:pt-20 pb-20">
        
        {/* Başlık Bölümü */}
        <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-[#191A23]">
                {t.title}
            </h1>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                {t.description}
            </p>
        </div>

        {/* Uygulama Kartları Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.apps.map((app) => (
                <Link 
                    href={app.href} 
                    key={app.id}
                    className="group block relative bg-white border border-gray-200 rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
                >
                    {/* Arka plan vurgu rengi (Hover olunca hafifçe belirir) */}
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity ${app.color}`}></div>
                    
                    {/* Kart İçeriği */}
                    <div className="relative z-10">
                        <div className={`w-12 h-2 rounded-full mb-6 ${app.color}`}></div>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#191A23] mb-4 group-hover:text-blue-600 transition-colors">
                            {app.name}
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {app.desc}
                        </p>
                        
                        {/* Ok İkonu */}
                        <div className="flex items-center text-[#191A23] font-medium group-hover:text-blue-600 transition-colors">
                            <span className="mr-2">{lang === 'tr' ? 'Metinleri Oku' : 'Read Agreements'}</span>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                                className="transform group-hover:translate-x-2 transition-transform"
                            >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </div>
                </Link>
            ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}