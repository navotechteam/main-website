import type { SiteContent } from "@/content/types";

/** ปิดท้ายด้วยชื่อ NAVO TECH เต็มความกว้าง ตัดขอบบน */
export default function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="foot field--purple" data-chapter="purple">
      <p className="foot-name" aria-hidden="true">NAVO TECH</p>
      <div className="foot-row">
        <nav className="foot-links" aria-label="Footer">
          <a href="#about">About Us</a>
          <a href="#vision">Vision</a>
          <a href="#mission">Mission</a>
          <a href="#blog">Blog</a>
        </nav>
        <a href="#" className="foot-terms">{c.footer.terms}</a>
        <p className="foot-copy">{c.footer.copyright}</p>
        <a href="#top" className="foot-top">{c.footer.backToTop} ↑</a>
      </div>
    </footer>
  );
}
