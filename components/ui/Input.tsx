import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Show error styling */
    error?: boolean;
}

/**
 * Shared Input component replacing duplicated inline input styles.
 * Uses design tokens for surface, border, radius, and focus states.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ error, className, ...props }, ref) => (
        <input
            ref={ref}
            className={cn(
                'w-full bg-slate-800 border border-slate-700 rounded-[var(--radius-sm)] px-4 py-2.5 text-white outline-none transition-all duration-[var(--duration-fast)]',
                'focus:ring-2 focus:ring-primary focus:border-transparent',
                'placeholder:text-slate-500',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                error && 'border-[var(--color-danger)] focus:ring-[var(--color-danger)]',
                className
            )}
            {...props}
        />
    )
);
Input.displayName = 'Input';

export { Input };
