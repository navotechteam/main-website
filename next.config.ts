import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // สร้างเป็นไฟล์ static (HTML/CSS/JS) ในโฟลเดอร์ out/
  // นำไปวางบนโฮสต์เดิม (Plesk / Apache) ได้ทันทีโดยไม่ต้องมี Node.js บนเซิร์ฟเวอร์
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
