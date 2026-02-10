'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button'; // Or RegisterButton
import RegisterButton from '@/components/RegisterButton';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

export default function StickyHeader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past Hero (approx 600px)
            setIsVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform",
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl">
                <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">

                    {/* Logo / Title */}
                    <div className="font-bold text-white text-lg tracking-tight">
                        AI Mastery<span className="text-primary">.</span>
                    </div>

                    {/* Desktop Timer Center */}
                    <div className="hidden md:flex items-center gap-4 bg-slate-900/50 px-4 py-1.5 rounded-full border border-white/5">
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            <span className="uppercase tracking-wider text-[10px]">Offers Ends In</span>
                        </div>
                        <div className="font-mono font-bold text-white text-sm tracking-widest">
                            00 : 14 : 49 : 10
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block text-xs text-slate-400 font-medium">
                            Limited spots remaining
                        </div>
                        <RegisterButton size="sm" variant="glow" className="shadow-none">
                            REGISTER FOR FREE
                        </RegisterButton>
                    </div>

                </div>
            </div>
        </header>
    );
}
