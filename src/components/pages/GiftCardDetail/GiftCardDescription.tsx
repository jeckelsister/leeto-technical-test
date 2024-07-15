import { format, formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

// Components
import Loader from '../../common/Loader';
import GiftCardIcon from '../../common/icons/GiftCardIcon';
import GiftCardProgressBar from '../GiftCards/GiftCardProgressBar';
import BeneficiariesContainer from './BeneficiariesContainer';
import TrackingContainer from './TrackingContainer';
import useGiftCard from '../../../hooks/useGiftCard';

const GiftCardDescription = ({ id }: { id: string }) => {
    // Fetch gift card
    const { giftCard, isLoading, error } = useGiftCard(id);

    if (isLoading) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center">
                <p className="font-inter text-base text-red-400">Erreur: {error.message}</p>
            </div>
        );
    }

    if (!giftCard) return null;

    return (
        <div className="py-6">
            <div className="mb-4 w-fit rounded-lg bg-pink-100 p-3 sm:p-5">
                <GiftCardIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <h1 title={giftCard.name}>{giftCard.name}</h1>
            <div className="mt-2 sm:flex sm:space-x-2">
                <div className="flex items-center space-x-1">
                    <img src="/images/calendar.svg" alt="time" />
                    <p className="font-inter text-sm font-normal text-slate-600">
                        {format(giftCard.openingDate, 'd MMM yyyy', { locale: fr })} -{' '}
                        {format(giftCard.closingDate, 'd MMM yyyy', { locale: fr })}
                    </p>
                </div>
                <div className="mt-2 flex items-center space-x-1 sm:mt-0">
                    <img src="/images/access_time.svg" alt="time" />
                    <p className="font-inter text-sm font-normal text-slate-600">
                        {giftCard.state === 'active' ? 'Se clôture' : 'Cloturée'}{' '}
                        {formatDistanceToNow(giftCard.closingDate, {
                            addSuffix: true,
                            locale: fr
                        })}
                    </p>
                </div>
            </div>
            <div className="mt-6 flex w-full items-end space-x-4 sm:space-x-5">
                <div className="flex flex-col space-y-1">
                    <p className="font-inter text-xl font-semibold sm:text-2xl">
                        {giftCard.allowedAmount - giftCard.consumedAmount} €
                    </p>
                    <p className="font-inter text-xs font-medium sm:text-sm">disponibles</p>
                </div>
                <div className="w-[471px]">
                    <GiftCardProgressBar
                        allowedAmount={giftCard.allowedAmount}
                        consumedAmount={giftCard.consumedAmount}
                    />
                </div>
            </div>
            <div className="my-6 space-y-2 rounded-lg bg-slate-50 p-4">
                <p className="font-inter text-sm font-semibold text-slate-800">
                    Description de la carte-cadeau
                </p>
                <p className="text-base">{giftCard.description}</p>
            </div>
            <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                <BeneficiariesContainer giftCard={giftCard} />
                <TrackingContainer giftCard={giftCard} />
            </div>
        </div>
    );
};

export default GiftCardDescription;
