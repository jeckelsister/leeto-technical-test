import { useQuery } from '@tanstack/react-query';
import type { GiftCardType } from '../types/GiftCard';

// Custom hook to fetch gift cards
const useGiftCards = (state: 'active' | 'archived') => {
    const { data, isLoading, error } = useQuery<GiftCardType[]>({
        queryKey: [`giftCards${state}`],
        queryFn: () =>
            fetch(`http://localhost:3001/gift-cards?state=${state}`).then((res) => res.json()),
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10 // 10 minutes
    });

    return { data, isLoading, error };
};

export default useGiftCards;
