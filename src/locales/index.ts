import { createI18n } from "vue-i18n";

export const defaultLang = "";

const i18n = createI18n({
  missingWarn: false,
  locale: defaultLang,
});

export default i18n;
