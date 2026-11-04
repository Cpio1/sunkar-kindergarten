import { Baby, ChevronDown, Languages, UsersRound, UtensilsCrossed } from "lucide-react";
import { siteConfig, type Locale } from "../shared/config";
import { Cloud, Falcon, FlightPath, Leaf, Star, Sun } from "../shared/decor";
import { dict } from "../shared/i18n";
import { WhatsAppIcon } from "../shared/icons";
import { MediaSlot } from "../shared/media-slot";
import type { SiteMedia } from "../shared/media-types";
import { OrganicFrame } from "../shared/organic-frame";
import { Eyebrow } from "../shared/ui";

/** Совпадает с MobileHero: браузер загрузит главное фото один раз на обе версии. */
export const HERO_SIZES = "(min-width: 1024px) 34vw, 86vw";

export function Hero({ locale, media }: { locale: Locale; media: SiteMedia }) {
  const t = dict[locale].hero;
  const cta = dict[locale].cta;
  const hasAllPhotos = media.hero && media.heroSide[0] && media.heroSide[1];

  const facts = [
    { icon: UsersRound, label: t.facts.groups, tint: "bg-mint-strong" },
    { icon: Baby, label: t.facts.age, tint: "bg-sun" },
    { icon: Languages, label: t.facts.language, tint: "bg-sky" },
    { icon: UtensilsCrossed, label: t.facts.meals, tint: "bg-peach" },
  ];

  return (
    <div className="relative overflow-clip">
      <Cloud className="anim-drift absolute top-8 left-[3%] w-24 opacity-90" fill="#EAF5E9" />
      <Star className="absolute top-[58%] left-[1.5%] size-6" />

      <div className="wrap relative grid min-h-[min(calc(100svh-4.5rem),780px)] grid-cols-[1.14fr_1fr] items-center gap-10 py-6">
        <div>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h1 className="title-hero mt-3 text-ink">
            {t.title}
          </h1>
          <p className="mt-4 max-w-[34rem] text-[clamp(1.05rem,2.3vh,1.3rem)] leading-snug text-ink-soft">{t.subtitle}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-[1.05rem]">
              <WhatsAppIcon />
              {cta.contact}
            </a>
            <a href="#about" className="btn btn-ghost text-[1.05rem]">
              {cta.more}
              <ChevronDown className="size-5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-7 flex max-w-[37rem] flex-wrap gap-2.5">
            {facts.map(({ icon: Icon, label, tint }) => (
              <li key={label} className="flex items-center gap-2 rounded-full bg-white py-1.5 pr-4 pl-1.5 font-bold shadow-soft">
                <span className={`grid size-9 place-items-center rounded-full ${tint}`}>
                  <Icon className="size-[1.15rem] text-brand-deep" aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* Композиция из трёх органических рамок */}
        <div className="relative mx-auto aspect-square w-full max-w-[min(100%,calc(100svh-7.5rem),560px)]">
          <Sun className="absolute -top-[3%] -right-[2%] w-[27%]" />
          <FlightPath
            viewBox="0 0 300 150"
            d="M6 138C60 66 140 22 288 12"
            className="absolute top-[1%] left-[2%] w-[62%]"
          />
          <Falcon className="anim-soar absolute top-[-1%] left-[59%] w-[15%]" />

          <OrganicFrame shape="a" className="absolute top-[12%] left-[10%] h-[72%] w-[74%] drop-shadow-[0_22px_30px_rgba(33,122,96,0.25)]">
            <MediaSlot media={media.hero} alt={siteConfig.name[locale]} sizes={HERO_SIZES} fallback="building" priority focus={siteConfig.heroFocus} />
          </OrganicFrame>

          <OrganicFrame shape="b" ringClassName="text-brand" className="absolute top-[56%] left-[-1%] h-[38%] w-[38%]">
            <MediaSlot media={media.heroSide[0]} alt={siteConfig.name[locale]} sizes="14vw" fallback="play" />
          </OrganicFrame>

          <OrganicFrame shape="c" className="absolute top-[63%] right-[0%] h-[33%] w-[33%]">
            <MediaSlot media={media.heroSide[1]} alt={siteConfig.name[locale]} sizes="12vw" fallback="art" />
          </OrganicFrame>

          <Leaf className="anim-bob absolute top-[8%] left-[2%] w-[9%]" />

          {!hasAllPhotos && (
            <p className="absolute right-0 -bottom-1 left-0 text-center text-xs font-bold text-ink-soft">{t.placeholderNote}</p>
          )}
        </div>
      </div>
    </div>
  );
}
