// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { navbarContent } from "@/content/navbar";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const content = navbarContent[lang];

  return (
    <>
      {/* --- MASAÜSTÜ & MOBİL ÜST BAR (TOP BAR) --- */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:py-5 md:px-[100px]">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer">
            <div className="relative w-[140px] md:w-[220px] h-[40px] md:h-[50px] flex items-center">
              <Image 
                src="/civilexlogo.png" 
                alt="Civilex.AI Logo" 
                fill 
                className="object-contain object-left" 
                priority 
              />
            </div>
          </div>

          {/* --- MASAÜSTÜ MENÜ (DESKTOP) --- */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="bg-[#61DEF4]/20 text-black border border-[#61DEF4] px-5 py-2 rounded-lg font-medium text-lg hover:bg-[#61DEF4] transition-all duration-300">
              {content.home}
            </Link>
            <Link href="#" className="text-lg font-medium text-gray-600 hover:text-black transition-colors">
              {content.about}
            </Link>
            <Link href="#" className="text-lg font-medium text-gray-600 hover:text-black transition-colors">
              {content.projects}
            </Link>
            <Link href="#" className="text-lg font-medium text-gray-600 hover:text-black transition-colors">
              {content.contact}
            </Link>

            {/* Masaüstü Dil Seçimi */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200 ml-4">
              <button 
                onClick={() => setLang('tr')} 
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 ${lang === 'tr' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Türkçe
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 ${lang === 'en' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
              >
                English
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* --- MOBİL İÇİN YÜZEN ALT MENÜ (MODERN DOCK) --- */}
      <div className="fixed bottom-6 inset-x-4 z-50 md:hidden animate-fade-in-up">
        {/* Container: Padding azaltıldı (px-4) ve gap optimize edildi */}
        <div className="bg-[#121212]/95 backdrop-blur-2xl border border-white/10 text-white rounded-[2rem] shadow-2xl py-3 px-3 flex items-center justify-between gap-1">
            
            {/* LINK 1: HOME */}
            <Link href="/" className="flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px]">
                <div className="p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> 
                      <polyline points="9 22 9 12 15 12 15 22"/>
                   </svg>
                </div>
                {/* whitespace-nowrap eklendi */}
                <span className="text-[9px] font-medium opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">{content.home}</span>
            </Link>

            {/* LINK 2: PROJECTS */}
            <Link href="#" className="flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px]">
                <div className="p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                   </svg>
                </div>
                <span className="text-[9px] font-medium opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">{content.projects}</span>
            </Link>
            
            {/* LINK 3: ABOUT */}
            <Link href="#" className="flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px]">
                <div className="p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5"/>
                      <path d="M20 21a8 8 0 0 0-16 0"/>
                   </svg>
                </div>
                <span className="text-[9px] font-medium opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">{content.about}</span>
            </Link>

            {/* LINK 4: CONTACT */}
            <Link href="#" className="flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px]">
                <div className="p-1.5 rounded-full group-hover:bg-white/10 transition-colors">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                   </svg>
                </div>
                {/* whitespace-nowrap ve tracking-tight ile tek satıra zorladık */}
                <span className="text-[9px] font-medium opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap tracking-tight">{content.contact}</span>
            </Link>

            {/* DIVIDER */}
            <div className="w-[1px] h-8 bg-white/15 mx-0.5"></div>

            {/* LANGUAGE SWITCHER (Mobile) */}
            <button 
                onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                className="flex items-center justify-center px-2 h-full rounded-xl bg-white/10 border border-white/5 active:scale-95 transition-all min-w-[65px]"
            >
                <span className="text-[10px] font-bold text-white tracking-wide whitespace-nowrap">
                    {lang === 'en' ? 'Türkçe' : 'English'}
                </span>
            </button>

        </div>
      </div>
    </>
  );
};

export default Navbar;