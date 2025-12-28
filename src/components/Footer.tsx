// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { useLanguage } from "@/context/LanguageContext";
import { footerContent } from "@/content/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Footer = () => {
  const { lang } = useLanguage();
  const t = footerContent[lang];

  return (
    <footer className={`w-full flex justify-center mt-20 px-4 md:px-0 pb-10 ${spaceGrotesk.className}`}>
      
      {/* ANA KAPSAYICI - BUG FIX UYGULANDI */}
      <div 
        className="relative w-full max-w-[1241px] bg-[#F3F3F3] rounded-t-[45px] rounded-b-[45px] md:rounded-b-[0px] pt-14 pb-8 px-8 md:px-[60px] overflow-hidden transform-gpu"
        style={{ WebkitBackfaceVisibility: "hidden", MozBackfaceVisibility: "hidden", WebkitTransform: "translate3d(0, 0, 0)" }}
      >

        <div className="flex flex-col md:flex-row items-start justify-between relative z-10">

          {/* --- SOL TARAFTA: LOGO --- */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="relative w-[120px] h-[120px] md:w-[157px] md:h-[157px]">
              <Image
                src="/civilexlogo.png"
                alt="Civilex Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* --- ORTA KISIM: MENÜLER & İLETİŞİM --- */}
          <div className="flex-1 flex flex-col items-center w-full">

            {/* 1. NAVİGASYON LİNKLERİ */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
              {t.menuLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black text-lg underline hover:text-gray-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* 2. SOSYAL MEDYA İKONLARI */}
            <div className="flex gap-4 mb-8">
              <SocialIcon href="https://www.linkedin.com/company/civilexai">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </SocialIcon>

              <SocialIcon href="https://x.com/civilex_ai">
                 <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                 <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </SocialIcon>

              <SocialIcon href="https://www.facebook.com/civilexai/">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </SocialIcon>

              <SocialIcon href="https://www.youtube.com/@civilexai">
                 <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                 <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#61DEF4" stroke="none"/>
              </SocialIcon>

              <SocialIcon href="https://www.instagram.com/civilex.ai/">
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                 <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </SocialIcon>

              <SocialIcon href="https://www.tiktok.com/@civilexai">
                 <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </SocialIcon>
            </div>

            {/* 3. CONTACT KISMI */}
            <div className="w-full max-w-[600px] flex flex-col items-start pl-0 md:pl-10">
              <div className="mb-4">
                <span className="bg-[#61DEF4] text-black px-3 py-1 rounded-[7px] font-medium text-lg">
                  {t.contactBadge}
                </span>
              </div>

              <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center text-lg text-black gap-4 md:gap-0">
                <a href="mailto:info@civilex.ai" className="hover:underline font-medium">
                  {t.emailLabel} info@civilex.ai
                </a>
                <a href="tel:+905324130694" className="hover:underline font-medium">
                  {t.phoneLabel} +90 532 413 06 94
                </a>
              </div>
            </div>

          </div>

          {/* --- SAĞ TARAFTA: İLLÜSTRASYON --- */}
          {/* Eğer çizgi hala gitmezse, 'top-[-30px]' değerini 'top-0' yapıp resmi aşağı çekmeyi dene.
              Bazen resim dışarı taştığında kesim izi kalır. */}
          <div className="hidden md:block w-1/4 relative h-[250px] mt-10">
             <div className="absolute right-[-20px] top-[-30px] w-[300px] h-[250px]">
                <Image
                   src="/contact_us.png"
                   alt="Contact Illustration"
                   fill
                   className="object-contain"
                />
             </div>
          </div>

        </div>

        {/* --- ALT ÇİZGİ VE COPYRIGHT --- */}
        {/* 'border-black' çok sert duruyorsa 'border-gray-300' ile değiştirebiliriz */}
        <div className="mt-8 border-t border-black pt-4 flex flex-col md:flex-row justify-center gap-4 md:gap-10 text-lg relative z-10 text-center">
          <span>{t.rights}</span>
          <Link href={t.privacyLink || "/privacy-policy"} className="underline hover:text-gray-600">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ children, href }: { children: React.ReactNode, href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-[35px] h-[35px] bg-black rounded-full flex items-center justify-center hover:scale-110 transition-transform group"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#61DEF4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="transition-colors"
    >
      {children}
    </svg>
  </a>
);

export default Footer;