import { GiftCardBeneficiaryType } from '../types/GiftCard';

export const formatBeneficiariesNames = (beneficiaries: GiftCardBeneficiaryType[]): string => {
    const names = beneficiaries.map((b) => (b.type === 'user' ? 'vous-même' : b.firstName));
    if (names.length === 0) return '';
    if (names.length === 1) {
        return names[0] === 'vous-même' ? 'Vous êtes éligible.' : `${names[0]} est éligible.`;
    }
    return `${names.slice(0, -1).join(', ')} et ${names[names.length - 1]} sont éligibles`;
};

export const getIconForType = (beneficiaryType: GiftCardBeneficiaryType['type']): string => {
    switch (beneficiaryType) {
        case 'companion':
            return '💙';
        case 'child':
            return '👶';
        case 'user':
        default:
            return '🙋‍♂️';
    }
};
