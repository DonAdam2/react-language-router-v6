import { screen } from '@testing-library/react';
// all providers mock
import renderWithProviders from '@/jest/mocks/RenderWithProviders';
//component
import App from './App';

describe('App Component', () => {
  test('renders app with header', () => {
    renderWithProviders(<App />);
    const loginLink = screen.getByText('Login');
    const aboutUsLink = screen.getByText('About us');
    expect(loginLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });
});
