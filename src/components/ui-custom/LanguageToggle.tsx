"use client";

import { useLang } from "@/components/providers/language-provider";

export function LanguageToggle() {
  const { lang, toggleLang } = useLang();
  return (
    <button
      type="button"
      onClick={toggleLang}
      aria-label="Toggle language"
      className="relative inline-flex items-center rounded-full border border-line bg-white/40 p-1 font-mono text-[12px] font-semibold uppercase tracking-[0.04em] dark:bg-white/[0.04]"
    >
      <span
        aria-hidden="true"
        className="absolute bottom-1 left-1 top-1 w-[calc(50%-4px)] rounded-full shadow-[0_2px_8px_-2px_oklch(0.36_0.13_260/0.5)]"
        style={{
          background: "var(--primary-grad)",
          transform: lang === "en" ? "translateX(100%)" : "translateX(0)",
          transition: "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
      <span
        className={`relative z-[1] rounded-full px-[10px] py-[5px] transition-colors duration-300 ${
          lang === "de" ? "text-white" : "text-fg-mute"
        }`}
      >
        DE
      </span>
      <span
        className={`relative z-[1] rounded-full px-[10px] py-[5px] transition-colors duration-300 ${
          lang === "en" ? "text-white" : "text-fg-mute"
        }`}
      >
        EN
      </span>
    </button>
  );
}
