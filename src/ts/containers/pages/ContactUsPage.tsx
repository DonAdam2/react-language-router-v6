import { useTranslation } from 'react-i18next';

const ContactUsPage = () => {
  const { t } = useTranslation();

  return <div>{t('contactUsPage.title')}</div>;
};

export default ContactUsPage;
