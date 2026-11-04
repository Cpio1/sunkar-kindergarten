import { Montserrat_Alternates, Nunito } from "next/font/google";
import type { ReactNode } from "react";
import "@/app/globals.css";
import type { Locale } from "./config";

// Оба шрифта проверены по таблице символов: в них есть ә ғ қ ң ө ұ ү һ і и заглавные формы.
const display = Montserrat_Alternates({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["500", "700", "800"],
  variable: "--font-body-face",
  display: "swap",
});

export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
