import { screen } from '@testing-library/react';
// all providers mock
import renderWithProviders from '@/jest/mocks/RenderWithProviders';
//components
import Header from './Header';

describe('<Header />', () => {
  test('renders component name (header)', () => {
    renderWithProviders(<Header />);
    const title = screen.getByText(/header/i);
    expect(title).toBeInTheDocument();
  });
});
