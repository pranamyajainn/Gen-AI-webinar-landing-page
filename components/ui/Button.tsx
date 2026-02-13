import * as React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'glow';
    size?: 'default' | 'sm' | 'lg' | 'magnetic';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'relative inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:shadow-[var(--focus-ring)] disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
                    {
                        'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(124,58,237,0.4)]': variant === 'default',
                        'border border-white/10 bg-transparent hover:bg-white/5 text-white': variant === 'outline',
                        'hover:bg-white/5 text-white': variant === 'ghost',
                    },
                    // Glow variant — complex multi-layer effect
                    variant === 'glow' && [
                        'group bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold tracking-wide',
                        'shadow-[0_0_30px_rgba(124,58,237,0.5),0_0_60px_rgba(124,58,237,0.15)]',
                        'hover:shadow-[0_0_40px_rgba(124,58,237,0.7),0_0_80px_rgba(124,58,237,0.25)]',
                        'hover:scale-[1.03] hover:-translate-y-0.5',
                        'active:scale-[0.98]',
                    ],
                    // Sizes
                    {
                        'h-10 px-5 py-2': size === 'default',
                        'h-9 rounded-md px-3 text-xs': size === 'sm',
                        'h-12 rounded-xl px-8 text-base': size === 'lg',
                        'h-14 rounded-xl px-10 text-lg lg:h-16 lg:px-12 lg:text-xl': size === 'magnetic',
                    },
                    className
                )}
                {...props}
            >
                {/* Shimmer overlay for glow variant */}
                {variant === 'glow' && (
                    <span
                        className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none"
                        aria-hidden="true"
                    >
                        <span
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"
                            style={{
                                backgroundImage: 'linear-gradient(110deg, transparent 25%, rgba(255,255,255,0.15) 50%, transparent 75%)',
                                backgroundSize: '200% 100%',
                            }}
                        />
                    </span>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
