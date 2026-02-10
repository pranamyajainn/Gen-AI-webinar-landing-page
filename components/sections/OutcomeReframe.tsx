'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, DollarSign, TrendingUp, Sparkles } from 'lucide-react';

const OUTCOMES = [
    {
        icon: Clock,
        metric: '10+ hrs',
        unit: '/week',
        label: 'Time Reclaimed',
        detail: 'Emails, research, reporting — automated. Your calendar opens up.',
        color: 'text-cyan-400',
        bg: 'bg-cyan-500/10 border-cyan-500/10',
    },
    {
        icon: DollarSign,
        metric: '$0',
        unit: 'cost',
        label: 'Tool Investment',
        detail: 'Every tool covered is free or has a free tier. No subscriptions required.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-500/10 border-emerald-500/10',
    },
    {
        icon: TrendingUp,
        metric: '3×',
        unit: 'output',
        label: 'Productivity Multiplier',
        detail: 'Same team. Same hours. Triple the deliverables. That\'s the leverage.',
        color: 'text-violet-400',
        bg: 'bg-violet-500/10 border-violet-500/10',
    },
    {
        icon: Sparkles,
        metric: 'Day 1',
        unit: 'ROI',
        label: 'Immediate Application',
        detail: 'No learning curve. Use what you learn before your next meeting.',
        color: 'text-amber-400',
        bg: 'bg-amber-500/10 border-amber-500/10',
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function OutcomeReframe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="outcome-reframe" className="py-14 lg:py-20 bg-slate-900/40 border-y border-white/[0.04] relative" ref={ref}>
            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.div variants={fadeUp} className="text-center mb-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        Translation: What This Actually Means For You
                    </h3>
                    <p className="text-slate-500 text-sm max-w-md mx-auto">
                        Forget &ldquo;AI skills.&rdquo; Here&apos;s what changes Monday morning.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-4xl mx-auto"
                >
                    {OUTCOMES.map(({ icon: Icon, metric, unit, label, detail, color, bg }) => (
                        <motion.div
                            key={label}
                            variants={fadeUp}
                            className={`rounded-xl border p-5 text-center hover:-translate-y-1 transition-transform duration-300 ${bg}`}
                        >
                            <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-950/50 mb-3 ${color}`}>
                                <Icon className="w-5 h-5" />
                            </div>
                            <div className="mb-1">
                                <span className={`text-2xl lg:text-3xl font-extrabold ${color}`}>{metric}</span>
                                <span className="text-xs text-slate-500 ml-1">{unit}</span>
                            </div>
                            <div className="text-sm font-bold text-white mb-1">{label}</div>
                            <p className="text-xs text-slate-500 leading-relaxed">{detail}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
