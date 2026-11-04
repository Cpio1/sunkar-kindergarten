import { FolderOpen } from "lucide-react";
import type { Locale } from "../shared/config";
import { DocumentsAction } from "../shared/documents-action";
import { dict } from "../shared/i18n";

export function MobileDocuments({ locale }: { locale: Locale }) {
  const t = dict[locale].documents;

  return (
    <div className="wrap-m pt-1 pb-6">
      <div className="rounded-[1rem_2.25rem_1rem_2.25rem] bg-sun p-4 shadow-soft">
        <div className="flex items-start gap-3">
          <span className="grid size-12 shrink-0 place-items-center rounded-[46%_54%_52%_48%/56%_46%_54%_44%] bg-milk text-brand">
            <FolderOpen className="size-6" strokeWidth={1.8} aria-hidden="true" />
          </span>
          <div>
            <h2 className="title-section-m">{t.title}</h2>
            <p className="mt-1 text-[0.92rem] leading-snug">{t.description}</p>
          </div>
        </div>
        <DocumentsAction soon={t.soon} open={t.open} className="mt-3 w-full text-[0.95rem]" />
      </div>
    </div>
  );
}
