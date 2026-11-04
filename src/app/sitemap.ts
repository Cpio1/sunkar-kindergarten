import type { MetadataRoute } from "next";
import { localePath, locales, siteUrl } from "@/components/shared/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((code) => [code, `${siteUrl}${localePath(code)}`]));
  return locales.map((code) => ({
    url: `${siteUrl}${localePath(code)}`,
    changeFrequency: "monthly",
    priority: code === "kk" ? 1 : 0.9,
    alternates: { languages },
  }));
}
