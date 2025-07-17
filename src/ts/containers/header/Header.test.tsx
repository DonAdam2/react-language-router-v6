import { screen } from '@testing-library/react';
// all providers mock
import renderWithProviders from '@/jest/mocks/RenderWithProviders';
//components
import Header from './Header';

describe('<Header />', () => {
  test('renders header links', () => {
    renderWithProviders(<Header />);
    const loginLink = screen.getByText('Login');
    const aboutUsLink = screen.getByText('About us');
    expect(loginLink).toBeInTheDocument();
    expect(aboutUsLink).toBeInTheDocument();
  });
});
