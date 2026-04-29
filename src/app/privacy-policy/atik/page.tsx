// src/app/privacy-policy/atik/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { atikPrivacyContent } from "@/content/privacy"; 
import ReactMarkdown from 'react-markdown';

export default function AtikPrivacyPolicy() {
  const { lang } = useLanguage();
  // 'atikPrivacyContent' içeriğini çekiyoruz
  const t = atikPrivacyContent[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF5A5F] selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow relative z-10 max-w-[1000px] w-full mx-auto px-6 pt-12 md:pt-20 pb-20">
        
        {/* Başlık ve Son Güncelleme */}
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">
                {t.title}
            </h1>
            <p className="text-gray-500 font-medium text-lg">
                {t.lastUpdated}
            </p>
        </div>

        {/* Giriş Metni */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-800 mb-12 font-medium">
            {t.intro}
        </div>

        {/* Bölümler (Sections) */}
        <div className="space-y-10">
            {t.sections.map((section, index) => (
                <section key={index} className="bg-gray-50 p-6 md:p-10 rounded-[20px] border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-black">
                        {section.heading}
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                        <ReactMarkdown
                            components={{
                                strong: ({node, ...props}) => <span className="font-bold text-black" {...props} />,
                                p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />,
                                li: ({node, ...props}) => <li className="" {...props} />,
                                a: ({node, ...props}) => <a className="text-[#FF5A5F] hover:underline" {...props} />
                            }}
                        >
                            {section.content}
                        </ReactMarkdown>
                    </div>
                </section>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}