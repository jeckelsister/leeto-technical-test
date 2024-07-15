import type { GiftCardType } from '../../../types/GiftCard';

import Loader from '../../common/Loader';
import GiftCard from './GiftCard';

type GiftCardsListProps = {
    list?: GiftCardType[];
    loader: boolean;
    error?: Error | null;
};

const GiftCardsList = ({ list = [], loader, error }: GiftCardsListProps) => {
    if (loader) {
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

    if (list.length === 0) {
        return (
            <div className="flex flex-grow flex-col items-center justify-center">
                <p className="font-inter text-base text-slate-600">Pas de cartes disponibles</p>
            </div>
        );
    }

    return (
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {list.map((giftCard: GiftCardType) => (
                <GiftCard key={giftCard.id} giftCard={giftCard} />
            ))}
        </div>
    );
};

export default GiftCardsList;
