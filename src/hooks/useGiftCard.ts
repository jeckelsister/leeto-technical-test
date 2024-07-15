import { useQuery } from '@tanstack/react-query';
import type { GiftCardType } from '../types/GiftCard';

const useGiftCard = (id: string) => {
    const {
        data: giftCard,
        isLoading,
        error
    } = useQuery<GiftCardType>({
        queryKey: ['giftCard', id],
        queryFn: () => fetch(`http://localhost:3001/gift-cards/${id}`).then((res) => res.json()),
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 10 // 10 minutes
    });

    return { giftCard, isLoading, error };
};

export default useGiftCard;
