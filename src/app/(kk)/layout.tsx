import type { ReactNode } from "react";
import { RootDocument } from "@/components/shared/root-document";
import { buildMetadata, siteViewport } from "@/components/shared/seo";

export const metadata = buildMetadata("kk");
export const viewport = siteViewport;

export default function KazakhLayout({ children }: { children: ReactNode }) {
  return <RootDocument locale="kk">{children}</RootDocument>;
}
