import type { ReactNode } from "react";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800-italic.css";
import "@fontsource/prompt/400.css";
import "@fontsource/prompt/500.css";
import "@fontsource/prompt/600.css";
import "@fontsource/prompt/700.css";
import "@/styles/globals.css";

/** โครง <html> ที่ใช้ร่วมกันระหว่างหน้าไทยและอังกฤษ */
export default function RootHtml({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}
