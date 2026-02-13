'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Users, Award, Globe } from 'lucide-react';
import Image from 'next/image';
import { fadeUp, staggerContainer } from '@/lib/motion';

const CREDENTIALS = [
    { icon: Briefcase, label: 'Read & Retain: Insights from multiple books' },
    { icon: Users, label: 'Simplified AI for growing community' },
    { icon: Award, label: 'Mentorship on learning & self-dev' },
    { icon: Globe, label: 'Holistic growth & mindfulness' },
];

const container = staggerContainer(0.08, 0.15);

export default function InstructorAuthority() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="instructor" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden section-glow-cyan" ref={ref}>
            {/* Subtle radial */}
            <div
                className="absolute inset-0 pointer-events-none opacity-15"
                style={{ background: 'radial-gradient(ellipse at top right, rgba(99,102,241,0.1), transparent 60%)' }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-5 lg:px-8 relative z-10 max-w-5xl"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Section Label */}
                <motion.div variants={fadeUp} className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Meet Your Instructor: <span className="text-primary">Shubhang Sethi</span>
                    </h2>
                    <p className="text-slate-500 text-sm mt-2">Teacher, Content Creator &amp; Personal Growth Enthusiast</p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                    {/* Photo */}
                    <motion.div variants={fadeUp} className="w-full lg:w-5/12 flex-shrink-0">
                        <div className="relative max-w-xs mx-auto">
                            {/* Animated glow ring */}
                            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-violet-500/10 to-cyan-500/10 blur-xl animate-pulse" style={{ animationDuration: '4s' }} />
                            {/* Gradient ring */}
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500/30 via-violet-500/20 to-transparent blur-sm" />
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                                <Image
                                    src="/shubhang.webp"
                                    alt="Shubhang Sethi"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 280px, 320px"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Copy */}
                    <motion.div variants={container} className="w-full lg:w-7/12 space-y-6">
                        {/* Credentials grid */}
                        <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                            {CREDENTIALS.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex items-center gap-2.5 bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-lg px-3 py-2.5 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-indigo-500/20 transition-all duration-300 group/cred">
                                    <Icon className="w-4 h-4 text-indigo-400 flex-shrink-0 group-hover/cred:text-indigo-300 transition-colors" />
                                    <span className="text-xs text-slate-400 font-medium group-hover/cred:text-slate-300 transition-colors">{label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Bio */}
                        <motion.div variants={fadeUp} className="space-y-3">
                            <p className="text-slate-300 leading-relaxed">
                                A firm believer in the transformative power of books, Shubhang has designed a system that makes reading smarter, easier, and more impactful.
                            </p>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Through the <strong className="text-white">Speed Reading Masterclass</strong>, he empowers individuals to finish books consistently, retain knowledge, and apply it meaningfully in their personal and professional lives.
                            </p>
                        </motion.div>

                        {/* Quote */}
                        <motion.div variants={fadeUp} className="relative">
                            <div className="border-l-2 border-indigo-500/40 pl-4 py-1">
                                <p className="text-slate-300 italic text-sm leading-relaxed">
                                    &ldquo;Books hold the power to change your life — but only if you know how to truly learn from them.&rdquo;
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
