/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statik HTML çıktısı için
  images: {
    unoptimized: true, // GitHub Pages'da resim optimizasyonu için
  },
  // GitHub Repo adınız buraya ekleniyor:
  basePath: '/civilex_web_nextjs',
  
  // Asset'lerin (CSS, JS) doğru yoldan yüklenmesi için:
  assetPrefix: '/civilex_web_nextjs',
};

export default nextConfig;