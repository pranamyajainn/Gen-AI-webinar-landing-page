'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Award, Globe } from 'lucide-react';
import Image from 'next/image';

const CREDENTIALS = [
    { icon: Briefcase, label: '10+ years in tech & automation' },
    { icon: Users, label: 'Trained 1M+ professionals globally' },
    { icon: Award, label: 'Featured in 50+ industry platforms' },
    { icon: Globe, label: 'Students in 150+ countries' },
];

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

export default function InstructorAuthority() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="instructor" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
            {/* Subtle radial */}
            <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(99,102,241,0.1), transparent 60%)' }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-4 relative z-10 max-w-5xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Meet Your Instructor
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">Not a guru. A practitioner who teaches what he uses daily.</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                    {/* Photo */}
                    <motion.div variants={fadeUp} className="w-full lg:w-5/12 flex-shrink-0">
                        <div className="relative max-w-xs mx-auto">
                            {/* Gradient ring */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent blur-sm" />
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                                <Image
                                    src="/instructor.png"
                                    alt="Workshop Instructor"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 280px, 320px"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Copy */}
                    <motion.div variants={container} className="w-full lg:w-7/12 space-y-6">
                        {/* Credentials grid */}
                        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                            {CREDENTIALS.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-slate-900/60 border border-white/[0.05] rounded-lg px-3 py-2.5">
                                    <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-xs text-slate-400 font-medium">{label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Bio */}
                        <motion.div variants={fadeUp} className="space-y-3">
                            <p className="text-slate-300 leading-relaxed">
                                With over a decade in technology and business automation, I&apos;ve helped founders, executives, and teams
                                integrate AI into their daily workflows — not as a novelty, but as a <strong className="text-white">force multiplier</strong>.
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I don&apos;t teach theory you&apos;ll forget by next week. I teach the exact systems I use every day to
                                run my own business — from drafting content to analysing data to building presentations in minutes.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.div variants={fadeUp} className="relative">
                            <div className="border-l-2 border-indigo-500/40 pl-4 py-1">
                                <p className="text-slate-300 italic text-sm leading-relaxed">
                                    &ldquo;My goal is simple: give you back your time so you can focus on the work that actually matters.&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
