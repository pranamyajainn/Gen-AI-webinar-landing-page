'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Check, Calendar, Play } from 'lucide-react';

export default function ThankYouPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-indigo-900/20 to-transparent" />
            </div>

            <main className="flex-1 container mx-auto px-4 py-16 lg:py-24 flex flex-col items-center max-w-5xl relative z-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-emerald-500/20"
                    >
                        <Check className="w-4 h-4" />
                        Registration Confirmed
                    </motion.div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        You&apos;re Officially <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">In!</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                        Please check your email inbox for your unique joining link and calendar invite.
                    </p>
                </div>

                {/* Hype Video Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-4xl aspect-video bg-slate-900 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
                >
                    {/* Placeholder for Video */}
                    <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white fill-white ml-1" />
                            </div>
                            <p className="text-slate-500 font-medium">Watch: What to expect in the workshop (2 min)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Callout below video */}
                <div className="mt-8 text-center">
                    <p className="text-slate-400 text-sm">
                        <span className="text-white font-bold">Important:</span> Watch this short video to prepare for the session.
                    </p>
                </div>

            </main>
        </div>
    );
}
