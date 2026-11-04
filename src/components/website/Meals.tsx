"use client";

import type { Locale } from "../shared/config";
import { Cloud, Star } from "../shared/decor";
import { dict } from "../shared/i18n";
import { meals } from "../shared/meals-data";
import { useMealCycle } from "../shared/use-meal-cycle";

/** Точки лежат на дуге из SVG ниже: x = 40 + 920t, y = 270 − 800t(1 − t). */
const points = [
  { left: "11.4%", top: "70.3%" },
  { left: "30.7%", top: "35%" },
  { left: "50%", top: "23.3%" },
  { left: "69.3%", top: "35%" },
  { left: "88.6%", top: "70.3%" },
];

export function Meals({ locale }: { locale: Locale }) {
  const t = dict[locale].meals;
  const { ref, active, setActive, setPaused } = useMealCycle(meals.length);

  return (
    <div className="wrap py-12">
      <div ref={ref} className="reveal relative overflow-hidden rounded-[3.5rem_3.5rem_3.5rem_1.5rem] bg-brand px-10 pt-8 pb-9 text-white shadow-lift">
        <Cloud className="anim-drift absolute top-7 right-10 w-24 opacity-20" />

        <div className="relative flex items-start justify-between gap-10">
          <div>
            <p className="flex items-center gap-2 text-sm font-extrabold tracking-wide text-sun">
              <Star className="size-4" />
              {t.eyebrow}
            </p>
            <h2 className="title-section mt-2 max-w-xl">{t.title}</h2>
          </div>
          <div className="max-w-sm pt-7 pr-20 text-[0.98rem] leading-snug text-mint">
            <p>{t.subtitle}</p>
          </div>
        </div>

        <div className="relative mx-auto mt-9 aspect-[1000/270] w-full max-w-5xl">
          <svg viewBox="0 0 1000 300" fill="none" aria-hidden="true" className="absolute inset-0 size-full">
            <path d="M40 270Q500 -130 960 270" stroke="#FFD66B" strokeOpacity="0.65" strokeWidth="3" strokeLinecap="round" strokeDasharray="2 13" />
          </svg>
          <ol className="absolute inset-0" onMouseLeave={() => setPaused(false)}>
            {meals.map(({ id, icon: Icon }, index) => {
              const isActive = active === index;
              return (
                <li
                  key={id}
                  style={points[index]}
                  onMouseEnter={() => {
                    setPaused(true);
                    setActive(index);
                  }}
                  className="absolute flex w-44 -translate-x-1/2 -translate-y-9 flex-col items-center text-center"
                >
                  <span
                    className={`grid size-[4.5rem] place-items-center rounded-full transition-all duration-500 ${
                      isActive ? "scale-110 bg-sun text-ink shadow-[0_0_0_10px_rgba(255,214,107,0.25)]" : "bg-milk text-brand"
                    }`}
                  >
                    <Icon className="size-8" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="mt-3 text-[0.8rem] font-bold text-mint">{t.orderLabel(index + 1)}</span>
                  <span className="font-display text-[1.02rem] leading-tight font-medium">{t.items[id]}</span>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="relative mt-20 text-center text-[0.86rem] text-mint">{t.note}</p>
      </div>
    </div>
  );
}
