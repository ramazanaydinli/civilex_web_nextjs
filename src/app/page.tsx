// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; // Yeni oluşturduğumuz Hero'yu import et

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden relative selection:bg-[#B9FF66] selection:text-black">
      
      {/* --- BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:44px_44px]"></div>
      <div className="absolute top-0 left-0 z-0 w-[500px] h-[500px] bg-[#61DEF4] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Navbar */}
      <Navbar />

      {/* --- HERO SECTION (Ayrı Bileşen) --- */}
      <Hero />

      {/* --- LATEST PROJECTS BADGE (Hero'dan bağımsız, Page'e özel) --- */}
      {/* Burası tüm sayfa boyunca sabit kalsın diye burada bıraktık */}
      <div className="fixed bottom-6 left-6 md:left-[100px] hidden md:block z-40">
          <div className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl shadow-xl flex items-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
              <div className="w-2.5 h-2.5 bg-[#B9FF66] rounded-full animate-pulse"></div>
              <span className="text-sm font-bold tracking-tight">View All Projects</span>
          </div>
      </div>
      
    </div>
  );
}