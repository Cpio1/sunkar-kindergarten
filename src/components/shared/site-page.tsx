import type { ReactNode } from "react";
import { About } from "../website/About";
import { Contacts } from "../website/Contacts";
import { Documents } from "../website/Documents";
import { Gallery } from "../website/Gallery";
import { Groups } from "../website/Groups";
import { Header } from "../website/Header";
import { Hero } from "../website/Hero";
import { Meals } from "../website/Meals";
import { MobileAbout } from "../mobile-website/MobileAbout";
import { MobileContacts } from "../mobile-website/MobileContacts";
import { MobileDocuments } from "../mobile-website/MobileDocuments";
import { MobileGallery } from "../mobile-website/MobileGallery";
import { MobileGroups } from "../mobile-website/MobileGroups";
import { MobileHeader } from "../mobile-website/MobileHeader";
import { MobileHero } from "../mobile-website/MobileHero";
import { MobileMeals } from "../mobile-website/MobileMeals";
import type { Locale, SectionId } from "./config";
import { Footer } from "./footer";
import { dict } from "./i18n";
import { getSiteMedia } from "./media";
import { FrameDefs } from "./organic-frame";
import { buildJsonLd } from "./seo";
import { WhatsAppFloat } from "./whatsapp-float";

/**
 * Один раздел с одним id и двумя отдельными вёрстками. Скрытая через CSS версия
 * не мешает якорям, а её ленивые изображения браузер не загружает.
 */
function Responsive({ id, desktop, mobile }: { id: SectionId; desktop: ReactNode; mobile: ReactNode }) {
  return (
    <section id={id}>
      <div className="hidden lg:block">{desktop}</div>
      <div className="lg:hidden">{mobile}</div>
    </section>
  );
}

export function SitePage({ locale }: { locale: Locale }) {
  const media = getSiteMedia();
  const t = dict[locale];
  const props = { locale };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)).replace(/</g, "\\u003c") }}
      />
      <FrameDefs />
      <a
        href="#main"
        className="fixed top-2 left-2 z-[70] -translate-y-20 rounded-full bg-ink px-4 py-2 font-bold text-white transition-transform focus:translate-y-0"
      >
        {t.skipLink}
      </a>

      <Header locale={locale} logo={media.logo} />
      <MobileHeader locale={locale} logo={media.logo} />

      <main id="main">
        <Responsive id="home" desktop={<Hero {...props} media={media} />} mobile={<MobileHero {...props} media={media} />} />
        <Responsive id="about" desktop={<About {...props} media={media.about} sides={media.aboutSide} />} mobile={<MobileAbout {...props} media={media.about} sides={media.aboutSide} />} />
        <Responsive id="groups" desktop={<Groups {...props} />} mobile={<MobileGroups {...props} />} />
        <Responsive id="meals" desktop={<Meals {...props} />} mobile={<MobileMeals {...props} />} />
        <Responsive id="gallery" desktop={<Gallery {...props} images={media.gallery} />} mobile={<MobileGallery {...props} images={media.gallery} />} />
        <Responsive id="documents" desktop={<Documents {...props} />} mobile={<MobileDocuments {...props} />} />
        <Responsive id="contacts" desktop={<Contacts {...props} />} mobile={<MobileContacts {...props} />} />
      </main>

      <Footer locale={locale} logo={media.logo} />
      <WhatsAppFloat label={t.cta.whatsappFloat} />
    </>
  );
}
