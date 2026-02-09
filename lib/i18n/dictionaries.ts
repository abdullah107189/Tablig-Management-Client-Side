// lib/i18n/dictionaries.ts
const dictionaries = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  bn: () => import("@/locales/bn.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "bn") =>
  dictionaries[locale]();
