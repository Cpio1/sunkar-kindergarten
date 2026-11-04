import type { Locale } from "../shared/config";
import { groups } from "../shared/content-data";
import { Cloud, Wave } from "../shared/decor";
import { dict } from "../shared/i18n";
import { Eyebrow } from "../shared/ui";

const offsets = ["", "translate-y-7", "-translate-y-2"];

export function Groups({ locale }: { locale: Locale }) {
  const t = dict[locale].groups;

  return (
    <div>
      <Wave fill="#EAF5E9" />
      <div className="relative overflow-clip bg-mint pt-6 pb-16">
        <Cloud className="anim-drift absolute top-6 right-[6%] w-28" />
        <div className="wrap">
          <div className="reveal flex items-end justify-between gap-10">
            <div>
              <Eyebrow>{t.eyebrow}</Eyebrow>
              <h2 className="title-section mt-2">{t.title}</h2>
            </div>
            <p className="max-w-sm pr-28 text-[0.92rem] leading-snug text-ink-soft xl:pr-20">{t.note}</p>
          </div>

          <ul className="mt-8 grid grid-cols-3 gap-6">
            {groups.map(({ id, icon: Icon, card, badge, blob, tag }, index) => {
              const item = t.items[id];
              return (
                <li key={id} className={`reveal ${offsets[index]}`}>
                  <article className={`lift relative h-full overflow-hidden rounded-[2.2rem_2.2rem_2.2rem_1rem] p-6 shadow-soft ${card}`}>
                    <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute -top-8 -right-8 size-40">
                      <path fill={blob} d="M51 6c20-1 38 13 42 33 4 21-5 43-25 52C48 100 24 94 12 76 0 58 3 33 18 19 27 11 39 7 51 6Z" />
                    </svg>
                    <div className="relative flex items-start justify-between">
                      <span className={`rounded-full px-3.5 py-1 text-[0.95rem] font-extrabold ${badge}`}>{item.age}</span>
                      <Icon className="mt-1 mr-1 size-10" strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <h3 className="relative mt-5 font-display text-[1.35rem] leading-tight font-semibold">{item.name}</h3>
                    <p className="relative mt-2 leading-snug opacity-90">{item.text}</p>
                    <ul className="relative mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((label) => (
                        <li key={label} className={`rounded-full px-2.5 py-0.5 text-[0.8rem] font-bold ${tag}`}>
                          {label}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Wave fill="#EAF5E9" flip />
    </div>
  );
}
