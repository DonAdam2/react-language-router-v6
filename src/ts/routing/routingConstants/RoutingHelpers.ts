interface NavigatorLanguage extends Navigator {
  userLanguage?: string;
  browserLanguage?: string;
}

interface CustomWindow extends Window {
  navigator: NavigatorLanguage;
}

declare const window: CustomWindow;

export const getDefaultLanguage = () => {
  let lang: string | null | undefined = window.navigator.languages
    ? window.navigator.languages[0]
    : null;
  lang =
    lang ||
    window.navigator.language ||
    window.navigator?.browserLanguage ||
    window.navigator?.userLanguage;

  let shortLang = lang;
  if (shortLang?.indexOf('-') !== -1) shortLang = shortLang?.split('-')[0];

  if (shortLang?.indexOf('_') !== -1) shortLang = shortLang?.split('_')[0];

  return shortLang;
};
