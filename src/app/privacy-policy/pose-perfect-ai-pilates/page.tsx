// src/app/privacy-policy/pose-perfect-ai-pilates/page.tsx
"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { pilatesPrivacyContent } from "@/content/privacy"; 
import ReactMarkdown from 'react-markdown';

export default function PilatesPrivacyPolicy() {
  const { lang } = useLanguage();
  // Burada Pilates içeriğini çekiyoruz
  const t = pilatesPrivacyContent[lang];

  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#B9FF66] selection:text-black overflow-x-hidden flex flex-col">
      <Navbar />

      <main className="flex-grow relative z-10 max-w-[1000px] w-full mx-auto px-6 pt-12 md:pt-20 pb-20">
        
        <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-black">
                {t.title}
            </h1>
            <p className="text-gray-500 font-medium text-lg">
                {t.lastUpdated}
            </p>
        </div>

        <div className="text-lg md:text-xl leading-relaxed text-gray-800 mb-12 font-medium">
            {t.intro}
        </div>

        <div className="space-y-10">
            {t.sections.map((section, index) => (
                <section key={index} className="bg-gray-50 p-6 md:p-10 rounded-[20px] border border-gray-100 shadow-sm">
                    <h2 className="text-2xl font-bold mb-6 text-black">
                        {section.heading}
                    </h2>
                    {/* whitespace-pre-wrap eklendi ki Markdown içindeki satır atlamaları (\n) düzgün çalışsın */}
                    <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                        <ReactMarkdown
                            components={{
                                strong: ({node, ...props}) => <span className="font-bold text-black" {...props} />,
                                p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                                ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-2" {...props} />,
                                li: ({node, ...props}) => <li className="" {...props} />,
                                a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />
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