import type { Metadata, Viewport } from "next";
import { localePath, locales, siteConfig, siteUrl, type Locale } from "./config";
import { dict } from "./i18n";

export const siteViewport: Viewport = {
  themeColor: "#FFFDF6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export function buildMetadata(locale: Locale): Metadata {
  const t = dict[locale].meta;
  const alternateLocale = locales.find((code) => code !== locale)!;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: localePath(locale),
      languages: { kk: localePath("kk"), ru: localePath("ru"), "x-default": localePath("kk") },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name[locale],
      title: t.title,
      description: t.description,
      url: localePath(locale),
      locale: t.ogLocale,
      alternateLocale: dict[alternateLocale].meta.ogLocale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name[locale] }],
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: ["/og.png"] },
    robots: { index: true, follow: true },
  };
}

/** Микроразметка schema.org: только подтверждённые факты. */
export function buildJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Preschool",
    name: siteConfig.name[locale],
    alternateName: "Сункар Балабақшасы",
    description: dict[locale].meta.description,
    url: `${siteUrl}${localePath(locale)}`,
    telephone: siteConfig.phone.tel,
    inLanguage: "kk",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressParts.street,
      addressLocality: siteConfig.addressParts.locality,
      addressRegion: siteConfig.addressParts.region,
      addressCountry: siteConfig.addressParts.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: siteConfig.geo.lat, longitude: siteConfig.geo.lon },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
    sameAs: [siteConfig.instagram.url, siteConfig.twoGis.card],
  };
}
