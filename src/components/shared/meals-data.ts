import { Apple, Cookie, Soup, Sunrise, Sunset, type LucideIcon } from "lucide-react";
import type { MealId } from "./i18n";

/** Значки только обозначают время дня и тему: это не состав меню. */
export const meals: { id: MealId; icon: LucideIcon }[] = [
  { id: "breakfast", icon: Sunrise },
  { id: "brunch", icon: Apple },
  { id: "lunch", icon: Soup },
  { id: "snack", icon: Cookie },
  { id: "dinner", icon: Sunset },
];
