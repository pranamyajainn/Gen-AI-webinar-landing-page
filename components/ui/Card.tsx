import * as React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Interactive hover border effect */
    hoverable?: boolean;
}

/**
 * Shared card surface component for testimonials, features, bonuses, etc.
 * Uses design tokens for consistent border, radius, and surface styling.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ hoverable = true, className, children, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                'bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6',
                hoverable &&
                'hover:border-[var(--color-border-hover)] transition-colors duration-[var(--duration-base)]',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
);
Card.displayName = 'Card';

export { Card };
