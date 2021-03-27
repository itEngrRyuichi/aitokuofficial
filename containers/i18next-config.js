import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJson from './en/translation.json';
import jpJson from './jp/translation.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enJson
      },
      jp: {
        translation: jpJson
      }
    },
    lng: "ja",
    fallbackLng: "ja",

    interpolation: {
      escapeValue: false
    }
  });