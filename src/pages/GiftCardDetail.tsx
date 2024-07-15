import { Link, useParams } from 'react-router-dom';

// Components
import GiftCardDescription from '../components/pages/GiftCardDetail/GiftCardDescription';

const GiftCardDetail = () => {
    const { id } = useParams();

    return (
        <div className="flex h-screen flex-col p-10">
            <Link className="flex space-x-1 font-inter text-sm font-medium text-blue" to="/">
                <img src="/images/arrow.svg" alt="" />
                <p className="flex space-x-1 text-sm text-blue">Retour vers les cartes cadeaux</p>
            </Link>
            <GiftCardDescription id={id ?? ''} />
        </div>
    );
};

export default GiftCardDetail;
