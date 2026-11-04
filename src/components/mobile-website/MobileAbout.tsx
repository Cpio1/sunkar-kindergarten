import { siteConfig, type Locale } from "../shared/config";
import { pillars } from "../shared/content-data";
import { Leaf } from "../shared/decor";
import { dict } from "../shared/i18n";
import { MediaSlot } from "../shared/media-slot";
import type { MediaFile } from "../shared/media-types";
import { Eyebrow } from "../shared/ui";

export function MobileAbout({ locale, media }: { locale: Locale; media: MediaFile | null }) {
  const t = dict[locale].about;

  return (
    <div className="py-6">
      <div className="wrap-m">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="title-section-m mt-1.5">{t.title}</h2>

        <div className="reveal relative mt-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem_1.25rem_2.5rem_1.25rem] shadow-soft">
            <MediaSlot media={media} alt={siteConfig.name[locale]} sizes="92vw" fallback="garden" videoLabel={t.videoLabel} />
            {!media && <p className="absolute right-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold">{t.mediaPlaceholder}</p>}
          </div>
          <Leaf className="anim-bob absolute -top-3 right-3 w-8" />
        </div>

        <div className="mt-4 space-y-2.5 text-[0.98rem] leading-snug text-ink-soft">
          {t.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Пять направлений листаются пальцем и не удлиняют страницу */}
      <ul className="no-scrollbar mt-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-pl-[1.125rem] px-[1.125rem] pb-3 sm:justify-center sm:flex-wrap">
        {pillars.map(({ id, icon: Icon, tint }) => (
          <li key={id} className="flex w-[66vw] max-w-56 shrink-0 snap-start flex-col gap-1.5 rounded-3xl bg-white p-3.5 shadow-soft">
            <span className="flex items-center gap-2 font-extrabold">
              <span className={`grid size-9 shrink-0 place-items-center rounded-[42%_58%_55%_45%/50%_45%_55%_50%] ${tint}`}>
                <Icon className="size-[1.1rem]" aria-hidden="true" />
              </span>
              {t.pillars[id].title}
            </span>
            <span className="text-[0.86rem] leading-snug text-ink-soft">{t.pillars[id].text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
