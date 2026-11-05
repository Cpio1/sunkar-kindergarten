/**
 * Сұңқар Балабақшасы: все данные детского сада хранятся здесь.
 * Измените значение в этом файле, и оно обновится в обеих версиях и на обоих языках.
 */

export const locales = ["kk", "ru"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "kk";
export type Localized = Record<Locale, string>;

const firmId = "70000001035985294";
const geo = { lat: 43.224043, lon: 76.796668 };

export const siteConfig = {
  name: { kk: "Сұңқар Балабақшасы", ru: "Сұңқар Балабақшасы" } as Localized,

  address: {
    kk: "Қазақстан, Алматы, Наурызбай ауданы, Қалқаман-2 шағынауданы, Айбергенов көшесі, 92",
    ru: "Казахстан, Алматы, Наурызбайский район, мкр. Қалқаман-2, улица Айбергенова, 92",
  } as Localized,
  addressShort: {
    kk: "Айбергенов көшесі, 92",
    ru: "улица Айбергенова, 92",
  } as Localized,
  addressParts: {
    street: "улица Айбергенова, 92",
    locality: "Алматы",
    region: "Наурызбайский район, мкр. Қалқаман-2",
    country: "KZ",
  },
  geo,

  phone: { display: "+7 702 968 55 55", tel: "+77029685555" },
  whatsappUrl: "https://wa.me/77029685555",
  instagram: { handle: "@sunkar_centr", url: "https://www.instagram.com/sunkar_centr/" },

  hours: {
    label: { kk: "Дүйсенбі–жұма, 07:00–18:30", ru: "Понедельник–пятница, 07:00–18:30" } as Localized,
    opens: "07:00",
    closes: "18:30",
  },

  twoGis: {
    card: `https://2gis.kz/almaty/firm/${firmId}`,
    gallery: `https://2gis.kz/almaty/gallery/firm/${firmId}/photoId/30258560224212111`,
    route: `https://2gis.kz/almaty/directions/points/%7C${geo.lon}%2C${geo.lat}%3B${firmId}`,
    mapWidget: `https://widgets.2gis.com/widget?type=firmsonmap&options=${encodeURIComponent(
      JSON.stringify({ pos: { lat: geo.lat, lon: geo.lon, zoom: 16 }, opt: { city: "almaty" }, org: firmId }),
    )}`,
  },

  /** Ссылка на Google Drive. Пока она пустая, кнопка показывает «Жақында қолжетімді болады». */
  documentsUrl: "https://drive.google.com/drive/folders/1Jwugy90C3UOd216fEQnMMAPqQWL0r2Fk",

  /** Сколько фотографий видно сразу. Кнопка «Көбірек көрсету» открывает все остальные. */
  galleryInitial: 6,

  /** Какая часть главного фото важнее всего, если оно не помещается в рамку (CSS object-position). */
  heroFocus: "50% 62%",
  aboutFocus: "50% 70%",
};

export const telUrl = `tel:${siteConfig.phone.tel}`;

export const localePath = (locale: Locale) => (locale === defaultLocale ? "/" : `/${locale}`);

export const siteUrl = (() => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
})();

export const sectionIds = ["home", "about", "groups", "meals", "gallery", "documents", "contacts"] as const;
export type SectionId = (typeof sectionIds)[number];
