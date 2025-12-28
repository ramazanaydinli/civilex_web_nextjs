"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { contactContent } from "@/content/contact";

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = contactContent[lang];

  // Form State (Radyo butonu seçimi için)
  const [selectedOption, setSelectedOption] = useState("say-hi");

  return (
    <div className="min-h-screen bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden pb-[100px] md:pb-0 relative">
      
      {/* --- BACKGROUND PATTERN (Global) --- */}
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
      
      {/* Renkli Glow Efektleri */}
      <div className="fixed top-0 left-0 z-0 w-[600px] h-[600px] bg-[#61DEF4] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 right-0 z-0 w-[500px] h-[500px] bg-[#3F73D8] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="w-full relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="pt-20 pb-10 px-6">
          <div className="max-w-[1400px] mx-auto bg-[#F3F3F3]/80 backdrop-blur-sm rounded-[45px] p-8 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-white/50 shadow-sm">
            
            {/* Illustration (Left) */}
            <div className="flex justify-center order-1 md:order-1">
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] animate-fade-in-up">
                <Image 
                  src="/images/Illustration11.png" 
                  alt="Contact Illustration" 
                  fill
                  className="object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Text (Right) */}
            <div className="flex flex-col justify-center order-2 md:order-2 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 text-[#191A23]">
                 {/* "We'd Love to..." başlığını satırlara bölüyoruz */}
                 {t.hero.title.split(' ').slice(0, 3).join(' ')} <br />
                 <span className="text-[#3F73D8]">{t.hero.title.split(' ').slice(3).join(' ')}</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0 font-light">
                {t.hero.description}
              </p>
            </div>

          </div>
        </section>


        {/* --- FORM SECTION --- */}
        <section className="py-20 px-6" id="send-message">
          <div className="max-w-[1400px] mx-auto">
             
             {/* Section Header */}
             <div className="flex flex-col md:flex-row items-end gap-6 mb-12">
                <div className="bg-[#191A23] text-white px-6 py-3 rounded-[1rem] shadow-lg">
                    <h2 className="text-2xl md:text-3xl font-medium">{t.formSection.title}</h2>
                </div>
                <p className="text-xl text-gray-500 font-medium pb-2">
                    {t.formSection.subtitle}
                </p>
             </div>

             {/* Dark Form Container */}
             <div className="bg-[#191A23] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* DEKORATİF ARKA PLAN ÇİZGİLERİ (Sağda) */}
                <div className="absolute top-[-50px] right-[-50px] w-[400px] h-[400px] opacity-20 pointer-events-none hidden lg:block animate-spin-slow">
                   <Image src="/images/Illustration12.png" alt="Lines" fill className="object-contain" />
                </div>

                {/* SOL: FORM İÇERİĞİ */}
                <div className="relative z-10">
                   <form className="flex flex-col gap-8" autoComplete="off">
                      
                      {/* Radio Buttons */}
                      <div className="flex flex-col md:flex-row gap-4 mb-4">
                         {t.formSection.options.map((option) => (
                            <label 
                               key={option.id} 
                               className="flex items-center gap-3 cursor-pointer group"
                               onClick={() => setSelectedOption(option.id)}
                            >
                               <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedOption === option.id ? "border-[#61DEF4] bg-[#61DEF4]" : "border-gray-500 bg-transparent group-hover:border-gray-300"}`}>
                                  {selectedOption === option.id && (
                                     <div className="w-2 h-2 bg-[#191A23] rounded-full"></div>
                                  )}
                               </div>
                               <span className={`text-lg transition-colors ${selectedOption === option.id ? "text-white font-medium" : "text-gray-400 group-hover:text-gray-200"}`}>
                                  {option.label}
                               </span>
                               <input type="radio" name="contact-type" value={option.id} className="hidden" />
                            </label>
                         ))}
                      </div>

                      {/* Inputs */}
                      <div className="space-y-6">
                         {/* Name */}
                         <div className="flex flex-col gap-2">
                            <label className="text-white text-sm ml-2">{t.formSection.inputs.name}</label>
                            <input 
                              type="text" 
                              placeholder={t.formSection.inputs.namePlaceholder} 
                              className="w-full bg-[#F3F3F3] text-[#191A23] rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[#61DEF4]/50 transition-all placeholder:text-gray-500"
                            />
                         </div>

                         {/* Email */}
                         <div className="flex flex-col gap-2">
                            <label className="text-white text-sm ml-2">{t.formSection.inputs.email}</label>
                            <input 
                              type="email" 
                              placeholder={t.formSection.inputs.emailPlaceholder} 
                              className="w-full bg-[#F3F3F3] text-[#191A23] rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[#61DEF4]/50 transition-all placeholder:text-gray-500"
                            />
                         </div>

                         {/* Message */}
                         <div className="flex flex-col gap-2">
                            <label className="text-white text-sm ml-2">{t.formSection.inputs.message}</label>
                            <textarea 
                              rows={5}
                              placeholder={t.formSection.inputs.messagePlaceholder} 
                              className="w-full bg-[#F3F3F3] text-[#191A23] rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[#61DEF4]/50 transition-all placeholder:text-gray-500 resize-none"
                            ></textarea>
                         </div>
                      </div>

                      {/* Submit Button */}
                      <button 
                        type="button" // Backend olmadığı için 'button' yaptım, normalde 'submit' olur
                        className="w-full bg-[#3F73D8] hover:bg-[#61DEF4] hover:text-[#191A23] text-white font-medium text-xl py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-[#61DEF4]/40"
                      >
                         {t.formSection.inputs.submit}
                      </button>

                   </form>
                </div>

                {/* SAĞ: İLLÜSTRASYON VEYA BOŞLUK (Masaüstü için) */}
                <div className="hidden lg:flex items-center justify-center relative">
                    <div className="relative w-[400px] h-[400px]">
                        {/* CSS'deki 'Radiating Lines' resmi buraya geliyor */}
                        <Image 
                           src="/images/Illustration12.png" 
                           alt="Decoration" 
                           fill 
                           className="object-contain animate-float"
                        />
                    </div>
                </div>

             </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}