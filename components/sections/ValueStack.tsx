'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Brain, Rocket, Globe, Layers } from 'lucide-react';

/* ─── Founder Leverage Pillars ─── */
const LEVERAGE_PILLARS = [
    {
        icon: Brain,
        title: "Think in AI, Not Prompts",
        outcome: "Stop guessing. Learn the mental model behind every successful output so you never struggle with a blank page again.",
        gradient: "from-violet-500/20 to-fuchsia-500/20",
        border: "border-violet-500/20",
        iconColor: "text-violet-400"
    },
    {
        icon: Zap,
        title: "Move 10x Faster Without Hiring",
        outcome: "Replace repetitive writing, research, and data crunching instantly. Do the work of a team of 5, solo.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        icon: Rocket,
        title: "Ship Campaigns in Hours",
        outcome: "Generate studio-quality ads, landing pages, and email sequences without waiting on agencies.",
        gradient: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/20",
        iconColor: "text-amber-400"
    },
    {
        icon: Layers,
        title: "Build Assets Without Code",
        outcome: "Launch lead magnets, automations, and websites in minutes. Take full control of your tech stack.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/20",
        iconColor: "text-emerald-400"
    }
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function ValueStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="value-stack" className="py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                        <Globe className="w-3.5 h-3.5" />
                        Founder Leverage Framework
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Stop delegating to people. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            Start delegating to AI.
                        </span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        This isn't just about learning tools. It's about installing a new operating system for your business that defaults to speed.
                    </motion.p>
                </div>

                {/* Leverage Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {LEVERAGE_PILLARS.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            variants={fadeUp}
                            className={`group relative p-8 rounded-3xl bg-slate-900/40 border ${pillar.border} hover:bg-slate-900/60 transition-all duration-500`}
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    <pillar.icon className={`w-6 h-6 ${pillar.iconColor}`} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {pillar.outcome}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Hook */}
                <motion.div variants={fadeUp} className="mt-16 text-center">
                    <p className="text-slate-500 text-sm italic">
                        "If I attend this, I stop depending on everyone else."
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}
