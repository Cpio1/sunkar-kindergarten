"use client";

import { Menu, Phone, X } from "lucide-react";
import { useRef, useState } from "react";
import { sectionIds, siteConfig, telUrl, type Locale } from "../shared/config";
import { Falcon, Star } from "../shared/decor";
import { dict } from "../shared/i18n";
import { InstagramIcon, WhatsAppIcon } from "../shared/icons";
import { LanguageSwitch } from "../shared/language-switch";
import type { ImageFile } from "../shared/media-types";
import { Logo } from "../shared/ui";

export function MobileHeader({ locale, logo }: { locale: Locale; logo: ImageFile | null }) {
  const t = dict[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    dialog.current?.showModal();
    document.documentElement.style.overflow = "hidden";
    setOpen(true);
  };
  // Блокировка прокрутки снимается сразу, чтобы переход к разделу по якорю сработал.
  const hide = () => {
    document.documentElement.style.overflow = "";
    dialog.current?.close();
  };
  // Срабатывает и при закрытии клавишей Esc.
  const onClosed = () => {
    document.documentElement.style.overflow = "";
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-milk/92 backdrop-blur-md lg:hidden">
      <div className="wrap-m flex h-16 items-center justify-between gap-2">
        <Logo name={siteConfig.name[locale]} logo={logo} href="#home" compact />
        <div className="flex items-center gap-2">
          <LanguageSwitch locale={locale} label={t.langLabel} />
          <button
            type="button"
            onClick={show}
            aria-label={t.menu.open}
            aria-expanded={open}
            className="grid size-11 place-items-center rounded-full bg-brand text-white"
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <dialog
        ref={dialog}
        onClose={onClosed}
        aria-label={t.menu.title}
        className="sheet fixed inset-0 m-0 size-full max-h-none max-w-none overflow-y-auto bg-transparent p-0"
      >
        {open && (
          <div className="anim-sheet relative flex min-h-full flex-col overflow-hidden bg-brand px-5 pt-3 pb-6 text-white">
            <svg viewBox="0 0 100 100" aria-hidden="true" className="absolute -right-24 -bottom-28 size-96">
              <path fill="#2E9275" d="M51 6c20-1 38 13 42 33 4 21-5 43-25 52C48 100 24 94 12 76 0 58 3 33 18 19 27 11 39 7 51 6Z" />
            </svg>
            <Falcon className="anim-soar absolute right-7 bottom-40 size-24" fill="#FFD66B" />
            <Star className="absolute top-24 right-8 size-6" />

            <div className="relative flex items-center justify-between">
              <LanguageSwitch locale={locale} label={t.langLabel} tone="dark" />
              <button type="button" onClick={hide} aria-label={t.menu.close} autoFocus className="grid size-11 place-items-center rounded-full bg-sun text-ink">
                <X className="size-6" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label={t.menu.title} className="relative mt-6 flex-1">
              <ul className="space-y-0.5">
                {sectionIds.map((id, index) => (
                  <li key={id} className="anim-fade-up" style={{ animationDelay: `${index * 40}ms` }}>
                    <a href={`#${id}`} onClick={hide} className="block py-2 font-display text-[1.45rem] leading-tight font-medium">
                      {t.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="relative mt-5 grid grid-cols-[1fr_auto_auto] gap-2.5">
              <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sun px-3">
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a href={telUrl} aria-label={t.contacts.call} className="grid size-12 place-items-center rounded-full bg-milk text-brand">
                <Phone className="size-5" aria-hidden="true" />
              </a>
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" aria-label={t.contacts.instagram} className="grid size-12 place-items-center rounded-full bg-milk text-brand">
                <InstagramIcon />
              </a>
            </div>
          </div>
        )}
      </dialog>
    </header>
  );
}
