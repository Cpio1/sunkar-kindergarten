"use client";

import { localePath, locales, type Locale } from "./config";

const labels: Record<Locale, string> = { kk: "ҚАЗ", ru: "РУС" };

export function LanguageSwitch({ locale, label, tone = "light" }: { locale: Locale; label: string; tone?: "light" | "dark" }) {
  return (
    <nav aria-label={label} className={`flex shrink-0 rounded-full p-1 text-[0.8rem] font-extrabold ${tone === "dark" ? "bg-brand-deep" : "bg-mint"}`}>
      {locales.map((code) => {
        const active = code === locale;
        return (
          // Обычная ссылка: у языков разные корневые layout, а раздел на странице нужно сохранить.
          <a
            key={code}
            href={localePath(code)}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            onClick={(event) => {
              event.currentTarget.hash = window.location.hash;
            }}
            className={`grid h-8 min-w-11 place-items-center rounded-full px-2 transition-colors ${
              active
                ? "bg-sun text-ink"
                : tone === "dark"
                  ? "text-mint hover:text-white"
                  : "text-brand-deep hover:bg-mint-strong"
            }`}
          >
            {labels[code]}
          </a>
        );
      })}
    </nav>
  );
}
