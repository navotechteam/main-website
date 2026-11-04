import type { ReactNode } from "react";
import RootHtml from "@/components/RootHtml";
import { baseMetadata } from "@/lib/metadata";

export const metadata = {
  ...baseMetadata,
  description: "แพลตฟอร์มซื้อขายสินทรัพย์ดิจิทัลที่น่าเชื่อถือและปลอดภัยที่สุดในประเทศไทย",
  alternates: { languages: { th: "/", en: "/en/" } },
};

export default function ThaiLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="th">{children}</RootHtml>;
}
