interface NavigatorLanguage extends Navigator {
  userLanguage?: string;
  browserLanguage?: string;
}

interface CustomWindow extends Window {
  navigator: NavigatorLanguage;
}

declare const window: CustomWindow;

export const availableLocales = ['en', 'ar'];
type Locale = (typeof availableLocales)[number];

export const getDefaultLanguage = ({ fallbackLocal }: { fallbackLocal: Locale }) => {
  let browserLang: string | null | undefined = window.navigator.languages
    ? window.navigator.languages[0]
    : null;
  browserLang =
    browserLang ||
    window.navigator.language ||
    window.navigator?.browserLanguage ||
    window.navigator?.userLanguage;

  let shortLang = browserLang;
  if (shortLang?.indexOf('-') !== -1) shortLang = shortLang?.split('-')[0];

  if (shortLang?.indexOf('_') !== -1) shortLang = shortLang?.split('_')[0];
  shortLang = availableLocales.includes(shortLang as string) ? shortLang : fallbackLocal;

  return shortLang;
};
