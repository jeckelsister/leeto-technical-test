import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import GiftCard from '../../../../components/pages/GiftCards/GiftCard';
import { GiftCardType } from '../../../../types/GiftCard';

const mockGiftCard: GiftCardType = {
    id: 1,
    name: 'Test Gift Card',
    description: 'Test Description',
    openingDate: '2023-01-01',
    closingDate: '2023-12-31',
    state: 'active',
    allowedAmount: 100,
    consumedAmount: 50,
    beneficiaries: []
};

describe('GiftCard', () => {
    it('renders correctly', () => {
        render(
            <MemoryRouter>
                <GiftCard giftCard={mockGiftCard} />
            </MemoryRouter>
        );

        expect(screen.getByText('Test Gift Card')).toBeInTheDocument();
        expect(screen.getByText('50%')).toBeInTheDocument();
    });
});
