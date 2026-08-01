import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang, type Dict } from "../data/translations";

const LANG_KEY = "mirghani-site-lang";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nCtx | null>(null);

function lookup(dict: Record<string, unknown>, key: string): string | undefined {
  const v = key.split(".").reduce<unknown>((o, k) => {
    if (o && typeof o === "object") return (o as Record<string, unknown>)[k];
    return undefined;
  }, dict);
  return typeof v === "string" ? v : undefined;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(LANG_KEY);
    return stored === "en" || stored === "it" ? stored : "fr";
  });

  useEffect(() => {
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = (key: string) =>
    lookup(translations[lang] as unknown as Record<string, unknown>, key) ||
    lookup(translations.fr as unknown as Record<string, unknown>, key) ||
    key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export type { Lang, Dict };
