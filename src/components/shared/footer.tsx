import { siteConfig, telUrl, type Locale } from "./config";
import { Wave } from "./decor";
import { dict } from "./i18n";
import type { ImageFile } from "./media-types";
import { Logo } from "./ui";

export function Footer({ locale, logo }: { locale: Locale; logo: ImageFile | null }) {
  const t = dict[locale];
  return (
    <footer className="bg-mint">
      <Wave fill="#175A47" />
      <div className="bg-brand-deep pt-4 pb-24 text-mint lg:pb-8">
        <div className="wrap flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-2">
            <Logo name={siteConfig.name[locale]} logo={logo} href="#home" invert />
            <p className="text-sm">{t.footer.tagline}</p>
          </div>
          <div className="text-sm lg:text-right">
            <p>{siteConfig.address[locale]}</p>
            <p className="mt-1">
              <a href={telUrl} className="font-bold text-white hover:underline">
                {siteConfig.phone.display}
              </a>
            </p>
            <p className="mt-1 opacity-80">
              © {new Date().getFullYear()} {siteConfig.name[locale]}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
