"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { CONTENT, type Content, type Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "de",
  setLang: () => {},
  toggleLang: () => {},
  t: CONTENT.de,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = (typeof document !== "undefined"
      ? (document.documentElement.lang as Lang | undefined)
      : undefined) ||
      (typeof localStorage !== "undefined"
        ? (localStorage.getItem("pf-lang") as Lang | null)
        : null);
    if (stored === "de" || stored === "en") {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("pf-lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggleLang = () => setLangState((prev) => (prev === "de" ? "en" : "de"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
