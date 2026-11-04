import { Clock3, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig, telUrl, type Locale } from "../shared/config";
import { Wave } from "../shared/decor";
import { dict } from "../shared/i18n";
import { InstagramIcon, WhatsAppIcon } from "../shared/icons";
import { MapFrame } from "../shared/map-frame";
import { Eyebrow } from "../shared/ui";

export function Contacts({ locale }: { locale: Locale }) {
  const t = dict[locale].contacts;

  const rows = [
    { icon: MapPin, label: t.address, value: siteConfig.address[locale] },
    { icon: Phone, label: t.phone, value: siteConfig.phone.display, href: telUrl },
    { icon: Clock3, label: t.hours, value: siteConfig.hours.label[locale] },
    { icon: InstagramIcon, label: t.instagram, value: siteConfig.instagram.handle, href: siteConfig.instagram.url, external: true },
  ];

  return (
    <div>
      <Wave fill="#EAF5E9" />
      <div className="bg-mint pt-4 pb-12">
        <div className="wrap grid grid-cols-[1fr_1.25fr] items-center gap-10">
          <div className="reveal">
            <Eyebrow>{t.eyebrow}</Eyebrow>
            <h2 className="title-section mt-2">{t.title}</h2>

            <dl className="mt-5 space-y-3">
              {rows.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="flex items-start gap-3">
                  <dt className="contents">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand shadow-soft">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="sr-only">{label}</span>
                  </dt>
                  <dd className="min-w-0 leading-snug">
                    <span aria-hidden="true" className="block text-[0.8rem] font-bold text-ink-soft">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="font-extrabold text-brand-deep hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-bold">{value}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <WhatsAppIcon />
                {t.whatsapp}
              </a>
              <a href={siteConfig.twoGis.route} target="_blank" rel="noopener noreferrer" className="btn btn-sun">
                <Navigation className="size-5" aria-hidden="true" />
                {t.route}
              </a>
            </div>
          </div>

          <div className="reveal relative">
            <MapFrame title={t.mapTitle} className="h-[min(30rem,calc(100svh-11rem))] min-h-80 rounded-[3rem_1.5rem_3rem_1.5rem] shadow-lift" />
            <a
              href={siteConfig.twoGis.card}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-end gap-1.5 text-sm font-extrabold text-brand-deep hover:underline"
            >
              {t.open2gis}
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
