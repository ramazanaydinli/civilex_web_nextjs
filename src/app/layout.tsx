// src/app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext"; // Import ettik

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Civilex.AI - AI In Everyday Life",
  description: "AI R&D in Action",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        {/* Tüm uygulamayı Provider içine aldık */}
        <LanguageProvider>
           {children}
        </LanguageProvider>
      </body>
    </html>
  );
}