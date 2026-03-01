"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguagePicker() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: string) {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale("fr")}
        disabled={isPending}
        className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all ${
          locale === "fr"
            ? "bg-brand-blue text-white ring-2 ring-brand-blue-dark"
            : "text-brand-blue-dark hover:bg-brand-sky/30"
        }`}
        aria-label="Français"
      >
        🇫🇷 <span className="hidden sm:inline">FR</span>
      </button>
      <button
        onClick={() => switchLocale("en")}
        disabled={isPending}
        className={`flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-all ${
          locale === "en"
            ? "bg-brand-blue text-white ring-2 ring-brand-blue-dark"
            : "text-brand-blue-dark hover:bg-brand-sky/30"
        }`}
        aria-label="English"
      >
        🇬🇧 <span className="hidden sm:inline">EN</span>
      </button>
    </div>
  );
}
