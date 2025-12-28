"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { navbarContent } from "@/content/navbar";

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const content = navbarContent[lang];
  const pathname = usePathname();

  // Aktif link kontrolü
  const isActive = (path: string) => pathname === path;

  // Stiller
  const activeStyle = "bg-[#61DEF4]/20 text-black border border-[#61DEF4] px-5 py-2 rounded-lg font-medium text-lg transition-all duration-300";
  const inactiveStyle = "text-lg font-medium text-gray-600 hover:text-black transition-colors px-5 py-2 border border-transparent";

  return (
    <>
      {/* --- MASAÜSTÜ & MOBİL ÜST BAR --- */}
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-all">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-6 py-4 md:py-5 md:px-[100px]">
          
          {/* LOGO */}
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <div className="relative w-[140px] md:w-[220px] h-[40px] md:h-[50px] flex items-center">
              <Image 
                src="/civilexlogo.png" 
                alt="Civilex.AI Logo" 
                fill 
                className="object-contain object-left" 
                priority 
              />
            </div>
          </Link>

          {/* --- MASAÜSTÜ MENÜ --- */}
          <div className="hidden md:flex items-center gap-4">
            
            <Link href="/" className={isActive("/") ? activeStyle : inactiveStyle}>
              {content.home}
            </Link>

            <Link href="/about-us" className={isActive("/about-us") ? activeStyle : inactiveStyle}>
              {content.about}
            </Link>
            
            <Link href="/projects" className={isActive("/projects") ? activeStyle : inactiveStyle}>
              {content.projects}
            </Link>

            {/* DÜZELTME 1: href="/contact" yapıldı ve activeStyle eklendi */}
            <Link href="/contact" className={isActive("/contact") ? activeStyle : inactiveStyle}>
              {content.contact}
            </Link>

            {/* Dil Seçimi */}
            <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg border border-gray-200 ml-4">
              <button 
                onClick={() => setLang('tr')} 
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 ${lang === 'tr' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
              >
                TR
              </button>
              <button 
                onClick={() => setLang('en')} 
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all duration-300 ${lang === 'en' ? 'bg-white shadow text-black' : 'text-gray-400 hover:text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBİL MENÜ (DOCK) --- */}
      <div className="fixed bottom-6 inset-x-4 z-50 md:hidden animate-fade-in-up">
        <div className="bg-[#121212]/95 backdrop-blur-2xl border border-white/10 text-white rounded-[2rem] shadow-2xl py-3 px-3 flex items-center justify-between gap-1">
            
            {/* HOME */}
            <Link href="/" className={`flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px] ${isActive("/") ? "text-[#61DEF4]" : "text-white"}`}>
                <div className={`p-1.5 rounded-full transition-colors ${isActive("/") ? "bg-[#61DEF4]/20" : "group-hover:bg-white/10"}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/> 
                      <polyline points="9 22 9 12 15 12 15 22"/>
                   </svg>
                </div>
                <span className={`text-[9px] font-medium transition-opacity whitespace-nowrap ${isActive("/") ? "opacity-100" : "opacity-60"}`}>{content.home}</span>
            </Link>

            {/* PROJECTS */}
            <Link href="/projects" className={`flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px] ${isActive("/projects") ? "text-[#61DEF4]" : "text-white"}`}>
                <div className={`p-1.5 rounded-full transition-colors ${isActive("/projects") ? "bg-[#61DEF4]/20" : "group-hover:bg-white/10"}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/>
                   </svg>
                </div>
                <span className={`text-[9px] font-medium transition-opacity whitespace-nowrap ${isActive("/projects") ? "opacity-100" : "opacity-60"}`}>{content.projects}</span>
            </Link>
            
            {/* ABOUT */}
            <Link href="/about-us" className={`flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px] ${isActive("/about-us") ? "text-[#61DEF4]" : "text-white"}`}>
                <div className={`p-1.5 rounded-full transition-colors ${isActive("/about-us") ? "bg-[#61DEF4]/20" : "group-hover:bg-white/10"}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="5"/>
                      <path d="M20 21a8 8 0 0 0-16 0"/>
                   </svg>
                </div>
                <span className={`text-[9px] font-medium transition-opacity whitespace-nowrap ${isActive("/about-us") ? "opacity-100" : "opacity-60"}`}>{content.about}</span>
            </Link>

            {/* DÜZELTME 2: CONTACT LINK'İNE ACTIVE STATE EKLENDİ */}
            <Link href="/contact" className={`flex flex-col items-center justify-center flex-1 gap-1 group min-w-[50px] ${isActive("/contact") ? "text-[#61DEF4]" : "text-white"}`}>
                <div className={`p-1.5 rounded-full transition-colors ${isActive("/contact") ? "bg-[#61DEF4]/20" : "group-hover:bg-white/10"}`}>
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                   </svg>
                </div>
                <span className={`text-[9px] font-medium transition-opacity whitespace-nowrap tracking-tight ${isActive("/contact") ? "opacity-100" : "opacity-60"}`}>{content.contact}</span>
            </Link>

            {/* DIVIDER */}
            <div className="w-[1px] h-8 bg-white/15 mx-0.5"></div>

            {/* LANGUAGE */}
            <button 
                onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
                className="flex items-center justify-center px-2 h-full rounded-xl bg-white/10 border border-white/5 active:scale-95 transition-all min-w-[65px]"
            >
                <span className="text-[10px] font-bold text-white tracking-wide whitespace-nowrap">
                    {lang === 'en' ? 'TR' : 'EN'}
                </span>
            </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;