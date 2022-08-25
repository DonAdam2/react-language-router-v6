// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';

const HomePage = ({ t }: PageInterface) => {
  return <div>{t('homePage.title')}</div>;
};

export default translate(HomePage);
