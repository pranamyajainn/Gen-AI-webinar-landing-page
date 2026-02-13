import * as React from 'react';
import { cn } from '@/lib/utils';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    /** Vertical spacing preset based on design tokens */
    spacing?: 'sm' | 'md' | 'lg';
}

/**
 * Shared section wrapper that enforces consistent vertical spacing
 * and container width across all page sections.
 */
const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ spacing = 'md', className, children, ...props }, ref) => (
        <section
            ref={ref}
            className={cn(
                'relative overflow-hidden',
                {
                    'py-[var(--space-section-sm)]': spacing === 'sm',
                    'py-[var(--space-section-md)]': spacing === 'md',
                    'py-[var(--space-section-lg)]': spacing === 'lg',
                },
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-5 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    )
);
Section.displayName = 'Section';

export { Section };
