import { Baby, ChevronDown, Languages, UsersRound, UtensilsCrossed } from "lucide-react";
import { siteConfig, type Locale } from "../shared/config";
import { Falcon, Star, Sun } from "../shared/decor";
import { dict } from "../shared/i18n";
import { WhatsAppIcon } from "../shared/icons";
import { MediaSlot } from "../shared/media-slot";
import type { SiteMedia } from "../shared/media-types";
import { OrganicFrame } from "../shared/organic-frame";
import { HERO_SIZES } from "../website/Hero";

export function MobileHero({ locale, media }: { locale: Locale; media: SiteMedia }) {
  const t = dict[locale].hero;
  const cta = dict[locale].cta;

  const facts = [
    { icon: UsersRound, label: t.facts.groups, tint: "bg-mint-strong" },
    { icon: Baby, label: t.facts.age, tint: "bg-sun" },
    { icon: Languages, label: t.facts.language, tint: "bg-sky" },
    { icon: UtensilsCrossed, label: t.facts.meals, tint: "bg-peach" },
  ];

  return (
    <div className="relative overflow-clip pb-7">
      <div className="wrap-m relative pt-3">
        <h1 className="title-hero-m">{t.title}</h1>
        <p className="mt-2.5 leading-snug text-ink-soft">{t.subtitle}</p>

        <div className="mt-4 grid grid-cols-[1.35fr_1fr] gap-2">
          <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary gap-1.5 px-1.5 text-[clamp(0.8rem,3.65vw,0.95rem)] whitespace-nowrap">
            <WhatsAppIcon className="size-5 shrink-0" />
            {cta.contact}
          </a>
          <a href="#about" className="btn btn-ghost gap-1 px-1.5 text-[clamp(0.8rem,3.65vw,0.95rem)] whitespace-nowrap">
            {cta.more}
            <ChevronDown className="size-4 shrink-0" aria-hidden="true" />
          </a>
        </div>

        {/* Одно большое фото вместо десктопной композиции из трёх */}
        <div className="relative mt-5">
          <Sun className="absolute -top-5 -left-3 z-10 w-16" />
          <Falcon className="anim-soar absolute top-1 right-2 z-10 w-10" />
          <Star className="absolute right-[-2px] bottom-16 z-10 size-5" />
          <OrganicFrame shape="c" className="mx-auto aspect-[5/4] w-[92%]">
            <MediaSlot media={media.hero} alt={siteConfig.name[locale]} sizes={HERO_SIZES} fallback="building" priority focus={siteConfig.heroFocus} />
          </OrganicFrame>
        </div>
        {!media.hero && <p className="mt-2 text-center text-[0.72rem] font-bold text-ink-soft">{t.placeholderNote}</p>}

        <ul className="mt-3 grid grid-cols-2 gap-2">
          {facts.map(({ icon: Icon, label, tint }) => (
            <li key={label} className="flex min-h-12 items-center gap-2 rounded-2xl bg-white p-1.5 text-[0.86rem] leading-tight font-bold shadow-soft">
              <span className={`grid size-8 shrink-0 place-items-center rounded-full ${tint}`}>
                <Icon className="size-4 text-brand-deep" aria-hidden="true" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
