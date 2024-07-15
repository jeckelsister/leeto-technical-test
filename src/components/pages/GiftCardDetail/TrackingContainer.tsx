// Helpers
import { getIconForType } from '../../../helpers/giftCard';

// Types
import type { GiftCardType, GiftCardBeneficiaryType } from '../../../types/GiftCard';

// Components
import GiftCardProgressBar from '../GiftCards/GiftCardProgressBar';

const BeneficiaryItem = ({ beneficiary }: { beneficiary: GiftCardBeneficiaryType }) => (
    <div className="flex w-full items-center space-x-4">
        <div className="relative h-8 w-8 rounded-full border-2 border-white bg-slate-100">
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs">
                {getIconForType(beneficiary.type)}
            </p>
        </div>
        <GiftCardProgressBar
            className="flex-grow"
            allowedAmount={beneficiary.consumption.allowedAmount}
            consumedAmount={beneficiary.consumption.consumedAmount}
            firstName={beneficiary.type === 'user' ? 'Vous-même' : beneficiary.firstName}
        />
    </div>
);

const TrackingContainer = ({ giftCard }: { giftCard: GiftCardType }) => {
    return (
        <div className="w-full rounded-lg border border-slate-300 p-4 md:w-1/2 md:p-6">
            <div className="mb-4 w-fit rounded-lg bg-green-100 p-3">
                <img src="/images/tracking.svg" alt="Suivi" />
            </div>
            <p className="mb-2 text-base font-medium text-slate-800">Suivi de consommation</p>
            <div>
                {giftCard?.beneficiaries.length < 3 ? (
                    giftCard?.beneficiaries?.map((beneficiary) => (
                        <BeneficiaryItem key={beneficiary.id} beneficiary={beneficiary} />
                    ))
                ) : (
                    <>
                        <BeneficiaryItem beneficiary={giftCard?.beneficiaries[0]} />
                        <div className="sm:flex sm:space-x-8">
                            <div className="flex w-full items-center space-x-4 sm:w-1/2">
                                <BeneficiaryItem beneficiary={giftCard?.beneficiaries[1]} />
                            </div>
                            <div className="flex items-center space-x-4 sm:w-1/2">
                                <BeneficiaryItem beneficiary={giftCard?.beneficiaries[2]} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default TrackingContainer;
