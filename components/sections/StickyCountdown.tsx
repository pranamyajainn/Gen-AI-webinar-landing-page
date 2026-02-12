'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegisterButton from '@/components/RegisterButton';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

/* ─── Animated Digit ─── */
function AnimatedDigit({ value }: { value: string }) {
    return (
        <span className="relative inline-flex items-center justify-center w-[1.6em] overflow-hidden">
            <AnimatePresence mode="popLayout">
                <motion.span
                    key={value}
                    initial={{ y: 14, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -14, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="inline-block"
                >
                    {value}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

/* ─── Time Unit ─── */
function TimeUnit({ value, label }: { value: number; label: string }) {
    const str = value.toString().padStart(2, '0');
    return (
        <div className="flex flex-col items-center">
            <div className="flex font-mono text-xl lg:text-2xl font-bold text-white tabular-nums">
                <AnimatedDigit value={str[0]} />
                <AnimatedDigit value={str[1]} />
            </div>
            <span className="text-[9px] uppercase tracking-widest text-slate-500 mt-0.5">{label}</span>
        </div>
    );
}

export default function StickyCountdown() {
    const [isVisible, setIsVisible] = useState(false);
    const { hours, minutes, seconds, total } = useCountdown();

    // Scroll visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        // Initial check in case started scrolled down
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Urgency color logic
    const getUrgencyColor = useCallback(() => {
        if (total <= 15 * 60 * 1000) return 'border-red-500/30 bg-red-950/20'; // <15 min
        if (total <= 60 * 60 * 1000) return 'border-amber-500/30 bg-amber-950/20'; // <1 hr
        return 'border-white/10 bg-slate-900/90'; // normal
    }, [total]);

    const getTimerColor = useCallback(() => {
        if (total <= 15 * 60 * 1000) return 'text-red-400';
        if (total <= 60 * 60 * 1000) return 'text-amber-400';
        return 'text-white';
    }, [total]);

    return (
        <motion.div
            initial={{ y: '100%' }}
            animate={{ y: isVisible ? '0%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={cn(
                'fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl border-t p-3 lg:p-4',
                getUrgencyColor()
            )}
        >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-400">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="uppercase tracking-wider text-[10px]">Registration Closes In</span>
                    </div>

                    <div className={cn('flex items-center gap-3', getTimerColor())}>
                        <TimeUnit value={hours} label="Hrs" />
                        <span className="text-lg font-bold text-slate-600 -mt-3">:</span>
                        <TimeUnit value={minutes} label="Min" />
                        <span className="text-lg font-bold text-slate-600 -mt-3">:</span>
                        <TimeUnit value={seconds} label="Sec" />
                    </div>
                </div>

                <RegisterButton size="sm" variant="glow" className="w-full sm:w-auto">
                    👉 SAVE MY FREE SEAT
                </RegisterButton>
            </div>
        </motion.div>
    );
}
