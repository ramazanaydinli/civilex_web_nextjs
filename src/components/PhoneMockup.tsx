// src/components/PhoneMockup.tsx
import React from 'react';

interface PhoneMockupProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ children, className }) => {
  return (
    <div className={`relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ${className}`}>
      
      {/* --- Fiziksel Tuşlar (Sol Taraf) --- */}
      {/* Ses Kısma/Açma Tuşları */}
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      
      {/* --- Fiziksel Tuşlar (Sağ Taraf) --- */}
      {/* Güç Tuşu */}
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      
      {/* --- Ekran Çerçevesi ve İçerik Alanı --- */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800 relative">
        
        {/* --- Dinamik Çentik (Dynamic Island) --- */}
        {/* Bu kısım ekranın üstünde duran siyah kamera alanıdır */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[25px] w-[100px] bg-black rounded-b-[16px] z-20"></div>

        {/* --- İçerik (Screen Content) --- */}
        {/* Buraya dışarıdan gelen children (ekran görüntüsü, slayt vb.) yerleşir */}
        <div className="w-full h-full relative z-10 overflow-hidden">
            {children}
        </div>
        
      </div>
    </div>
  );
};

export default PhoneMockup;