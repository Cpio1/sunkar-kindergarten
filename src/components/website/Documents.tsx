import { FileText, FolderOpen } from "lucide-react";
import type { Locale } from "../shared/config";
import { DocumentsAction } from "../shared/documents-action";
import { dict } from "../shared/i18n";

export function Documents({ locale }: { locale: Locale }) {
  const t = dict[locale].documents;

  return (
    <div className="wrap pt-4 pb-14">
      <div className="reveal mx-auto flex max-w-5xl items-center gap-8 rounded-[1.5rem_3.5rem_1.5rem_3.5rem] bg-sun px-10 py-8 shadow-soft">
        <div className="relative grid size-24 shrink-0 place-items-center rounded-[46%_54%_52%_48%/56%_46%_54%_44%] bg-milk text-brand">
          <FolderOpen className="size-11" strokeWidth={1.7} aria-hidden="true" />
          <FileText className="anim-bob absolute -top-1 -right-1 size-7 text-brand-deep" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="title-section">{t.title}</h2>
          <p className="mt-1 text-[1.05rem] leading-snug">{t.description}</p>
        </div>
        <DocumentsAction soon={t.soon} open={t.open} className="shrink-0" />
      </div>
    </div>
  );
}
