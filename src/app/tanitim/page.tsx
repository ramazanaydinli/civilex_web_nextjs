"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

// Tanıtım materyalleri sayfası — fuar/başvuru süreçlerinde tek kalıcı adres olarak
// paylaşılır. PDF'ler `public/tanitim/` altında durur ve `atik-fuar/_src/build.py`
// ile üretilir; metin değişince oradan yeniden basıp buraya kopyala.
const DOCS = [
  {
    file: "/tanitim/Atik-Arena-Brosur-TR.pdf",
    lang: "TR",
    size: "554 KB",
    tr: { title: "Tanıtım Broşürü", desc: "A4, iki yüz — ürün, oyunlar, gizlilik ve indirme bilgisi." },
    en: { title: "Brochure (Turkish)", desc: "A4, double-sided — product, games, privacy and download info." },
  },
  {
    file: "/tanitim/Atik-Arena-Brochure-EN.pdf",
    lang: "EN",
    size: "485 KB",
    tr: { title: "Tanıtım Broşürü (İngilizce)", desc: "A4, iki yüz — İngilizce sürüm." },
    en: { title: "Brochure", desc: "A4, double-sided — product, games, privacy and download info." },
  },
  {
    file: "/tanitim/Atik-Arena-Sunum-TR.pdf",
    lang: "TR",
    size: "288 KB",
    tr: { title: "Tanıtım Sunumu", desc: "11 slayt — problem, çözüm, oyunlar, durum ve ölçeklenme." },
    en: { title: "Presentation (Turkish)", desc: "11 slides — problem, solution, games, status and scaling." },
  },
  {
    file: "/tanitim/Atik-Arena-Presentation-EN.pdf",
    lang: "EN",
    size: "287 KB",
    tr: { title: "Tanıtım Sunumu (İngilizce)", desc: "11 slayt — İngilizce sürüm." },
    en: { title: "Presentation", desc: "11 slides — problem, solution, games, status and scaling." },
  },
];

const COPY = {
  tr: {
    kicker: "Tanıtım Materyalleri",
    title: "Atik Arena tanıtım dokümanları",
    lead:
      "Aşağıdaki belgeler Türkçe ve İngilizce olarak hazırlanmıştır. Tamamı PDF formatındadır ve doğrudan indirilebilir.",
    open: "PDF olarak aç",
    contact: "Farklı bir formata (baskıya hazır dosya, sunum kaynağı) ihtiyacınız olursa:",
  },
  en: {
    kicker: "Press & Marketing Kit",
    title: "Atik Arena marketing documents",
    lead:
      "The documents below are available in Turkish and English. All are PDF files and can be downloaded directly.",
    open: "Open PDF",
    contact: "If you need another format (print-ready files, presentation source):",
  },
};

export default function TanitimPage() {
  const { lang } = useLanguage();
  const t = COPY[lang];

  return (
    <div className="min-h-screen bg-white text-[#191A23] selection:bg-[#B9FF66] selection:text-black overflow-x-hidden pb-[100px] md:pb-0 relative">
      <div className="fixed inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none"></div>
      <div className="fixed top-0 right-0 z-0 w-[600px] h-[600px] bg-[#61DEF4] opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <Navbar />

      <main className="w-full relative z-10">
        <section className="pt-20 pb-16 px-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full pl-3 pr-4 py-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]"></span>
              <span className="text-sm font-bold text-[#0F766E]">{t.kicker}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{t.title}</h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mb-14">{t.lead}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {DOCS.map((doc) => {
                const d = doc[lang];
                return (
                  <a
                    key={doc.file}
                    href={doc.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white border border-gray-200 rounded-[2rem] p-8 hover:border-[#10B981]/60 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-bold tracking-widest uppercase text-white bg-[#191A23] rounded-full px-3 py-1">
                        {doc.lang}
                      </span>
                      <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                        PDF · {doc.size}
                      </span>
                    </div>
                    <h2 className="text-2xl font-medium tracking-tight mb-3">{d.title}</h2>
                    <p className="text-gray-600 leading-relaxed font-light mb-6">{d.desc}</p>
                    <span className="mt-auto text-sm font-bold text-[#0F766E] group-hover:underline">
                      {t.open} →
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="mt-14 text-gray-600">
              {t.contact}{" "}
              <a href="mailto:info@civilex.ai" className="font-bold text-[#191A23] underline">
                info@civilex.ai
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
