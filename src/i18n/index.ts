import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translations from "./locales";

const i18nConfig = {
  resources: translations,
  fallbackLng: "pt-BR",
  defaultNS: "translations",
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
  debug: process.env.NODE_ENV === "development",
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;
