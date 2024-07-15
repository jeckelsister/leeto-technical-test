// GiftCardDescription.test.tsx
import { render, screen } from '@testing-library/react';
import GiftCardDescription from '../../../../components/pages/GiftCardDetail/GiftCardDescription';
import useGiftCard from '../../../../hooks/useGiftCard';
import { GiftCardType } from '../../../../types/GiftCard';

// Mock the useGiftCard hook
jest.mock('../../../../hooks/useGiftCard');

const mockUseGiftCard = useGiftCard as jest.MockedFunction<typeof useGiftCard>;

describe('GiftCardDescription Component', () => {
    it('displays loader while loading', () => {
        mockUseGiftCard.mockReturnValue({
            giftCard: undefined,
            isLoading: true,
            error: null
        });

        render(<GiftCardDescription id="1" />);

        expect(screen.getByTestId('loader')).toBeInTheDocument(); // Assuming Loader component uses a role="status"
    });

    it('displays error message on error', () => {
        mockUseGiftCard.mockReturnValue({
            giftCard: undefined,
            isLoading: false,
            error: { message: 'Failed to fetch data' } as Error
        });

        render(<GiftCardDescription id="1" />);

        expect(screen.getByText(/Erreur: Failed to fetch data/i)).toBeInTheDocument();
    });

    it('displays gift card details when data is fetched', () => {
        const mockGiftCard: GiftCardType = {
            id: 1,
            name: 'Test Gift Card',
            openingDate: '2023-01-01',
            closingDate: '2023-12-31',
            state: 'active',
            allowedAmount: 100,
            consumedAmount: 50,
            description: 'Test description',
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

        mockUseGiftCard.mockReturnValue({
            giftCard: mockGiftCard,
            isLoading: false,
            error: null
        });

        render(<GiftCardDescription id="1" />);

        expect(screen.getByTitle(mockGiftCard.name)).toBeInTheDocument();
        expect(screen.getByText('Test description')).toBeInTheDocument();
        expect(screen.getByText(/1 janv. 2023 - 31 déc. 2023/i)).toBeInTheDocument();
        expect(screen.getByText(/Se clôture/i)).toBeInTheDocument();
    });
});
