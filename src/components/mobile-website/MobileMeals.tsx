"use client";

import type { Locale } from "../shared/config";
import { Star, Sun } from "../shared/decor";
import { dict } from "../shared/i18n";
import { meals } from "../shared/meals-data";
import { useMealCycle } from "../shared/use-meal-cycle";

/** Дуга дня здесь развёрнута вертикально и повторяет форму десктопной дуги. */
const indents = ["ml-0", "ml-7", "ml-11", "ml-7", "ml-0"];

export function MobileMeals({ locale }: { locale: Locale }) {
  const t = dict[locale].meals;
  const { ref, active } = useMealCycle(meals.length);

  return (
    <div className="wrap-m py-5">
      <div ref={ref} className="relative overflow-hidden rounded-[2.5rem_2.5rem_2.5rem_1rem] bg-brand p-5 text-white shadow-soft">
        <Sun className="absolute -top-7 -right-7 w-28 opacity-90" />
        <p className="flex items-center gap-1.5 text-sm font-extrabold text-sun">
          <Star className="size-4" />
          {t.eyebrow}
        </p>
        <h2 className="title-section-m mt-1.5 pr-14">{t.title}</h2>

        <ol className="mt-4 space-y-1.5">
          {meals.map(({ id, icon: Icon }, index) => {
            const isActive = active === index;
            return (
              <li key={id} className={`flex items-center gap-3 ${indents[index]}`}>
                <span className={`grid size-11 shrink-0 place-items-center rounded-full transition-colors duration-500 ${isActive ? "bg-sun text-ink" : "bg-milk text-brand"}`}>
                  <Icon className="size-5" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="font-display text-[0.94rem] leading-tight font-medium">{t.items[id]}</span>
              </li>
            );
          })}
        </ol>

        <p className="mt-4 text-[0.8rem] leading-snug text-mint">{t.note}</p>
      </div>
    </div>
  );
}
