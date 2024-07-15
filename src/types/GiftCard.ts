export type GiftCardType = {
    id: number;
    description: string;
    name: string;
    openingDate: string;
    closingDate: string;
    state: 'active' | 'archived';
    allowedAmount: number;
    consumedAmount: number;
    beneficiaries: GiftCardBeneficiaryType[];
};

export type GiftCardBeneficiaryType = {
    id: number;
    type: 'user' | 'companion' | 'child';
    firstName: string;
    consumption: {
        allowedAmount: number;
        consumedAmount: number;
    };
};
