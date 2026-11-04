import { Clock3, ExternalLink } from "lucide-react";
import { siteConfig } from "./config";

/** Пока ссылки на документы нет, показывает неактивную кнопку. Ссылка задаётся в config.ts. */
export function DocumentsAction({ soon, open, className = "" }: { soon: string; open: string; className?: string }) {
  if (siteConfig.documentsUrl) {
    return (
      <a href={siteConfig.documentsUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${className}`}>
        {open}
        <ExternalLink className="size-4" aria-hidden="true" />
      </a>
    );
  }
  return (
    <button type="button" disabled className={`btn cursor-not-allowed bg-white/80 text-ink ${className}`}>
      <Clock3 className="size-4.5 text-brand" aria-hidden="true" />
      {soon}
    </button>
  );
}
