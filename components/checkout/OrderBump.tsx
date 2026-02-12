'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap } from 'lucide-react';

interface OrderBumpProps {
    isSelected: boolean;
    onToggle: (checked: boolean) => void;
}

export default function OrderBump({ isSelected, onToggle }: OrderBumpProps) {
    return (
        <div
            onClick={() => onToggle(!isSelected)}
            className={`cursor-pointer relative overflow-hidden border-2 rounded-xl p-4 transition-all duration-300 ${isSelected
                ? 'border-primary bg-primary/10 shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                : 'border-white/10 bg-slate-900/50 hover:border-primary/30'
                }`}
        >
            {/* Shimmer effect if selected */}
            {isSelected && (
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            )}

            <div className="flex items-start gap-4 relative z-10">
                {/* Checkbox */}
                <div className={`mt-1 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${isSelected
                    ? 'bg-primary border-primary'
                    : 'border-slate-500 bg-slate-800'
                    }`}>
                    {isSelected && <Check className="w-4 h-4 text-white" />}
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-white text-lg pr-4">
                            Upgrade to VIP <span className="text-yellow-400 text-sm font-normal ml-2 tracking-wide uppercase px-2 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/20">One Time Offer</span>
                        </h3>
                        <span className="font-bold text-xl text-primary">$99</span>
                    </div>

                    <p className="text-sm text-slate-300 mb-3">
                        Unlock the complete post-workshop asset bundle. Most attendees upgrade!
                    </p>

                    <div className="space-y-2 pl-1">
                        <BenefitItem icon={Zap} text="Lifetime Access to Workshop Recording" />
                        <BenefitItem icon={Zap} text="Premium PDF Implementation Guide & Notes" />
                        <BenefitItem icon={Sparkles} text="Exclusive 500+ AI Prompts Library" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BenefitItem({ icon: Icon, text }: { icon: any; text: string }) {
    return (
        <div className="flex items-center gap-2 text-sm text-slate-400">
            <Icon className="w-3.5 h-3.5 text-primary" />
            <span>{text}</span>
        </div>
    );
}
