import type { Locale } from "../shared/config";
import { groups } from "../shared/content-data";
import { Wave } from "../shared/decor";
import { dict } from "../shared/i18n";
import { Eyebrow } from "../shared/ui";

const shapes = ["rounded-[1.75rem_1.75rem_1.75rem_0.75rem]", "rounded-[1.75rem_0.75rem_1.75rem_1.75rem]", "rounded-[0.75rem_1.75rem_1.75rem_1.75rem]"];
const insets = ["mr-5", "ml-5", "mr-5"];

export function MobileGroups({ locale }: { locale: Locale }) {
  const t = dict[locale].groups;

  return (
    <div>
      <Wave fill="#EAF5E9" />
      <div className="bg-mint py-5">
        <div className="wrap-m">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="title-section-m mt-1.5">{t.title}</h2>

          {/* Смещённая лента вместо трёх больших карточек */}
          <ul className="mt-4 space-y-2.5">
            {groups.map(({ id, icon: Icon, card, badge }, index) => {
              const item = t.items[id];
              return (
                <li key={id} className={`reveal flex items-start gap-3 p-3.5 shadow-soft ${card} ${shapes[index]} ${insets[index]}`}>
                  <span className={`grid size-12 shrink-0 place-items-center rounded-[46%_54%_52%_48%/56%_46%_54%_44%] ${badge}`}>
                    <Icon className="size-6" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <h3 className="font-display text-[1rem] leading-tight font-semibold">{item.name}</h3>
                      <span className="text-[0.85rem] font-extrabold opacity-90">{item.age}</span>
                    </div>
                    <p className="mt-1 text-[0.88rem] leading-snug opacity-90">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-[0.82rem] leading-snug text-ink-soft">{t.note}</p>
        </div>
      </div>
      <Wave fill="#EAF5E9" flip />
    </div>
  );
}
