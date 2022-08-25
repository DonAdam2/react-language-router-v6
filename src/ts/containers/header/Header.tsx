import { ChangeEvent, useContext, useEffect, useState } from 'react';
//contexts
import { LocaleContext } from '@/ts/routing/LangRouter';

const Header = () => {
  const localeContext = useContext(LocaleContext),
    currentLanguage = localeContext.locale.substring(0, 2),
    [lang, setLang] = useState(currentLanguage);

  useEffect(() => {
    setLang(localeContext.locale.substring(0, 2));
  }, [localeContext.locale]);

  const changeLanguageHandler = ({ target: { value } }: ChangeEvent<HTMLSelectElement>) => {
    localeContext.setLocale(value);
    setLang(value);
  };

  return (
    <div className="header-wrapper">
      <select onChange={changeLanguageHandler} value={lang}>
        <option value="en">EN</option>
        <option value="ar">AR</option>
      </select>
    </div>
  );
};

export default Header;
