// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';

const CustomCarePage = ({ t }: PageInterface) => {
  return <div>{t('customerCare.title')}</div>;
};

export default translate(CustomCarePage);
