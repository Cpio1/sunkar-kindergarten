export type ImageFile = { kind: "image"; src: string; width: number; height: number };
export type VideoFile = { kind: "video"; src: string };
export type MediaFile = ImageFile | VideoFile;

export type SiteMedia = {
  /** main-page.*: главное фото */
  hero: ImageFile | null;
  /** hero2.*, hero3.*: маленькие фото рядом с главным */
  heroSide: [ImageFile | null, ImageFile | null];
  /** main-page2.*: фото или видео в разделе «О нас» */
  about: MediaFile | null;
  /** logo.*: логотип вместо текстового знака */
  logo: ImageFile | null;
  /** image1.*, image2.*, …: галерея в порядке номеров */
  gallery: ImageFile[];
};
