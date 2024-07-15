// Helpers
import { formatBeneficiariesNames, getIconForType } from '../../../helpers/giftCard';
import { capitalizeFirstLetter } from '../../../helpers/stringUtils';

// Components
import { GiftCardType } from '../../../types/GiftCard';

const BeneficiariesContainer = ({ giftCard }: { giftCard: GiftCardType }) => {
    return (
        <div className="w-full rounded-lg border border-slate-300 p-4 md:w-1/2 md:p-6">
            <div className="mb-4 w-fit rounded-lg bg-green-100 p-3">
                <img src="/images/beneficiaries.svg" alt="Bénéficiaires" />
            </div>
            <p className="mb-2 text-base font-medium text-slate-800">
                Quel(s) ayant(s)-droit validés bénéficient de cette cagnotte ?
            </p>
            <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                    {giftCard?.beneficiaries?.map((beneficiary) => (
                        <div
                            key={beneficiary.id}
                            className="relative h-8 w-8 rounded-full border-2 border-white bg-slate-100">
                            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                                {getIconForType(beneficiary.type)}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="text-sm font-normal text-slate-600">
                    {capitalizeFirstLetter(formatBeneficiariesNames(giftCard.beneficiaries))}
                </p>
            </div>
        </div>
    );
};

export default BeneficiariesContainer;
