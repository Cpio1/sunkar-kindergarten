import { siteConfig, type Locale } from "../shared/config";
import { GalleryEmpty, GalleryGrid } from "../shared/gallery-core";
import { dict } from "../shared/i18n";
import type { ImageFile } from "../shared/media-types";
import { Eyebrow } from "../shared/ui";

export function MobileGallery({ locale, images }: { locale: Locale; images: ImageFile[] }) {
  const t = dict[locale].gallery;

  return (
    <div className="wrap-m py-5">
      <Eyebrow>{t.eyebrow}</Eyebrow>
      <h2 className="title-section-m mt-1.5 mb-4">{t.title}</h2>
      {images.length > 0 ? (
        <GalleryGrid
          locale={locale}
          images={images}
          columns={2}
          initial={siteConfig.gallery.mobile.initial}
          step={siteConfig.gallery.mobile.step}
          sizes="(min-width: 640px) 300px, 46vw"
          gapClassName="gap-2.5"
          radiusClassName="rounded-2xl"
        />
      ) : (
        <GalleryEmpty locale={locale} count={4} gridClassName="grid grid-cols-2 items-start gap-2.5" radiusClassName="rounded-2xl" />
      )}
    </div>
  );
}
