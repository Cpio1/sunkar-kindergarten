import { BookOpenText, Blocks, HeartHandshake, MessagesSquare, Palette, Sprout, BookOpen, type LucideIcon } from "lucide-react";
import type { GroupId, PillarId } from "./i18n";

export const pillars: { id: PillarId; icon: LucideIcon; tint: string }[] = [
  { id: "upbringing", icon: HeartHandshake, tint: "bg-peach text-brand-deep" },
  { id: "learning", icon: BookOpenText, tint: "bg-mint-strong text-brand-deep" },
  { id: "communication", icon: MessagesSquare, tint: "bg-sky text-brand-deep" },
  { id: "creativity", icon: Palette, tint: "bg-sun-soft text-brand-deep" },
  { id: "growth", icon: Sprout, tint: "bg-mint text-brand" },
];

export const groups: { id: GroupId; icon: LucideIcon; card: string; badge: string; blob: string; tag: string }[] = [
  { id: "small", icon: Blocks, card: "bg-sun-soft", badge: "bg-sun text-ink", blob: "#FFD66B", tag: "bg-white/70 text-ink" },
  { id: "middle", icon: Palette, card: "bg-peach", badge: "bg-white text-ink", blob: "#FFFDF6", tag: "bg-white/70 text-ink" },
  { id: "senior", icon: BookOpen, card: "bg-brand text-white", badge: "bg-sun text-ink", blob: "#2E9275", tag: "bg-white/15 text-white" },
];
