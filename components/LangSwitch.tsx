"use client";

import { useRouter } from "next/navigation";
import type { Lang } from "@/content/types";

const PATHS: Record<Lang, string> = { th: "/", en: "/en/" };
const LABELS: Record<Lang, string> = { th: "ไทย", en: "English" };

/** ปุ่มสลับภาษา — เฟดหน้าออกก่อนเปลี่ยนหน้า เหมือนเว็บเดิม */
export default function LangSwitch({ lang }: { lang: Lang }) {
  const router = useRouter();

  const go = (target: Lang) => {
    if (target === lang) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return router.push(PATHS[target]);
    document.body.style.opacity = "0";
    setTimeout(() => {
      router.push(PATHS[target]);
      document.body.style.opacity = "";
    }, 350);
  };

  return (
    <div className="lang" role="group" aria-label="Language">
      {(Object.keys(PATHS) as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          className="lang-btn"
          aria-pressed={l === lang}
          lang={l}
          onClick={() => go(l)}
        >
          {LABELS[l]}
        </button>
      ))}
    </div>
  );
}
