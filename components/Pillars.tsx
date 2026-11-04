"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import type { SiteContent } from "@/content/types";

const AUTO_MS = 7000;
const SWIPE_PX = 50;

type Props = { future: SiteContent["future"] };

/**
 * "ขับเคลื่อนอนาคต" — 3 แนวทางของ Navo Tech
 * กดชื่อแนวทาง, ปัด/ลากรูป หรือรอให้เลื่อนเองทุก 7 วินาที (หยุดเมื่อชี้เมาส์หรือโฟกัสอยู่)
 */
export default function Pillars({ future }: Props) {
  const { slides } = future;
  const total = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cycle, setCycle] = useState(0); // เปลี่ยนค่าเพื่อเริ่มแถบเวลาใหม่
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (i: number) => {
      setActive(((i % total) + total) % total);
      setCycle((n) => n + 1);
    },
    [total]
  );

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => go(active + 1), AUTO_MS);
    return () => clearTimeout(t);
  }, [active, paused, cycle, go]);

  const onDown = (e: ReactPointerEvent) => {
    startX.current = e.clientX;
  };
  const onUp = (e: ReactPointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <div
      className={`pillars${paused ? " is-paused" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="pillars-text" data-reveal>
        <div className="pillars-tabs" role="tablist" aria-label={typeof future.title === "string" ? future.title : undefined}>
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              role="tab"
              id={`pillar-tab-${i}`}
              aria-selected={i === active}
              aria-controls={`pillar-panel-${i}`}
              tabIndex={i === active ? 0 : -1}
              className="pillars-tab"
              onClick={() => go(i)}
              onKeyDown={(e) => {
                if (e.key === "ArrowRight") { go(active + 1); e.preventDefault(); }
                if (e.key === "ArrowLeft") { go(active - 1); e.preventDefault(); }
              }}
            >
              <span>{s.label}</span>
              <span className="pillars-time" aria-hidden="true">
                {i === active && <span key={cycle} className="pillars-time-fill" />}
              </span>
            </button>
          ))}
        </div>

        <div className="pillars-copy">
          {slides.map((s, i) => (
            <p
              key={s.label}
              id={`pillar-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`pillar-tab-${i}`}
              hidden={i !== active}
              className="pillars-statement"
            >
              {s.text}
            </p>
          ))}
        </div>

        <div className="pillars-step">
          <button type="button" className="btn btn--ghost" onClick={() => go(active - 1)}>
            ← {future.prev}
          </button>
          <button type="button" className="btn" onClick={() => go(active + 1)}>
            {future.next} →
          </button>
        </div>
      </div>

      <div
        className="pillars-stage"
        onPointerDown={onDown}
        onPointerUp={onUp}
        onPointerCancel={() => (startX.current = null)}
        data-reveal
      >
        {slides.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={s.image + i}
            src={`/asset/image/${s.image}`}
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            className={`pillars-img${i === active ? " is-active" : ""}`}
            width={514}
            height={522}
            draggable={false}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
