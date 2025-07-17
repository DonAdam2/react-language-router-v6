import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';
// Initialize i18n for tests using the dedicated mock
import { initI18nForTests } from './mocks/RenderWithReactI18Next';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Initialize i18n for all tests
initI18nForTests();
