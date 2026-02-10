'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gift, Lock, Flame, BookOpen, Image, FileCode } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';

const BONUSES = [
    {
        icon: BookOpen,
        title: 'Gold-Standard Prompts Library',
        detail: '200+ battle-tested prompts across 12 categories. Copy, paste, profit.',
        value: 'Worth ₹4,999',
        color: 'from-amber-500 to-orange-600',
    },
    {
        icon: FileCode,
        title: 'Hidden AI Tools Directory',
        detail: 'Curated list of 50+ free tools most founders don\'t know exist.',
        value: 'Worth ₹2,999',
        color: 'from-violet-500 to-indigo-600',
    },
    {
        icon: Image,
        title: 'AI Image Generation Masterpack',
        detail: 'Prompts that generate brand-quality visuals for ads, decks, and social.',
        value: 'Worth ₹3,499',
        color: 'from-pink-500 to-rose-600',
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function BonusExclusivity() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="bonus-exclusivity" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
            {/* Background shimmer */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.04), transparent 60%)' }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-4 relative z-10 max-w-4xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        <Lock className="w-3.5 h-3.5" />
                        Live Attendees Only
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        You Also Walk Away With These
                    </h2>
                    <p className="text-slate-400 text-sm max-w-lg mx-auto">
                        Exclusive bonuses available only during the live workshop. Not after. Not on replay.
                    </p>
                </motion.div>

                {/* Bonus Cards */}
                <div className="space-y-4 mb-10">
                    {BONUSES.map(({ icon: Icon, title, detail, value, color }) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            className="flex items-start gap-4 p-5 rounded-2xl bg-slate-900/70 border border-white/[0.06] hover:border-amber-500/20 transition-colors duration-300 group"
                        >
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1 flex-wrap">
                                    <h4 className="font-bold text-white group-hover:text-amber-300 transition-colors">{title}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500/70 bg-amber-500/10 px-2 py-0.5 rounded-full">{value}</span>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">{detail}</p>
                            </div>

                            {/* Gift badge */}
                            <div className="flex-shrink-0 hidden sm:flex">
                                <Gift className="w-5 h-5 text-amber-500/40 group-hover:text-amber-400 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scarcity / Asymmetry callout */}
                <motion.div variants={fadeUp} className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 text-sm text-slate-400">
                        <Flame className="w-4 h-4 text-amber-500" />
                        <span>Combined value: <strong className="text-white">₹11,497</strong> — yours free, live only</span>
                    </div>
                </motion.div>

                {/* CTA (escalated — implies readiness, not curiosity) */}
                <motion.div variants={fadeUp} className="text-center">
                    <RegisterButton variant="glow" size="lg">
                        Claim My Free Seat + Bonuses
                    </RegisterButton>
                    <p className="text-xs text-slate-600 mt-3">No credit card. No catch. Just show up live.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
