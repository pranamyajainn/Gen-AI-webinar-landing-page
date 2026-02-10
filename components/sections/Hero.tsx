'use client';
import { motion } from 'framer-motion';
import RegisterButton from '@/components/RegisterButton';
import { ArrowRight, Star, Clock, Play, Users, Zap, Shield } from 'lucide-react';

/* ─── Animation Orchestration ─── */
const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' as const },
    },
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, ease: 'easeOut' as const },
    },
};

/* ─── Data ─── */
const AVATAR_INITIALS = ['AK', 'SR', 'MJ', 'PD', 'NR'];
const AVATAR_COLORS = [
    'from-violet-500 to-indigo-600',
    'from-cyan-500 to-blue-600',
    'from-pink-500 to-rose-600',
    'from-amber-500 to-orange-600',
    'from-emerald-500 to-teal-600',
];

const VIDEO_BADGES = [
    { icon: Clock, label: '90 Min', position: 'top-3 left-3' },
    { icon: Zap, label: '15+ Tools', position: 'top-3 right-3' },
    { icon: Shield, label: '100% Free', position: 'bottom-12 left-3' },
];

export default function Hero() {
    return (
        <section
            id="hero-s1"
            className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden"
        >
            {/* ── Background Layers ── */}
            <div className="absolute inset-0 hero-grid-bg" aria-hidden="true" />
            {/* Radial glow behind headline area */}
            <div
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent 70%)' }}
                aria-hidden="true"
            />
            {/* Secondary glow – right side for video area */}
            <div
                className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.3), transparent 70%)' }}
                aria-hidden="true"
            />

            {/* ── Content Grid ── */}
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <motion.div
                    className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {/* ━━━ LEFT: Content Column ━━━ */}
                    <div className="space-y-8 text-center lg:text-left">

                        {/* Badge */}
                        <motion.div variants={fadeUp} className="flex justify-center lg:justify-start">
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                                </span>
                                Live Workshop — Limited Seats
                            </div>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeUp}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08]"
                        >
                            <span className="text-gradient-hero">Learn 15+ </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
                                AI Tools
                            </span>
                            <br className="hidden sm:block" />
                            <span className="text-gradient-hero"> to Save Time &amp; Supercharge Your Skills</span>
                        </motion.h1>

                        {/* Sub-headline */}
                        <motion.p
                            variants={fadeUp}
                            className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            In this free 90-minute workshop, master the tools you need to stay relevant in 2026.
                            Built for founders, CEOs, and decision-makers — no technical skills required.
                        </motion.p>

                        {/* CTA Row */}
                        <motion.div
                            variants={fadeUp}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                        >
                            <RegisterButton size="magnetic" variant="glow" className="w-full sm:w-auto group">
                                REGISTER FOR FREE
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                            </RegisterButton>
                            <div className="flex items-center gap-2 text-sm text-slate-400">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>90 Minutes • Completely Free</span>
                            </div>
                        </motion.div>

                        {/* Inline Social Proof */}
                        <motion.div
                            variants={fadeUp}
                            className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
                        >
                            {/* Avatar Stack */}
                            <div className="flex -space-x-2.5">
                                {AVATAR_INITIALS.map((initials, i) => (
                                    <div
                                        key={i}
                                        className={`w-9 h-9 rounded-full border-2 border-background bg-gradient-to-br ${AVATAR_COLORS[i]} flex items-center justify-center text-[10px] font-bold text-white shadow-lg`}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                {/* Stars + Rating */}
                                <div className="flex items-center gap-1.5">
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-4 w-4 fill-current" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-semibold text-white">4.9/5</span>
                                </div>

                                <span className="hidden sm:block text-slate-600">•</span>

                                {/* Attendee count */}
                                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                                    <Users className="h-3.5 w-3.5 text-cyan-400" />
                                    <span>
                                        <span className="font-semibold text-white">2,400+</span> attendees
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* ━━━ RIGHT: Video Placeholder ━━━ */}
                    <motion.div variants={scaleIn} className="relative">
                        {/* Outer glow */}
                        <div
                            className="absolute -inset-6 bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-500/10 blur-3xl rounded-3xl -z-10 opacity-60"
                            aria-hidden="true"
                        />

                        {/* Video Frame */}
                        <div className="relative rounded-2xl border border-white/[0.08] bg-slate-900/60 backdrop-blur-sm p-1.5 shadow-2xl surface-glow animate-float">
                            <div className="aspect-video rounded-xl bg-slate-800/80 overflow-hidden relative">

                                {/* Inner subtle gradient */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-transparent to-cyan-900/10 pointer-events-none"
                                    aria-hidden="true"
                                />

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-10">
                                    <button
                                        className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-110 hover:bg-primary transition-all duration-300 cursor-pointer group"
                                        aria-label="Play workshop preview"
                                    >
                                        {/* Ripple rings */}
                                        <span className="absolute inset-0 rounded-full border-2 border-primary/40 animate-ping" style={{ animationDuration: '2s' }} />
                                        <span className="absolute -inset-3 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
                                        <Play className="h-6 w-6 lg:h-8 lg:w-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                                    </button>
                                </div>

                                {/* Trust Micro-Badges */}
                                {VIDEO_BADGES.map(({ icon: Icon, label, position }) => (
                                    <div
                                        key={label}
                                        className={`absolute ${position} z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-sm border border-white/10 text-xs font-medium text-slate-300`}
                                    >
                                        <Icon className="h-3 w-3 text-cyan-400" />
                                        {label}
                                    </div>
                                ))}

                                {/* Progress Bar (visual only) */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-700/50">
                                    <div className="h-full w-0 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Authority Label */}
                        <div className="mt-3 flex justify-center">
                            <p className="text-xs text-slate-500 font-medium tracking-wide">
                                Watch the 2-minute workshop preview
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
