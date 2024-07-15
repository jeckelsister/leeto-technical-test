import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TrackingContainer from '../../../../components/pages/GiftCardDetail/TrackingContainer';
import type { GiftCardType } from '../../../../types/GiftCard';

describe('TrackingContainer', () => {
    const mockGiftCard: GiftCardType = {
        id: 1,
        name: 'Carte cadeaux Noël 2022',
        description: 'Votre CSE vous offre une carte cadeaux pour Noël.',
        openingDate: '2022-12-01',
        closingDate: '2023-12-01',
        state: 'active',
        allowedAmount: 120,
        consumedAmount: 120,
        beneficiaries: [
            {
                id: 1,
                type: 'user',
                firstName: 'Geralt',
                consumption: {
                    allowedAmount: 120,
                    consumedAmount: 120
                }
            }
        ]
    };

    it('renders TrackingContainer correctly', () => {
        render(<TrackingContainer giftCard={mockGiftCard} />);

        expect(screen.getByText('Suivi de consommation')).toBeInTheDocument();
        expect(screen.getByText(/Vous-même/i)).toBeInTheDocument();
    });
});
