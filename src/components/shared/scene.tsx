import { Blocks, BookOpen, Music2, Palette, Sprout, Volleyball, type LucideIcon } from "lucide-react";
import { Cloud, Star } from "./decor";

export type SceneVariant = "building" | "play" | "art" | "books" | "garden" | "music" | "ball";

const iconScenes: Record<Exclude<SceneVariant, "building">, { icon: LucideIcon; bg: string; blob: string; ink: string }> = {
  play: { icon: Blocks, bg: "bg-sun-soft", blob: "#FFD66B", ink: "text-ink" },
  art: { icon: Palette, bg: "bg-peach", blob: "#FFFDF6", ink: "text-brand" },
  books: { icon: BookOpen, bg: "bg-mint", blob: "#CFE8D0", ink: "text-brand-deep" },
  garden: { icon: Sprout, bg: "bg-sky", blob: "#FFFDF6", ink: "text-brand" },
  music: { icon: Music2, bg: "bg-mint-strong", blob: "#EAF5E9", ink: "text-brand-deep" },
  ball: { icon: Volleyball, bg: "bg-sun-soft", blob: "#FFE3CF", ink: "text-brand-deep" },
};

/** Иллюстрация на месте ещё не загруженной фотографии. Это рисунок, он не выдаётся за снимок. */
export function Scene({ variant, className = "" }: { variant: SceneVariant; className?: string }) {
  if (variant === "building") return <BuildingScene className={className} />;
  const { icon: Icon, bg, blob, ink } = iconScenes[variant];
  return (
    <div aria-hidden="true" className={`relative flex size-full items-center justify-center overflow-hidden ${bg} ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute size-[78%] max-h-[92%]">
        <path fill={blob} d="M51 6c20-1 38 13 42 33 4 21-5 43-25 52C48 100 24 94 12 76 0 58 3 33 18 19 27 11 39 7 51 6Z" />
      </svg>
      <Icon strokeWidth={1.6} className={`relative size-[32%] max-h-[56%] ${ink}`} />
      <Star className="absolute top-[12%] right-[14%] size-[12%]" fill="#217A60" />
    </div>
  );
}

function BuildingScene({ className }: { className: string }) {
  return (
    <div aria-hidden="true" className={`relative size-full overflow-hidden bg-sky ${className}`}>
      <Cloud className="anim-drift absolute top-[12%] right-[10%] w-[24%]" />
      <Cloud className="absolute top-[30%] left-[33%] w-[13%] opacity-80" />
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[76%] w-full">
        <path fill="#CFE8D0" d="M0 196c70-40 140-52 214-32 72 20 124 14 186-12v148H0Z" />
        <path fill="#217A60" d="M0 244c88-26 180-28 268-10 52 10 96 6 132-6v72H0Z" />
        {/* Здание условное: это рисунок, а не изображение настоящего корпуса. */}
        <rect x="110" y="122" width="180" height="118" rx="10" fill="#FFFDF6" />
        <path fill="#FFD66B" d="M96 128 200 58l104 70c3 3 1 8-3 8H99c-4 0-6-5-3-8Z" />
        <circle cx="200" cy="102" r="14" fill="#FFFDF6" />
        <path fill="#217A60" d="M191 106c3-6 8-9 18-10-2 4-4 6-7 8 2 0 4 1 6 2-4 2-7 2-9 1-1 2-3 4-6 5 1-2 1-4 1-5l-3-1Z" />
        <rect x="178" y="178" width="44" height="62" rx="22" fill="#217A60" />
        <rect x="128" y="154" width="36" height="36" rx="10" fill="#DCF0F3" />
        <rect x="236" y="154" width="36" height="36" rx="10" fill="#DCF0F3" />
        <circle cx="66" cy="214" r="24" fill="#217A60" />
        <rect x="62" y="226" width="8" height="26" rx="4" fill="#175A47" />
        <circle cx="340" cy="208" r="28" fill="#2E9275" />
        <rect x="336" y="224" width="8" height="30" rx="4" fill="#175A47" />
      </svg>
    </div>
  );
}
