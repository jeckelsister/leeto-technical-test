import { useState } from 'react';
import classNames from 'classnames';

// Hooks
import useGiftCards from '../hooks/useGiftCards';

// Components
import GiftCardsList from '../components/pages/GiftCards/GiftCardsList';

// Types
import type { GiftCardType } from '../types/GiftCard';

type TabButtonProps = {
    isActive: boolean;
    onClick: () => void;
    label: string;
    count?: number;
};

const TabButton = ({ isActive, onClick, label, count }: TabButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={classNames('w-1/2 px-4 py-2 font-inter text-sm font-semibold sm:w-auto', {
                'border-b-2 border-b-blue text-blue': isActive,
                'text-slate-600': !isActive
            })}>
            {label} {count ? `(${count})` : null}
        </button>
    );
};

const GiftCards = () => {
    const {
        data: activeGiftCards,
        isLoading: isLoadingActive,
        error: errorActive
    } = useGiftCards('active');
    const {
        data: archivedGiftCards,
        isLoading: isLoadingArchived,
        error: errorArchived
    } = useGiftCards('archived');

    // State to manage the active tab (either "active" or "archived")
    const [activeTab, setActiveTab] = useState<GiftCardType['state']>('active');

    return (
        <div className="flex h-screen flex-col p-10">
            <h1 className="mb-2">Cartes cadeaux</h1>
            <div className="flex w-full border-b border-slate-300">
                <TabButton
                    isActive={activeTab === 'active'}
                    onClick={() => setActiveTab('active')}
                    label="Actives"
                    count={activeGiftCards?.length}
                />
                <TabButton
                    isActive={activeTab === 'archived'}
                    onClick={() => setActiveTab('archived')}
                    label="Cloturées"
                    count={archivedGiftCards?.length}
                />
            </div>
            <GiftCardsList
                list={activeTab === 'archived' ? archivedGiftCards : activeGiftCards}
                loader={activeTab === 'archived' ? isLoadingArchived : isLoadingActive}
                error={activeTab === 'archived' ? errorArchived : errorActive}
            />
        </div>
    );
};

export default GiftCards;
