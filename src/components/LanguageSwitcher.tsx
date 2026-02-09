"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter, routing } from "@/i18n/routing"; // routing theke locales nibo
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function changeLocale(nextLocale: "en" | "bn" | "ar") {
    startTransition(() => {
      // router.replace ekhon routing configuration onusare kaj korbe
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="relative inline-block">
      <select
        value={locale}
        disabled={isPending}
        onChange={(e) => changeLocale(e.target.value as "en" | "bn" | "ar")}
        className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 text-sm font-medium shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 transition-all cursor-pointer pr-8"
      >
        {routing.locales.map((l) => (
          <option key={l} value={l} className="text-black">
            {l === "en" ? "🇺🇸 English" : l === "bn" ? "🇧🇩 বাংলা" : "🇸🇦 العربية"}
          </option>
        ))}
      </select>

      {/* Custom arrow icon for better look */}
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
