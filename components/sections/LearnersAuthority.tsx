'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Globe, Star, Building2 } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';

/* ─── Avatar Grid Data ─── */
const AVATARS = [
    { initials: 'AK', color: 'from-violet-500 to-indigo-600' },
    { initials: 'SR', color: 'from-cyan-500 to-blue-600' },
    { initials: 'MJ', color: 'from-pink-500 to-rose-600' },
    { initials: 'PD', color: 'from-amber-500 to-orange-600' },
    { initials: 'NR', color: 'from-emerald-500 to-teal-600' },
    { initials: 'CF', color: 'from-blue-500 to-indigo-600' },
    { initials: 'NT', color: 'from-rose-500 to-pink-600' },
    { initials: 'RP', color: 'from-teal-500 to-emerald-600' },
    { initials: 'LC', color: 'from-orange-500 to-amber-600' },
    { initials: 'TB', color: 'from-purple-500 to-violet-600' },
    { initials: 'KJ', color: 'from-indigo-500 to-blue-600' },
    { initials: 'DW', color: 'from-cyan-400 to-teal-500' },
    { initials: 'MS', color: 'from-pink-400 to-rose-500' },
    { initials: 'RG', color: 'from-violet-400 to-purple-500' },
    { initials: 'AL', color: 'from-emerald-400 to-green-500' },
    { initials: 'JP', color: 'from-amber-400 to-yellow-500' },
    { initials: 'SK', color: 'from-blue-400 to-indigo-500' },
    { initials: 'HM', color: 'from-rose-400 to-red-500' },
    { initials: 'VN', color: 'from-teal-400 to-cyan-500' },
    { initials: 'BL', color: 'from-purple-400 to-indigo-500' },
    { initials: 'GR', color: 'from-orange-400 to-red-500' },
    { initials: 'WC', color: 'from-indigo-400 to-violet-500' },
    { initials: 'PA', color: 'from-emerald-500 to-cyan-500' },
    { initials: 'YT', color: 'from-pink-500 to-violet-500' },
];

const STATS = [
    { icon: Globe, value: '150+', label: 'Countries' },
    { icon: Star, value: '4.9★', label: 'Average Rating' },
    { icon: Building2, value: '500+', label: 'Companies' },
];

/* ─── Animated Counter ─── */
/* ─── Animated Counter ─── */
function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, target, {
            duration: 2.5,
            ease: "easeOut",
            onUpdate: (value) => {
                if (ref.current) {
                    ref.current.textContent = Math.round(value).toLocaleString();
                }
            }
        });
        return () => controls.stop();
    }, [inView, target]);

    return <span ref={ref} />;
}

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function LearnersAuthority() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section
            id="learners-authority"
            ref={ref}
            className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden"
        >
            {/* Background glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-20 blur-[120px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)' }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Main Counter */}
                <motion.div variants={fadeUp} className="text-center mb-10">
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 mb-3 tabular-nums">
                        <AnimatedCounter target={1000000} inView={isInView} />+
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        Learners Already Ahead of You
                    </h2>
                    <p className="text-slate-400 max-w-md mx-auto">
                        Professionals across 150+ countries have already transformed their workflow.
                    </p>
                </motion.div>

                {/* Avatar Grid */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-12"
                >
                    {AVATARS.map(({ initials, color }, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.4 + i * 0.03, duration: 0.3, ease: 'easeOut' as const }}
                            className={`w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-[10px] font-bold text-white shadow-md border border-white/10`}
                        >
                            {initials}
                        </motion.div>
                    ))}
                    {/* Overflow indicator */}
                    <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400">
                        +1M
                    </div>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-10"
                >
                    {STATS.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/[0.06] flex items-center justify-center">
                                <Icon className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-lg font-bold text-white">{value}</div>
                                <div className="text-xs text-slate-500">{label}</div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div variants={fadeUp} className="text-center">
                    <RegisterButton variant="outline" size="lg" className="border-white/10 hover:border-primary/40">
                        Join Them — Register Free
                    </RegisterButton>
                </motion.div>
            </motion.div>
        </section>
    );
}
