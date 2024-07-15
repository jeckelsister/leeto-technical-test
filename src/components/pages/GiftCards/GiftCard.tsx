import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Link } from 'react-router-dom';

import { GiftCardType } from '../../../types/GiftCard';
import GiftCardIcon from '../../common/icons/GiftCardIcon';
import GiftCardProgressBar from './GiftCardProgressBar';

const GiftCard = ({ giftCard }: { giftCard: GiftCardType }) => {
    return (
        <Link to={`/gift-cards/${giftCard.id}`} className="rounded-xl border p-6">
            <div className="mb-4 w-fit rounded-lg bg-pink-100 p-2">
                <GiftCardIcon />
            </div>
            <p className="font-inter text-xs font-normal text-slate-600">
                {giftCard.state === 'active' ? 'Se clôture' : 'Cloturée'}{' '}
                {formatDistanceToNow(giftCard.closingDate, {
                    addSuffix: true,
                    locale: fr
                })}
            </p>
            <p className="mb-2 truncate font-inter text-base font-medium" title={giftCard.name}>
                {giftCard.name}
            </p>
            <GiftCardProgressBar
                allowedAmount={giftCard.allowedAmount}
                consumedAmount={giftCard.consumedAmount}
            />
        </Link>
    );
};

export default GiftCard;
