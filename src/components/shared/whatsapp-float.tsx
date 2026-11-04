import { siteConfig } from "./config";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat({ label }: { label: string }) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="anim-ping fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 grid size-14 place-items-center rounded-full bg-[#128C4B] text-white shadow-lift transition-transform hover:scale-105 lg:right-6 lg:bottom-6 lg:size-15"
    >
      <WhatsAppIcon className="size-7 lg:size-8" />
    </a>
  );
}
