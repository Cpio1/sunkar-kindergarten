"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Plus, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { siteConfig, type Locale } from "./config";
import { dict } from "./i18n";
import type { ImageFile } from "./media-types";
import { Scene, type SceneVariant } from "./scene";

/** Раскладывает фото по колонкам с учётом пропорций: снимки показываются целиком, без обрезки. */
function toColumns(images: ImageFile[], columns: number) {
  const result = Array.from({ length: columns }, () => ({ height: 0, items: [] as { image: ImageFile; index: number }[] }));
  images.forEach((image, index) => {
    const shortest = result.reduce((a, b) => (b.height < a.height ? b : a));
    shortest.items.push({ image, index });
    shortest.height += image.height / image.width;
  });
  return result.map((column) => column.items);
}

export function GalleryGrid({
  locale,
  images,
  columns,
  initial,
  sizes,
  gapClassName,
  radiusClassName,
}: {
  locale: Locale;
  images: ImageFile[];
  columns: number;
  initial: number;
  sizes: string;
  gapClassName: string;
  radiusClassName: string;
}) {
  const t = dict[locale].gallery;
  const [visible, setVisible] = useState(initial);
  const [opened, setOpened] = useState<number | null>(null);
  const shown = images.slice(0, visible);

  return (
    <>
      <div className={`flex items-start ${gapClassName}`}>
        {toColumns(shown, columns).map((column, columnIndex) => (
          <div key={columnIndex} className={`flex min-w-0 flex-1 flex-col ${gapClassName}`}>
            {column.map(({ image, index }) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setOpened(index)}
                aria-label={t.open(index + 1)}
                style={{ animationDelay: `${(index % initial) * 60}ms` }}
                className={`lift anim-fade-up group relative block w-full overflow-hidden bg-mint shadow-soft ${radiusClassName}`}
              >
                <Image
                  src={image.src}
                  alt={t.photoAlt(index + 1)}
                  width={image.width}
                  height={image.height}
                  sizes={sizes}
                  loading="lazy"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </button>
            ))}
          </div>
        ))}
      </div>

      {visible < images.length && (
        <div className="mt-6 flex justify-center">
          <button type="button" onClick={() => setVisible(images.length)} className="btn btn-sun">
            <Plus className="size-5" aria-hidden="true" />
            {t.more}
          </button>
        </div>
      )}

      <Lightbox locale={locale} images={images} index={opened} onChange={setOpened} />
    </>
  );
}

/** Увеличенный просмотр: Esc закрывает окно, стрелки и свайп листают фото, фокус остаётся внутри окна. */
function Lightbox({
  locale,
  images,
  index,
  onChange,
}: {
  locale: Locale;
  images: ImageFile[];
  index: number | null;
  onChange: (index: number | null) => void;
}) {
  const t = dict[locale].gallery;
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onChange],
  );

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (isOpen && !element.open) {
      element.showModal();
      document.documentElement.style.overflow = "hidden";
    }
    if (!isOpen && element.open) element.close();
  }, [isOpen]);

  const image = index === null ? null : images[index];

  return (
    <dialog
      ref={dialog}
      onClose={() => {
        document.documentElement.style.overflow = "";
        onChange(null);
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onChange(null);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
      onTouchStart={(event) => {
        touchX.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchX.current === null) return;
        const distance = event.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(distance) > 50) go(distance > 0 ? -1 : 1);
      }}
      aria-label={t.eyebrow}
      className="fixed inset-0 m-0 size-full max-h-none max-w-none bg-transparent p-0 open:flex open:items-center open:justify-center"
    >
      {image && index !== null && (
        <>
          <div
            className="anim-zoom relative"
            key={image.src}
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
              width: `min(94vw, calc((100dvh - 7.5rem) * ${image.width / image.height}))`,
            }}
          >
            <Image src={image.src} alt={t.photoAlt(index + 1)} fill sizes="94vw" className="rounded-2xl object-contain" />
          </div>

          <p className="absolute top-5 left-5 rounded-full bg-black/45 px-3 py-1 text-sm font-bold text-white">
            {t.counter(index + 1, images.length)}
          </p>
          <button type="button" onClick={() => onChange(null)} aria-label={t.close} autoFocus className="absolute top-3 right-3 grid size-12 place-items-center rounded-full bg-white text-ink">
            <X className="size-6" aria-hidden="true" />
          </button>
          {images.length > 1 && (
            <>
              <button type="button" onClick={() => go(-1)} aria-label={t.prev} className="absolute bottom-4 left-[calc(50%-3.5rem)] grid size-12 place-items-center rounded-full bg-sun text-ink lg:top-1/2 lg:bottom-auto lg:left-5 lg:-translate-y-1/2">
                <ChevronLeft className="size-6" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => go(1)} aria-label={t.next} className="absolute right-[calc(50%-3.5rem)] bottom-4 grid size-12 place-items-center rounded-full bg-sun text-ink lg:top-1/2 lg:right-5 lg:bottom-auto lg:-translate-y-1/2">
                <ChevronRight className="size-6" aria-hidden="true" />
              </button>
            </>
          )}
        </>
      )}
    </dialog>
  );
}

const placeholders: { variant: SceneVariant; aspect: string }[] = [
  { variant: "play", aspect: "aspect-[4/3]" },
  { variant: "art", aspect: "aspect-square" },
  { variant: "garden", aspect: "aspect-[5/4]" },
  { variant: "books", aspect: "aspect-square" },
  { variant: "music", aspect: "aspect-[4/3]" },
  { variant: "ball", aspect: "aspect-[5/4]" },
];

/** Пока фотографий нет: честные иллюстрации с подписью и ссылка на настоящие снимки в 2ГИС. */
export function GalleryEmpty({
  locale,
  count,
  gridClassName,
  radiusClassName,
}: {
  locale: Locale;
  count: number;
  gridClassName: string;
  radiusClassName: string;
}) {
  const t = dict[locale].gallery;
  return (
    <>
      <ul className={gridClassName}>
        {placeholders.slice(0, count).map(({ variant, aspect }) => (
          <li key={variant} className={`relative overflow-hidden shadow-soft ${aspect} ${radiusClassName}`}>
            <Scene variant={variant} />
            <span className="absolute bottom-2 left-2 rounded-full bg-white/85 px-2.5 py-0.5 text-[0.7rem] font-bold text-ink-soft">{t.placeholderTag}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-col items-center gap-3 text-center">
        <p className="max-w-xl text-[0.95rem] text-ink-soft">{t.empty}</p>
        <a href={siteConfig.twoGis.gallery} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
          {t.openExternal}
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
