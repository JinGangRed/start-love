import { ref } from "vue";
import { createI18n } from "vue-i18n";
export const locales: string[] = ["zh-CN", "en-US"];
export const defaultLang = "en-US";
const loadedLanguages = ref<string[]>([defaultLang]);

function setI18nLanguage(lang: string): string {
  i18n.global.locale = lang;
  const HTML = document.querySelector("html");
  HTML && HTML.setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang: string = defaultLang): Promise<string> {
  return new Promise<string>((resolve) => {
    const currentLocale = i18n.global;
    if (currentLocale.locale === lang) {
      return resolve(lang);
    }
    if (loadedLanguages.value.includes(lang)) {
      return resolve(setI18nLanguage(lang));
    }
    return import(`./lang/${lang}`).then((result) => {
      const loadedLang = result.default;
      currentLocale.setLocaleMessage(lang, loadedLang);
      loadedLanguages.value.push(lang);
      return resolve(setI18nLanguage(lang));
    });
  });
}

const i18n = createI18n({
  missingWarn: false,
  locale: defaultLang,
});

export default i18n;
