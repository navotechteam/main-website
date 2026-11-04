"use client";

import { useEffect } from "react";

/**
 * ทำให้ชิ้นส่วนในแต่ละ section ค่อยๆ ลอยขึ้นมาตอนเลื่อนถึง (หัวข้อ → ข้อความ → รูป)
 * ถ้า JavaScript ไม่ทำงาน เนื้อหายังแสดงครบตามปกติ
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    root.classList.add("js-motion");

    const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const items = e.target.querySelectorAll<HTMLElement>("[data-reveal]");
          items.forEach((el, i) => {
            el.style.transitionDelay = `${i * 75}ms`;
            el.classList.add("is-in");
          });
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    groups.forEach((g) => io.observe(g));
    return () => io.disconnect();
  }, []);

  return null;
}
