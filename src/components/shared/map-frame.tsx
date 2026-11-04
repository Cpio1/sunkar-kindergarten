import { siteConfig } from "./config";

/** Официальный виджет 2ГИС с карточкой детского сада. Загружается, только когда дошли до карты. */
export function MapFrame({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-mint-strong ${className}`}>
      <iframe
        src={siteConfig.twoGis.mapWidget}
        title={title}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 size-full border-0"
      />
    </div>
  );
}
