import type { ReactNode } from "react";
import RootHtml from "@/components/RootHtml";
import { baseMetadata } from "@/lib/metadata";

export const metadata = {
  ...baseMetadata,
  description: "Thailand’s Most Trusted & Secure Digital Asset Trading Platform",
  alternates: { languages: { th: "/", en: "/en/" } },
};

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootHtml lang="en">{children}</RootHtml>;
}
