'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function OTOPage() {
    const router = useRouter();

    const handleUpgrade = () => {
        // In a real app, this would trigger the upsell transaction
        router.push('/thank-you?vip=true');
    };

    const handleDecline = () => {
        router.push('/thank-you');
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col relative overflow-hidden">
            {/* Background - Alarm/Urgency Tint */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-amber-900/10 to-transparent" />
            </div>

            <main className="flex-1 container mx-auto px-4 py-12 lg:py-20 flex flex-col items-center max-w-4xl relative z-10">

                {/* Progress Bar (Fake) */}
                <div className="w-full max-w-md h-2 bg-slate-800 rounded-full mb-12 overflow-hidden">
                    <div className="h-full w-[80%] bg-amber-500 rounded-full" />
                </div>

                {/* Urgency Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mb-6 flex items-center gap-2 text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20"
                >
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-bold text-sm tracking-wide uppercase">Wait! Do not close this page</span>
                </motion.div>

                {/* Headline */}
                <h1 className="text-3xl lg:text-5xl font-extrabold text-white text-center mb-6 leading-tight">
                    Your Order Is <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-4">Not Complete</span> Yet...
                </h1>

                <p className="text-lg text-slate-400 text-center max-w-2xl mb-12">
                    You made a great choice registering for the workshop. But you declined the VIP upgrade, and I want to make sure that was intentional.
                </p>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center bg-slate-900/50 border border-white/10 rounded-3xl p-6 lg:p-8">

                    {/* Visual Recap */}
                    <div className="relative aspect-video lg:aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center group">
                        {/* Placeholder for Product Mockup */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
                        <div className="text-center p-6 relative z-10">
                            <span className="text-5xl lg:text-7xl font-bold text-white/10 group-hover:text-white/20 transition-colors">VIP</span>
                            <div className="mt-4 inline-block bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                                80% OFF RECAP
                            </div>
                        </div>
                    </div>

                    {/* Offer Recap */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">
                            One Last Chance To Grab The <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Complete AI Asset Bundle</span>
                        </h3>

                        <div className="space-y-3">
                            <Benefit text="Lifetime Recording of the Workshop" />
                            <Benefit text="The 'Perfect Prompt' PDF Cheatsheet" />
                            <Benefit text="Copy-Paste Prompts Library (500+)" />
                            <Benefit text="Implementation Workbook" />
                        </div>

                        <div className="pt-4 pb-2">
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-emerald-400">$99</span>
                                <span className="text-lg text-slate-500 line-through decoration-slate-500/50">$497 Value</span>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Button
                                onClick={handleUpgrade}
                                variant="glow"
                                className="w-full text-lg h-14 bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] border-emerald-400/50"
                            >
                                <span className="flex items-center gap-2">
                                    Yes! Add To My Order
                                    <ArrowRight className="w-5 h-5" />
                                </span>
                            </Button>

                            <button
                                onClick={handleDecline}
                                className="w-full py-2 text-sm text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-2 group"
                            >
                                <span>No thanks, I don&apos;t want the bonuses or recording.</span>
                            </button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}

function Benefit({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-emerald-400" />
            </div>
            <span className="text-slate-300">{text}</span>
        </div>
    );
}
