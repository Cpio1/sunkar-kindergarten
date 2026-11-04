"use client";

import { sectionIds, siteConfig, type Locale } from "../shared/config";
import { dict } from "../shared/i18n";
import { WhatsAppIcon } from "../shared/icons";
import { LanguageSwitch } from "../shared/language-switch";
import type { ImageFile } from "../shared/media-types";
import { Logo } from "../shared/ui";
import { useActiveSection } from "../shared/use-active-section";

export function Header({ locale, logo }: { locale: Locale; logo: ImageFile | null }) {
  const t = dict[locale];
  const active = useActiveSection();

  return (
    <header className="sticky top-0 z-50 hidden bg-milk/90 backdrop-blur-md lg:block">
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-3 !px-5 xl:!px-8">
        <Logo name={siteConfig.name[locale]} logo={logo} href="#home" />
        <nav aria-label={t.menu.title}>
          <ul className="flex items-center">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={`block rounded-full px-2.5 py-2 text-[0.88rem] font-bold whitespace-nowrap transition-colors xl:px-3.5 xl:text-[0.95rem] ${
                    active === id ? "bg-mint text-brand-deep" : "text-ink hover:text-brand"
                  }`}
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageSwitch locale={locale} label={t.langLabel} />
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.cta.contact}
            className="btn btn-primary min-h-11 px-3 text-[0.9rem] xl:px-4.5"
          >
            <WhatsAppIcon className="size-5" />
            <span className="hidden xl:inline">{t.cta.contact}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
