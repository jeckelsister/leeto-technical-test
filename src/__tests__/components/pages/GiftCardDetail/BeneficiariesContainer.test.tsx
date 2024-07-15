import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { GiftCardType } from '../../../../types/GiftCard';

import BeneficiariesContainer from '../../../../components/pages/GiftCardDetail/BeneficiariesContainer';
import { getIconForType, formatBeneficiariesNames } from '../../../../helpers/giftCard';

const mockGiftCard: GiftCardType = {
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
};

describe('BeneficiariesContainer', () => {
    it('renders correctly', () => {
        render(<BeneficiariesContainer giftCard={mockGiftCard} />);

        expect(
            screen.getByText('Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?')
        ).toBeInTheDocument();

        // Check if the beneficiaries icons are rendered
        mockGiftCard.beneficiaries.forEach((beneficiary) => {
            const icon = getIconForType(beneficiary.type);
            expect(screen.getByText(icon)).toBeInTheDocument();
        });

        // Check if the formatted beneficiaries names are rendered
        const formattedNames = formatBeneficiariesNames(mockGiftCard.beneficiaries);
        const capitalizedNames = formattedNames.charAt(0).toUpperCase() + formattedNames.slice(1);
        expect(screen.getByText(capitalizedNames)).toBeInTheDocument();
    });
});
