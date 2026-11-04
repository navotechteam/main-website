import type { ReactNode } from "react";

export type Lang = "th" | "en";

/** ข้อความหนึ่งบรรทัดจากต้นฉบับ — `gap` บอกว่าบรรทัดนี้เริ่มย่อหน้าใหม่ */
export type Line = { text: ReactNode; gap?: "5vh" | "10vh" };

export type SiteContent = {
  lang: Lang;
  /** ลิงก์เมนู (ชื่อเดิมจาก navbar) */
  nav: { vision: string; mission: string; blog: string; about: string; contact: string };
  cta: string;
  hero: {
    /** บรรทัดแรกของหัวเรื่องเดิม → h1 */
    title: ReactNode;
    /** บรรทัดที่สองของหัวเรื่องเดิม */
    lead: ReactNode;
    sub: ReactNode;
  };
  vision: {
    title: ReactNode;
    description: string;
  };
  mission: {
    title: ReactNode;
    description: ReactNode;
    cards: { icon: string; title: string; text: string }[];
  };
  future: {
    title: ReactNode;
    slides: { label: string; text: string; image: string; alt: string }[];
    prev: string;
    next: string;
  };
  about: {
    title: ReactNode;
    lines: Line[];
  };
  contact: {
    title: string;
    lines: Line[];
  };
  footer: {
    terms: string;
    copyright: string;
    backToTop: string;
  };
};
