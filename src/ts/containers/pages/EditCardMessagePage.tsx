// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { translate } from 'react-switch-lang';
//interfaces
import { PageInterface } from '@/ts/interfaces/PageInterface';

const EditCardMessagePage = ({ t }: PageInterface) => {
  return <div>{t('editCardMessage.title')}</div>;
};

export default translate(EditCardMessagePage);
