// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'tr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('en');

  // <html lang> seçili dille birlikte değişsin.
  // 🚨 Sadece SEO/erişilebilirlik için değil: CSS `text-transform: uppercase`
  // dile duyarlıdır. lang="tr" olmadan tarayıcı "i" harfini "I" yapar ve
  // "Fiyatlandırma" → "FIYATLANDIRMA", "Teknolojisi" → "TEKNOLOJISI" olur.
  // lang="tr" ile doğru şekilde "İ" üretilir.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};