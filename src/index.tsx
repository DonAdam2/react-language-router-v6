import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
//import meta image
import '@/public/assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//store configuration
import store from '@/ts/store/store';
//styles
import './scss/global.scss';
//translation setup
import i18n from './i18n';
//language router
import LangRouter from '@/ts/routing/LangRouter';

const container = document.getElementById('root'),
  root = createRoot(container as Element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <LangRouter />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
