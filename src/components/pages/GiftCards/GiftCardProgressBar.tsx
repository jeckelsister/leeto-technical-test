// Components
import ProgressBar from '../../common/ProgressBar';

// Types
import type { ComponentPropsWithoutRef } from 'react';

type GiftCardProgressBarProps = ComponentPropsWithoutRef<'div'> & {
    consumedAmount: number;
    allowedAmount: number;
    firstName?: string;
};

const GiftCardProgressBar = ({
    consumedAmount,
    allowedAmount,
    firstName = '',
    ...restProps
}: GiftCardProgressBarProps) => {
    const percentage = (consumedAmount / allowedAmount) * 100;

    return (
        <div {...restProps}>
            <p className="my-1 font-inter text-xs font-normal text-slate-600">
                {firstName ? `${firstName} · ` : ''} {consumedAmount} €{' '}
                {!firstName ? 'dépensés ' : ''}/ {allowedAmount} €
            </p>
            <ProgressBar percentage={percentage} />
        </div>
    );
};

export default GiftCardProgressBar;
