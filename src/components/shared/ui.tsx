import Image from "next/image";
import type { ReactNode } from "react";
import { Falcon, Star } from "./decor";
import type { ImageFile } from "./media-types";

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-sm font-extrabold tracking-wide text-brand ${className}`}>
      <Star className="size-4" />
      {children}
    </p>
  );
}

/** Логотип: загруженный logo.* или текстовый знак с соколом, пока файла нет. */
export function Logo({
  name,
  logo,
  href,
  invert = false,
  compact = false,
}: {
  name: string;
  logo: ImageFile | null;
  href: string;
  invert?: boolean;
  compact?: boolean;
}) {
  const [first, ...rest] = name.split(" ");
  return (
    <a href={href} aria-label={name} className="group flex shrink-0 items-center gap-2.5">
      {logo ? (
        <Image src={logo.src} alt="" width={logo.width} height={logo.height} className="h-11 w-auto" />
      ) : (
        <span className={`relative grid size-11 place-items-center rounded-[46%_54%_52%_48%/56%_46%_54%_44%] ${invert ? "bg-milk" : "bg-brand"}`}>
          <span className="absolute top-1.5 right-1.5 size-2.5 rounded-full bg-sun" />
          <Falcon className="size-8 transition-transform duration-300 group-hover:-translate-y-0.5" fill={invert ? "#217A60" : "#FFFDF6"} />
        </span>
      )}
      <span className={`flex flex-col font-display leading-[1.08] font-semibold ${invert ? "text-milk" : "text-ink"} ${compact ? "text-[0.92rem]" : "text-[1.02rem]"}`}>
        <span>{first}</span>
        <span className={`font-body text-[0.72rem] font-bold tracking-wide ${invert ? "text-mint" : "text-brand"}`}>{rest.join(" ")}</span>
      </span>
    </a>
  );
}
