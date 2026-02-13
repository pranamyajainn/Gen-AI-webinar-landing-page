'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Brain, Rocket, Globe, Layers } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

/* ─── Founder Leverage Pillars ─── */
const LEVERAGE_PILLARS = [
    {
        icon: Brain,
        title: "The Inbox Assassin",
        outcome: "Write personal, high-conversion emails in 12 seconds. Clear your inbox before your coffee gets cold.",
        gradient: "from-violet-500/20 to-fuchsia-500/20",
        border: "border-violet-500/20",
        iconColor: "text-violet-400"
    },
    {
        icon: Zap,
        title: "The Ghost Researcher",
        outcome: "Turn 50-page industry reports into 3-bullet action items instantly. Know more than your competitors in 1/10th the time.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        border: "border-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        icon: Rocket,
        title: "The Instant Agency",
        outcome: "Build pitch decks, ad creatives, and campaign assets without waiting on a designer.",
        gradient: "from-amber-500/20 to-orange-500/20",
        border: "border-amber-500/20",
        iconColor: "text-amber-400"
    },
    {
        icon: Layers,
        title: "The Meeting Ghost",
        outcome: "Automate your presence—have AI take notes, assign tasks, and follow up while you focus on strategy.",
        gradient: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-500/20",
        iconColor: "text-emerald-400"
    }
];

const container = staggerContainer(0.15);

export default function ValueStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="value-stack" className="py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                className="container mx-auto px-5 lg:px-8 relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
                        <Globe className="w-3.5 h-3.5" />
                        No More Hiring Fatigue
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                        Install <span className="text-gradient-brand">"The Founder's AI OS"</span> <br />
                        in One Afternoon.
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        This isn't just about learning tools. It's about building a "Ghost Team" that defaults to speed.
                    </motion.p>
                </div>

                {/* Leverage Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                    {LEVERAGE_PILLARS.map((pillar, idx) => (
                        <motion.div
                            key={pillar.title}
                            variants={fadeUp}
                            className={cn('group relative p-8 rounded-3xl bg-white/[0.02] backdrop-blur-sm border hover:bg-white/[0.04] hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500', pillar.border)}
                        >
                            {/* Hover Gradient */}
                            <div className={cn('absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl', pillar.gradient)} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/10 transition-all duration-500 shadow-md">
                                    <pillar.icon className={cn('w-6 h-6', pillar.iconColor)} />
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
                    <p className="text-slate-400 text-sm italic">
                        "If I attend this, I stop depending on everyone else."
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}
