import { siteConfig, type Locale } from "../shared/config";
import { Star } from "../shared/decor";
import { GalleryEmpty, GalleryGrid } from "../shared/gallery-core";
import { dict } from "../shared/i18n";
import type { ImageFile } from "../shared/media-types";
import { Eyebrow } from "../shared/ui";

export function Gallery({ locale, images }: { locale: Locale; images: ImageFile[] }) {
  const t = dict[locale].gallery;

  return (
    <div className="wrap relative py-12">
      <Star className="absolute top-14 right-[12%] size-7" />
      <div className="reveal mb-7">
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="title-section mt-2 max-w-3xl">{t.title}</h2>
      </div>
      {images.length > 0 ? (
        <GalleryGrid
          locale={locale}
          images={images}
          columns={4}
          initial={siteConfig.galleryInitial}
          sizes="(min-width: 1280px) 300px, 24vw"
          gapClassName="gap-4"
          radiusClassName="rounded-[1.5rem]"
        />
      ) : (
        <GalleryEmpty
          locale={locale}
          count={6}
          gridClassName="grid grid-cols-6 items-center gap-3.5 xl:gap-5 [&>li:nth-child(even)]:translate-y-3"
          radiusClassName="rounded-[1.75rem]"
        />
      )}
    </div>
  );
}
