import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GiftCardProgressBar from '../../../../components/pages/GiftCards/GiftCardProgressBar';

describe('GiftCardProgressBar', () => {
    it('renders correctly with given props', () => {
        render(<GiftCardProgressBar consumedAmount={50} allowedAmount={100} firstName="John" />);

        expect(screen.getByText('John · 50 € / 100 €')).toBeInTheDocument();
        expect(screen.getByText('50%')).toBeInTheDocument();
    });

    it('renders correctly without firstName', () => {
        render(<GiftCardProgressBar consumedAmount={50} allowedAmount={100} />);

        expect(screen.getByText('50 € dépensés / 100 €')).toBeInTheDocument();
        expect(screen.getByText('50%')).toBeInTheDocument();
    });
});
