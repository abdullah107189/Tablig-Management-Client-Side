/* eslint-disable @typescript-eslint/no-explicit-any */
// components/locale-provider.tsx
"use client";

import { createContext, useContext, ReactNode } from "react";

interface Dictionary {
  [key: string]: any;
}

interface LocaleContextType {
  locale: "en" | "bn";
  t: (key: string) => string;
  isBangla: boolean;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({
  children,
  locale,
  dictionary,
}: {
  children: ReactNode;
  locale: "en" | "bn";
  dictionary: Dictionary;
}) {
  const isBangla = locale === "bn";

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = dictionary;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    return value || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, t, isBangla }}>
      <div className={isBangla ? "font-bengali" : "font-sans"}>{children}</div>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
