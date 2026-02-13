'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import { fadeUp, staggerContainer } from '@/lib/motion';

const container = staggerContainer(0.12, 0.1);

export default function FinalCommitment() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });

    return (
        <section
            id="final"
            className="relative py-20 lg:py-28 overflow-hidden"
            ref={ref}
        >
            {/* Background gradient — signals page is ending */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(15,23,42,0.6) 40%, rgba(15,23,42,0.6) 60%, rgba(2,6,23,1) 100%)',
                }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-5 lg:px-8 max-w-2xl text-center relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Empathetic headline */}
                <motion.h2
                    variants={fadeUp}
                    className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                >
                    Stop Working <span className="text-indigo-400">In</span> Your Business. <br />
                    Start Working <span className="text-cyan-400">On</span> It.
                </motion.h2>

                <motion.div variants={fadeUp} className="space-y-4 mb-10">
                    <p className="text-slate-400 leading-relaxed">
                        The only difference between a burnt-out founder and a visionary is their operating system.
                        You have the vision. Now give yourself the time to execute it.
                    </p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        This workshop is free, but the 20 hours a week you'll save is priceless.
                    </p>
                </motion.div>

                {/* Final CTA — the most final, not the loudest */}
                <motion.div variants={fadeUp}>
                    <RegisterButton variant="glow" size="lg">
                        <span className="flex items-center gap-2">
                            Register Now — It&apos;s Free
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </RegisterButton>
                    <p className="text-xs text-slate-500 mt-3">
                        No credit card required. Unsubscribe anytime.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
