'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SHIFTS = [
    {
        before: "Waiting 2 days for a freelancer to return a basic first draft.",
        after: "Writing it yourself in 10 minutes — better than what you'd get back.",
    },
    {
        before: "Googling for an hour before every business decision.",
        after: "Getting a structured summary with sources in under 60 seconds.",
    },
    {
        before: "Paying ₹5,000/month for tools that do one small thing each.",
        after: "Using free AI tools strategically to cover the same ground.",
    },
    {
        before: "Stuck in execution bottlenecks because only your dev can ship.",
        after: "Launching landing pages, emails, and decks without asking anyone.",
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function OutcomeReframe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="outcome-reframe" className="py-20 lg:py-28 bg-slate-950 relative" ref={ref}>
            {/* Subtle divider line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <motion.div
                className="container mx-auto px-4 relative z-10 max-w-4xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="mb-16">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        What Changes In Your <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">Actual Week</span>
                    </h3>
                    <p className="text-slate-500 text-base max-w-lg">
                        Not hypothetical. Not aspirational. This is what Monday looks like after you attend.
                    </p>
                </motion.div>

                {/* Before / After Pairs */}
                <div className="space-y-6">
                    {SHIFTS.map((shift, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            className="group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch"
                        >
                            {/* BEFORE */}
                            <div className="bg-slate-900/50 border border-white/[0.04] rounded-2xl p-6 md:rounded-r-none md:border-r-0 flex flex-col justify-center">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-red-400/70 mb-2">Before</span>
                                <p className="text-slate-400 leading-relaxed text-[15px]">{shift.before}</p>
                            </div>

                            {/* Arrow Divider */}
                            <div className="hidden md:flex items-center justify-center w-14 bg-slate-900/30 border-y border-white/[0.04]">
                                <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 transition-colors duration-300" />
                            </div>
                            <div className="flex md:hidden items-center justify-center py-1">
                                <ArrowRight className="w-5 h-5 text-slate-600 rotate-90" />
                            </div>

                            {/* AFTER */}
                            <div className="bg-indigo-500/[0.04] border border-indigo-500/10 rounded-2xl p-6 md:rounded-l-none md:border-l-0 flex flex-col justify-center">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-indigo-400/70 mb-2">After</span>
                                <p className="text-white leading-relaxed text-[15px] font-medium">{shift.after}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom line */}
                <motion.div variants={fadeUp} className="mt-14 pt-8 border-t border-white/[0.04]">
                    <p className="text-slate-600 text-sm text-center">
                        Same you. Same hours. Completely different output.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
