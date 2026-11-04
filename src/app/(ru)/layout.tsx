import type { ReactNode } from "react";
import { RootDocument } from "@/components/shared/root-document";
import { buildMetadata, siteViewport } from "@/components/shared/seo";

export const metadata = buildMetadata("ru");
export const viewport = siteViewport;

export default function RussianLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="ru">{children}</RootDocument>;
}
