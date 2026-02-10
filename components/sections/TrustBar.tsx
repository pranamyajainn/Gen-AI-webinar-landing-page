'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const BRANDS = ['Google', 'Microsoft', 'Uber', 'Notion', 'Spotify', 'Stripe'];

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
};

const itemVariant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' as const },
    },
};

export default function TrustBar() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-40px' });

    return (
        <section id="sp-1" className="relative py-8 overflow-hidden" ref={ref}>
            {/* Top separator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="container mx-auto px-4">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center text-[11px] font-medium text-slate-500 mb-6 uppercase tracking-[0.2em]"
                >
                    Trusted by professionals from
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {BRANDS.map((brand) => (
                        <motion.div
                            key={brand}
                            variants={itemVariant}
                            className="text-lg md:text-xl font-bold font-mono text-white/25 hover:text-white/70 transition-colors duration-500 cursor-default select-none"
                        >
                            {brand}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom separator */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
