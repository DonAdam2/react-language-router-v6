// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';

const LoginPage = ({ t }: { t: (key: string) => string }) => {
  return <div>{t('loginPage.title')}</div>;
};

export default translate(LoginPage);
