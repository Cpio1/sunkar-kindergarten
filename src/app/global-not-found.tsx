import type { Metadata } from "next";
import "./globals.css";
import { dict } from "@/components/shared/i18n";

export const metadata: Metadata = { title: "404 — Сұңқар Балабақшасы", robots: { index: false } };

export default function GlobalNotFound() {
  const kk = dict.kk.notFound;
  const ru = dict.ru.notFound;
  return (
    <html lang="kk">
      <body className="grid min-h-svh place-items-center bg-milk p-6 text-center font-sans text-ink">
        <main className="max-w-md">
          <p className="text-6xl font-extrabold text-brand">404</p>
          <h1 className="mt-4 text-2xl font-extrabold">{kk.title}</h1>
          <p className="mt-2">{kk.text}</p>
          <p className="mt-4 text-sm opacity-80" lang="ru">
            {ru.title}. {ru.text}
          </p>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="btn btn-primary mt-6">
            {kk.home}
          </a>
        </main>
      </body>
    </html>
  );
}
