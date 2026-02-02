'use client';
import { useState, useEffect } from 'react';
import RegisterButton from '@/components/RegisterButton';
import { cn } from '@/lib/utils';

export default function StickyCountdown() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px (past most of hero)
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={cn(
            "fixed bottom-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-t border-white/10 p-4 transition-transform duration-300 transform",
            isVisible ? "translate-y-0" : "translate-y-full"
        )}>
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-white">
                    <span className="text-sm font-medium uppercase tracking-wider text-slate-400 hidden sm:inline-block">Registration Closes In:</span>
                    <div className="flex gap-2 font-mono text-xl font-bold text-primary">
                        <span>00</span>:<span>14</span>:<span>49</span>
                    </div>
                </div>
                <RegisterButton size="sm" variant="glow" className="w-full sm:w-auto shadow-none">
                    👉 SAVE MY FREE SEAT
                </RegisterButton>
            </div>
        </div>
    );
}
