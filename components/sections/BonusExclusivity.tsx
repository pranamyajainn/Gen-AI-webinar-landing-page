'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RegisterButton from '@/components/RegisterButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

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

const container = staggerContainer(0.15);

export default function BonusExclusivity() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="bonus-exclusivity" className="py-20 lg:py-28 bg-slate-950 relative section-glow-purple" ref={ref}>
            {/* Subtle top divider */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <motion.div
                className="container mx-auto px-5 lg:px-8 relative z-10 max-w-4xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="mb-14">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                        Included With Your Seat
                    </h2>
                    <p className="text-slate-400 text-base max-w-lg">
                        These resources are shared live during the workshop. No upsell. No paywall. Just practical assets you keep.
                    </p>
                </motion.div>

                {/* Asset Cards */}
                <div className="space-y-5 mb-14">
                    {ASSETS.map((asset, idx) => (
                        <motion.div
                            key={asset.title}
                            variants={fadeUp}
                            className="group p-6 lg:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.14] hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            {/* Number + Title */}
                            <div className="flex items-baseline gap-4 mb-3">
                                <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-violet-500 font-mono text-sm font-bold tabular-nums">
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
                                        className="text-[11px] font-medium uppercase tracking-wider text-slate-400 bg-slate-800/60 border border-white/[0.06] px-3 py-1 rounded-full hover:border-indigo-500/20 transition-colors duration-200"
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
