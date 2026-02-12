'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RegisterButton from '@/components/RegisterButton';

const ASSETS = [
    {
        title: "Founder Prompt Playbook",
        description: "200+ real prompts structured by business use case — not generic ChatGPT tips.",
        useCases: ["Sales outreach", "Hiring briefs", "Competitive research", "Brand positioning", "Ops workflows"],
    },
    {
        title: "Curated Free AI Stack",
        description: "A vetted directory of free tools that replace paid subscriptions. Every tool tested, categorized, and explained.",
        useCases: ["Writing & editing", "Image generation", "Data analysis", "Presentation design", "Automation"],
    },
    {
        title: "Visual Asset Toolkit",
        description: "Plug-and-play prompt structures for generating visuals you'd actually use in your business.",
        useCases: ["Ad creatives", "Pitch deck graphics", "Social media posts", "Brand assets", "Product mockups"],
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function BonusExclusivity() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="bonus-exclusivity" className="py-20 lg:py-28 bg-slate-950 relative" ref={ref}>
            {/* Subtle top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <motion.div
                className="container mx-auto px-4 relative z-10 max-w-4xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        Included With Your Seat
                    </h2>
                    <p className="text-slate-500 text-base max-w-lg">
                        These resources are shared live during the workshop. No upsell. No paywall. Just practical assets you keep.
                    </p>
                </motion.div>

                {/* Asset Cards */}
                <div className="space-y-5 mb-14">
                    {ASSETS.map((asset, idx) => (
                        <motion.div
                            key={asset.title}
                            variants={fadeUp}
                            className="group p-6 lg:p-8 rounded-2xl bg-slate-900/40 border border-white/[0.05] hover:border-white/[0.1] transition-colors duration-300"
                        >
                            {/* Number + Title */}
                            <div className="flex items-baseline gap-4 mb-3">
                                <span className="text-slate-700 font-mono text-sm font-bold tabular-nums">
                                    0{idx + 1}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:text-slate-100 transition-colors">
                                    {asset.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-slate-400 leading-relaxed mb-4 pl-10">
                                {asset.description}
                            </p>

                            {/* Use Case Tags */}
                            <div className="flex flex-wrap gap-2 pl-10">
                                {asset.useCases.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[11px] font-medium uppercase tracking-wider text-slate-500 bg-slate-800/60 border border-white/[0.04] px-3 py-1 rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div variants={fadeUp} className="text-center">
                    <RegisterButton variant="glow" size="lg">
                        Join The Live Workshop
                    </RegisterButton>
                    <p className="text-xs text-slate-600 mt-3">Free to attend. No credit card required.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
