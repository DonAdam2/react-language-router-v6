import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import meta image
import './assets/images/metaImage.jpg';
// required for babel polyfills
import 'regenerator-runtime/runtime';
//store configuration
import configureStore from './ts/store/configureStore';
//root component
import App from './App';
//styles
import './scss/global.scss';
//translations
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { setTranslations, setDefaultLanguage } from 'react-switch-lang';
import en from './ts/translations/en.json';
import ar from './ts/translations/ar.json';

setTranslations({ en, ar });
setDefaultLanguage('en');

const store = configureStore(),
  container = document.getElementById('root'),
  root = createRoot(container as Element);

root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
