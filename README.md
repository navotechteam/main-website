# Navo Tech — Next.js

เว็บ Navo Tech (เดิมชื่อ Primefort) ที่แปลงจาก PHP (`index.php` / `index-en.php`) มาเป็น Next.js (App Router + TypeScript)

## โครงสร้าง

```
app/(th)/page.tsx        หน้าไทย   →  /
app/(en)/en/page.tsx     หน้าอังกฤษ →  /en/
components/
  HomePage.tsx           โครงหน้าทั้งหมด (ใช้ร่วมกันทั้ง 2 ภาษา)
  ChapterHeader.tsx      แถบเมนูลอยที่เปลี่ยนสีตามส่วนที่อยู่ข้างใต้ (client)
  Pillars.tsx            "ขับเคลื่อนอนาคต" 3 แนวทาง: กดแท็บ / ปัด / เลื่อนเอง (client)
  LangSwitch.tsx, Motion.tsx, Logo.tsx, Footer.tsx, RootHtml.tsx
lib/site.ts              ใส่อีเมลติดต่อ (ปุ่ม Get in touch ในส่วนติดต่อเรา)
content/th.tsx, en.tsx   ข้อความทั้งหมดของแต่ละภาษา — แก้เนื้อหาที่นี่ที่เดียว
styles/globals.css       สีและสไตล์ทั้งหมด (โทนดำ-ส้ม) — สีหลักอยู่ใน :root ด้านบนไฟล์
public/asset/            รูป วิดีโอ (path เดิม /asset/...)
public/.htaccess         redirect index.php → /, index-en.php → /en/
```

## คำสั่ง

```bash
npm install
npm run dev      # พัฒนา → http://localhost:3000
npm run build    # สร้างไฟล์ static ในโฟลเดอร์ out/
npm start        # เปิดดูผล build ใน out/
```

## Deploy

`next.config.ts` ตั้ง `output: "export"` ไว้ — หลัง `npm run build` ให้อัปโหลด **ทุกอย่างในโฟลเดอร์ `out/`**
ขึ้น httpdocs ของโฮสต์ (แทนไฟล์ PHP เดิม) ไม่ต้องมี Node.js บนเซิร์ฟเวอร์

ถ้าต้องการใช้ฟีเจอร์ฝั่งเซิร์ฟเวอร์ (API routes, ฟอร์มติดต่อ ฯลฯ) ในอนาคต ให้ลบ `output: "export"`
แล้วรันด้วย `next start` บนเซิร์ฟเวอร์ที่มี Node.js (หรือ deploy บน Vercel)
