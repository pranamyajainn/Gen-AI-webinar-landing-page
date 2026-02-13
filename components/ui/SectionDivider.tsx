'use client';

interface SectionDividerProps {
    variant?: 'subtle' | 'glow';
    color?: 'primary' | 'accent';
}

export default function SectionDivider({ variant = 'subtle', color = 'primary' }: SectionDividerProps) {
    const gradientColor = color === 'primary'
        ? 'rgba(124, 58, 237, 0.4)'
        : 'rgba(34, 211, 238, 0.4)';

    const glowColor = color === 'primary'
        ? 'rgba(124, 58, 237, 0.08)'
        : 'rgba(34, 211, 238, 0.06)';

    return (
        <div className="relative py-2" aria-hidden="true">
            {/* Center line */}
            <div
                className="mx-auto h-px"
                style={{
                    width: variant === 'glow' ? '40%' : '20%',
                    background: `linear-gradient(to right, transparent, ${gradientColor}, transparent)`,
                }}
            />

            {/* Optional ambient glow */}
            {variant === 'glow' && (
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                        width: '50%',
                        height: '60px',
                        background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
                    }}
                />
            )}
        </div>
    );
}
