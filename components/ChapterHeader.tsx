"use client";

import { useEffect, useState } from "react";
import type { SiteContent } from "@/content/types";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";

/**
 * แถบเมนูที่ลอยอยู่ด้านบนหลังเลื่อนพ้น hero
 * สีของแถบเปลี่ยนตามสีของส่วน (chapter) ที่อยู่ใต้มัน — ลูกเล่นหลักของดีไซน์นี้
 */
export default function ChapterHeader({ c }: { c: SiteContent }) {
  const [chapter, setChapter] = useState<string | null>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
    const probe = () => {
      const y = 32; // จุดกึ่งกลางของแถบเมนู
      let current: string | null = null;
      for (const s of sections) {
        const r = s.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) current = s.dataset.chapter ?? null;
      }
      setChapter(current);
    };
    probe();
    window.addEventListener("scroll", probe, { passive: true });
    window.addEventListener("resize", probe);
    return () => {
      window.removeEventListener("scroll", probe);
      window.removeEventListener("resize", probe);
    };
  }, []);

  const shown = chapter !== null && chapter !== "hero";

  return (
    <header className={`bar field--${chapter ?? "deep"}${shown ? " is-shown" : ""}`} aria-hidden={!shown}>
      <a href="#top" className="bar-logo" tabIndex={shown ? 0 : -1}>
        <Logo />
      </a>
      <nav className="bar-links" aria-label="Sections">
        <a href="#vision" tabIndex={shown ? 0 : -1}>{c.nav.vision}</a>
        <a href="#mission" tabIndex={shown ? 0 : -1}>{c.nav.mission}</a>
        <a href="#blog" tabIndex={shown ? 0 : -1}>{c.nav.blog}</a>
        <a href="#about" tabIndex={shown ? 0 : -1}>{c.nav.about}</a>
      </nav>
      <div className="bar-end">
        <LangSwitch lang={c.lang} />
        <a href="#contact" className="btn" tabIndex={shown ? 0 : -1}>{c.nav.contact}</a>
      </div>
    </header>
  );
}
