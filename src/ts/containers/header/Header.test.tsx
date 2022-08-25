import { render, screen } from '@testing-library/react';
//components
import Header from './Header';

describe('<Header />', () => {
    test('renders component name (header)', () => {
        render(<Header />);
        const title = screen.getByText(/header/i);
        expect(title).toBeInTheDocument();
    });
});
