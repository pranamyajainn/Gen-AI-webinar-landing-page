'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

const REASSURANCES = [
    'Free to attend — no credit card, no hidden fees',
    'Works with tools you already have — nothing to install',
    'Designed for non-technical professionals',
    'Actionable from day one — no homework required',
];

const container = staggerContainer(0.08, 0.15);

export default function ConfidenceReinforcement() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="confidence" className="py-14 lg:py-20 bg-slate-900/30 border-y border-white/[0.04] relative section-glow-cyan" ref={ref}>
            <motion.div
                className="container mx-auto px-5 lg:px-8 max-w-2xl text-center relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Shield icon */}
                <motion.div variants={fadeUp} className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/15 mb-5">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </motion.div>

                <motion.h2 variants={fadeUp} className="text-xl lg:text-2xl font-bold text-white mb-2">
                    Zero Risk. Full Upside.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
                    You&apos;re 90 minutes away from a fundamentally different way of working.
                </motion.p>

                {/* Reassurance chips */}
                <motion.div variants={container} className="flex flex-wrap justify-center gap-2.5 mb-8">
                    {REASSURANCES.map((text) => (
                        <motion.div
                            key={text}
                            variants={fadeUp}
                            className="inline-flex items-center gap-1.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-full px-3.5 py-1.5 text-xs text-slate-400 hover:bg-white/[0.06] hover:scale-[1.02] transition-all duration-200"
                        >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70" />
                            {text}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Calm CTA */}
                <motion.div variants={fadeUp}>
                    <RegisterButton variant="default" size="lg">
                        I&apos;m Ready — Save My Seat
                    </RegisterButton>
                    <p className="text-xs text-slate-600 mt-3">Join 1M+ professionals who already made this decision.</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
