import { Clock3, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { siteConfig, telUrl, type Locale } from "../shared/config";
import { Wave } from "../shared/decor";
import { dict } from "../shared/i18n";
import { InstagramIcon, WhatsAppIcon } from "../shared/icons";
import { MapFrame } from "../shared/map-frame";
import { Eyebrow } from "../shared/ui";

export function MobileContacts({ locale }: { locale: Locale }) {
  const t = dict[locale].contacts;

  const actions = [
    { icon: WhatsAppIcon, label: "WhatsApp", href: siteConfig.whatsappUrl, external: true, tone: "bg-brand text-white" },
    { icon: Phone, label: t.call, href: telUrl, external: false, tone: "bg-white text-brand-deep" },
    { icon: InstagramIcon, label: siteConfig.instagram.handle, href: siteConfig.instagram.url, external: true, tone: "bg-white text-brand-deep" },
    { icon: Navigation, label: t.route, href: siteConfig.twoGis.route, external: true, tone: "bg-sun text-ink" },
  ];

  return (
    <div>
      <Wave fill="#EAF5E9" />
      <div className="bg-mint py-5">
        <div className="wrap-m">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="title-section-m mt-1.5">{t.title}</h2>

          {/* На телефоне сначала действия: позвонить или написать можно одним касанием */}
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {actions.map(({ icon: Icon, label, href, external, tone }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`flex min-h-13 items-center gap-2 rounded-2xl px-3 py-2 text-[0.88rem] leading-tight font-extrabold shadow-soft ${tone}`}
                >
                  <Icon className="size-5 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 break-words">{label}</span>
                </a>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-2.5 text-[0.92rem] leading-snug">
            <div className="flex gap-2.5">
              <dt>
                <MapPin className="mt-0.5 size-5 text-brand" aria-hidden="true" />
                <span className="sr-only">{t.address}</span>
              </dt>
              <dd className="font-bold">{siteConfig.address[locale]}</dd>
            </div>
            <div className="flex gap-2.5">
              <dt>
                <Phone className="mt-0.5 size-5 text-brand" aria-hidden="true" />
                <span className="sr-only">{t.phone}</span>
              </dt>
              <dd>
                <a href={telUrl} className="font-extrabold text-brand-deep">
                  {siteConfig.phone.display}
                </a>
              </dd>
            </div>
            <div className="flex gap-2.5">
              <dt>
                <Clock3 className="mt-0.5 size-5 text-brand" aria-hidden="true" />
                <span className="sr-only">{t.hours}</span>
              </dt>
              <dd className="font-bold">{siteConfig.hours.label[locale]}</dd>
            </div>
          </dl>

          <MapFrame title={t.mapTitle} className="mt-4 h-72 rounded-[2rem_1rem_2rem_1rem] shadow-soft" />
          <a href={siteConfig.twoGis.card} target="_blank" rel="noopener noreferrer" className="mt-2.5 flex items-center justify-center gap-1.5 py-1 text-sm font-extrabold text-brand-deep">
            {t.open2gis}
            <ExternalLink className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
