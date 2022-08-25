// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';

const ContactUsPage = ({ t }: PageInterface) => {
  return <div>{t('contactUsPage.title')}</div>;
};

export default translate(ContactUsPage);
