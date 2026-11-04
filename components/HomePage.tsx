import type { Line, SiteContent } from "@/content/types";
import { site } from "@/lib/site";
import Logo from "./Logo";
import LangSwitch from "./LangSwitch";
import ChapterHeader from "./ChapterHeader";
import Pillars from "./Pillars";
import Footer from "./Footer";
import Motion from "./Motion";

/** รวมบรรทัดของต้นฉบับให้เป็นย่อหน้า (ขึ้นย่อหน้าใหม่ตรงบรรทัดที่มี gap) */
function toParagraphs(lines: Line[]) {
  const out: Line["text"][][] = [];
  for (const l of lines) {
    if (l.gap || out.length === 0) out.push([]);
    out[out.length - 1].push(l.text);
  }
  return out;
}

const Paragraphs = ({ lines, className }: { lines: Line[]; className?: string }) => (
  <>
    {toParagraphs(lines).map((parts, i) => (
      <p key={i} className={className} data-reveal>
        {parts.map((t, j) => (
          <span key={j}>{t}{j < parts.length - 1 ? " " : ""}</span>
        ))}
      </p>
    ))}
  </>
);

const VIDEO = "/asset/video/glow.mp4";

/** ลำดับส่วน = สีของแต่ละ chapter (ใช้ทั้งในเมนูสีด้านขวาของ hero และในหน้าจริง) */
const CHAPTERS = [
  { id: "vision", tone: "blue", key: "vision" },
  { id: "mission", tone: "paper", key: "mission" },
  { id: "blog", tone: "emerald", key: "blog" },
  { id: "about", tone: "navy", key: "about" },
  { id: "contact", tone: "deep", key: "contact" },
] as const;

/** การจัดวางไทล์ค่านิยมทั้ง 6 บนกระดาน (ตำแหน่ง + สีพื้น) */
const TILES = [
  { area: "lead", tone: "deep" },
  { area: "trust", tone: "emerald" },
  { area: "clear", tone: "navy" },
  { area: "safe", tone: "purple" },
  { area: "last", tone: "blue" },
  { area: "new", tone: "emerald" },
] as const;

export default function HomePage({ content: c }: { content: SiteContent }) {
  const contactHref = site.contactEmail
    ? `mailto:${site.contactEmail}?subject=${encodeURIComponent("Navo Tech — " + c.contact.title)}`
    : null;

  return (
    <>
      <Motion />
      <ChapterHeader c={c} />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <section className="hero" data-chapter="hero" aria-labelledby="hero-title">
          <div className="hero-panel">
            <video
              className="hero-video glow-video"
              autoPlay
              loop
              muted
              playsInline
              poster="/asset/image/hero-poster.jpg"
              aria-hidden="true"
            >
              <source src={VIDEO} type="video/mp4" />
            </video>

            <div className="hero-top">
              <a href="#top" className="hero-logo"><Logo tone="color" full /></a>
              <LangSwitch lang={c.lang} />
            </div>

            <div className="hero-copy">
              <h1 id="hero-title" className="display hero-title">{c.hero.title}</h1>
              <p className="hero-lead">{c.hero.lead}</p>
              <p className="hero-sub">{c.hero.sub}</p>
              <a href="#contact" className="btn btn--accent">{c.cta} →</a>
            </div>
          </div>

          <nav className="swatches" aria-label="Sections">
            {CHAPTERS.map((ch) => (
              <a key={ch.id} href={`#${ch.id}`} className={`swatch field--${ch.tone}`}>
                <span>{c.nav[ch.key]}</span>
                <span className="swatch-arrow" aria-hidden="true">↓</span>
              </a>
            ))}
          </nav>
        </section>

        {/* ---------- Vision ---------- */}
        <section id="vision" className="chapter vision field--blue" data-chapter="blue" data-reveal-group>
          <h2 className="display vision-title" data-reveal>{c.vision.title}</h2>
          <p className="statement vision-text" data-reveal>{c.vision.description}</p>
          <Logo mark className="vision-mark" />
        </section>

        {/* ---------- Mission: six values on a board ---------- */}
        <section id="mission" className="chapter board-wrap field--paper" data-chapter="paper" data-reveal-group>
          <div className="board">
            <div className="tile tile--head field--blue" data-reveal>
              <h2 className="head">{c.mission.title}</h2>
            </div>
            {c.mission.cards.map((card, i) => (
              <article key={card.icon} className={`tile tile--${TILES[i].area} field--${TILES[i].tone}`} data-reveal>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/asset/image/values/${card.icon}`}
                  alt=""
                  className="tile-obj"
                  width={1000}
                  height={1000}
                  loading="lazy"
                />
                <div className="tile-cap">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
            <div className="tile tile--desc field--paper2" data-reveal>
              <p>{c.mission.description}</p>
            </div>
          </div>
        </section>

        {/* ---------- Future / blog ---------- */}
        <section id="blog" className="chapter future field--emerald" data-chapter="emerald" data-reveal-group>
          <h2 className="display future-title" data-reveal>{c.future.title}</h2>
          <Pillars future={c.future} />
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="chapter about field--navy" data-chapter="navy" data-reveal-group>
          <h2 className="head about-title" data-reveal>{c.about.title}</h2>
          <div className="about-cols">
            <Paragraphs lines={c.about.lines} />
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="chapter contact field--deep" data-chapter="deep" data-reveal-group>
          <div className="contact-text">
            <h2 className="display" data-reveal>{c.contact.title}</h2>
            <Paragraphs lines={c.contact.lines} className="contact-p" />
            {contactHref && (
              <a href={contactHref} className="btn btn--accent" data-reveal>{c.cta} →</a>
            )}
          </div>
          <div className="contact-media" data-reveal>
            <video className="glow-video" autoPlay loop muted playsInline aria-hidden="true" preload="none" poster="/asset/image/hero-poster.jpg">
              <source src={VIDEO} type="video/mp4" />
            </video>
            <Logo mark tone="color" className="contact-mark" />
          </div>
        </section>
      </main>

      <Footer c={c} />
    </>
  );
}
