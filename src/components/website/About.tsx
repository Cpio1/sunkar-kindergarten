import { siteConfig, type Locale } from "../shared/config";
import { pillars } from "../shared/content-data";
import { Leaf, Star, Sun } from "../shared/decor";
import { dict } from "../shared/i18n";
import { MediaSlot } from "../shared/media-slot";
import type { ImageFile, MediaFile } from "../shared/media-types";
import { OrganicFrame } from "../shared/organic-frame";
import { Eyebrow } from "../shared/ui";

export function About({ locale, media, sides }: { locale: Locale; media: MediaFile | null; sides: [ImageFile | null, ImageFile | null] }) {
  const t = dict[locale].about;

  return (
    <div className="wrap grid grid-cols-[0.82fr_1fr] items-center gap-10 py-10 xl:gap-14 xl:py-14">
      <div className="reveal relative mx-auto aspect-[4/5] w-full max-w-[min(100%,calc((100svh-8rem)*0.8),430px)]">
        <Sun className="absolute -top-[5%] -left-[5%] w-[28%]" />
        <OrganicFrame shape="arch" ringClassName="text-brand" className="size-full">
          <MediaSlot media={media} alt={siteConfig.name[locale]} sizes="(min-width: 1280px) 430px, 34vw" fallback="garden" focus={siteConfig.aboutFocus} videoLabel={t.videoLabel} />
        </OrganicFrame>
        {!media && (
          <p className="absolute right-4 bottom-4 left-4 rounded-2xl bg-white/90 px-3 py-2 text-center text-sm font-bold text-ink">{t.mediaPlaceholder}</p>
        )}
        {sides[0] ? (
          <OrganicFrame shape="b" className="absolute -right-[9%] bottom-[3%] aspect-square w-[38%] drop-shadow-[0_14px_20px_rgba(33,122,96,0.28)]">
            <MediaSlot media={sides[0]} alt={siteConfig.name[locale]} sizes="170px" fallback="books" />
          </OrganicFrame>
        ) : (
          <Leaf className="anim-bob absolute -right-[6%] bottom-[12%] w-[13%]" />
        )}
        {sides[1] && (
          <OrganicFrame shape="c" ringClassName="text-brand" className="absolute -left-[6%] bottom-[8%] aspect-square w-[32%] drop-shadow-[0_14px_20px_rgba(33,122,96,0.28)]">
            <MediaSlot media={sides[1]} alt={siteConfig.name[locale]} sizes="280px" fallback="art" />
          </OrganicFrame>
        )}
      </div>

      <div className="reveal">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="title-section mt-3">{t.title}</h2>
        <div className="mt-4 space-y-3 text-base leading-snug text-ink-soft xl:text-[1.05rem] xl:leading-relaxed">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3.5">
          {pillars.map(({ id, icon: Icon, tint }, index) => (
            <li key={id} className={`flex items-start gap-3 ${index === 4 ? "col-span-2 max-w-[calc(50%-0.625rem)] translate-x-1/2" : ""}`}>
              <span className={`grid size-11 shrink-0 place-items-center rounded-[42%_58%_55%_45%/50%_45%_55%_50%] ${tint}`}>
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block font-extrabold">{t.pillars[id].title}</span>
                <span className="block text-[0.92rem] leading-snug text-ink-soft">{t.pillars[id].text}</span>
              </span>
            </li>
          ))}
        </ul>
        <Star className="mt-1 ml-auto size-5" fill="#217A60" />
      </div>
    </div>
  );
}
