import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import GiftCardsList from '../../../../components/pages/GiftCards/GiftCardsList';
import type { GiftCardType } from '../../../../types/GiftCard';

describe('GiftCardsList', () => {
    const mockGiftCards: GiftCardType[] = [
        {
            id: 1,
            name: 'Carte cadeaux Noël 2022',
            description: 'Votre CSE vous offre une carte cadeaux pour Noël.',
            openingDate: '2022-12-01',
            closingDate: '2023-12-01',
            state: 'archived',
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
        },
        {
            id: 2,
            name: 'Carte cadeaux vacances d‘été',
            description: 'Votre CSE vous offre une carte cadeaux pour vos vacances d‘été.',
            openingDate: '2023-06-01',
            closingDate: '2023-10-01',
            state: 'archived',
            allowedAmount: 60,
            consumedAmount: 60,
            beneficiaries: [
                {
                    id: 1,
                    type: 'user',
                    firstName: 'Geralt',
                    consumption: {
                        allowedAmount: 30,
                        consumedAmount: 30
                    }
                },
                {
                    id: 2,
                    type: 'companion',
                    firstName: 'Yennefer',
                    consumption: {
                        allowedAmount: 30,
                        consumedAmount: 30
                    }
                }
            ]
        }
    ];

    it('renders loader when loading', () => {
        render(<GiftCardsList loader={true} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error message when there is an error', () => {
        const error = new Error('Test Error');
        render(<GiftCardsList loader={false} error={error} />);
        expect(screen.getByText(`Erreur: ${error.message}`)).toBeInTheDocument();
    });

    it('renders message when list is empty', () => {
        render(<GiftCardsList loader={false} list={[]} />);
        expect(screen.getByText('Pas de cartes disponibles')).toBeInTheDocument();
    });

    it('renders list of gift cards', () => {
        render(
            <MemoryRouter>
                <GiftCardsList loader={false} list={mockGiftCards} />
            </MemoryRouter>
        );
        expect(screen.getByText('Carte cadeaux Noël 2022')).toBeInTheDocument();
        expect(screen.getByText('Carte cadeaux vacances d‘été')).toBeInTheDocument();
    });
});
