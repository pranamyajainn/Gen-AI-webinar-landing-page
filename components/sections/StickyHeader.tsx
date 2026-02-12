'use client';
import { Button } from '@/components/ui/Button'; // Or RegisterButton
import RegisterButton from '@/components/RegisterButton';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';
import Image from 'next/image';

export default function StickyHeader() {
    const { hours, minutes, seconds } = useCountdown();

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform translate-y-0 opacity-100"
            )
            }
        >
            <div className="bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-2xl">
                <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">

                    {/* Logo / Title */}
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/namyah_logo.png"
                                alt="Namyah Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="font-bold text-white text-lg tracking-tight">
                            Namyah<span className="text-primary">.</span>
                        </div>
                    </div>

                    {/* Desktop Timer Center */}
                    <div className="hidden md:flex items-center gap-4 bg-slate-900/50 px-4 py-1.5 rounded-full border border-white/5">
                        <div className="flex items-center gap-2 text-primary text-sm font-medium">
                            <Clock className="w-4 h-4" />
                            <span className="uppercase tracking-wider text-[10px]">Offers Ends In</span>
                        </div>
                        <div className="font-mono font-bold text-white text-sm tracking-widest tabular-nums">
                            {hours.toString().padStart(2, '0')} : {minutes.toString().padStart(2, '0')} : {seconds.toString().padStart(2, '0')}
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
