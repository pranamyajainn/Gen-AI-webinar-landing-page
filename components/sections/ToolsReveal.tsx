'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock, Sparkles } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import { ChatGPTIcon, PerplexityIcon, GammaIcon, ClaudeIcon, NotionIcon } from '@/components/ToolIcons';
import { staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

/* ─── Tool Data ─── */
const REVEALED_TOOLS = [
    { name: 'ChatGPT', icon: ChatGPTIcon, color: 'from-emerald-500/15 to-teal-500/15 border-emerald-500/20', iconColor: 'text-emerald-400' },
    { name: 'Perplexity', icon: PerplexityIcon, color: 'from-blue-500/15 to-indigo-500/15 border-blue-500/20', iconColor: 'text-blue-400' },
    { name: 'Gamma', icon: GammaIcon, color: 'from-orange-500/15 to-amber-500/15 border-orange-500/20', iconColor: 'text-orange-400' },
    { name: 'Claude', icon: ClaudeIcon, color: 'from-violet-500/15 to-purple-500/15 border-violet-500/20', iconColor: 'text-violet-400' },
    { name: 'Notion AI', icon: NotionIcon, color: 'from-slate-400/15 to-slate-500/15 border-slate-400/20', iconColor: 'text-slate-200' },
];

const container = staggerContainer(0.08, 0.2);

const cardVariant = {
    hidden: { opacity: 0, y: 16, scale: 0.95 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' as const },
    },
};

export default function ToolsReveal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="tools-s3" className="py-16 lg:py-24 bg-slate-900/50 border-y border-white/5 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at top, rgba(124,58,237,0.06), transparent 60%)' }}
                aria-hidden="true"
            />

            <div className="container mx-auto px-5 lg:px-8 relative z-10">
                {/* "15+" Dominant Number */}
                <div className="text-center mb-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' as const }}
                        className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-gradient-brand leading-none mb-2"
                    >
                        15+
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' as const }}
                        className="text-2xl lg:text-3xl font-bold text-white mb-2"
                    >
                        AI Tools You&apos;ll Master
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-slate-400 max-w-lg mx-auto"
                    >
                        Here are 5 you&apos;ll explore. The rest are revealed exclusively in the live session.
                    </motion.p>
                </div>

                {/* Tool Grid */}
                <motion.div
                    className="grid grid-cols-3 sm:grid-cols-5 gap-3 lg:gap-5 max-w-4xl mx-auto mb-4"
                    variants={container}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {/* Revealed Tools */}
                    {REVEALED_TOOLS.map((tool) => (
                        <motion.div
                            key={tool.name}
                            variants={cardVariant}
                            className={cn('aspect-square rounded-2xl bg-gradient-to-br border flex flex-col items-center justify-center gap-2.5 group hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm', tool.color)}
                        >
                            <tool.icon className={cn('w-8 h-8 lg:w-10 lg:h-10 group-hover:scale-110 transition-transform duration-300', tool.iconColor)} />
                            <span className="font-semibold text-white text-sm lg:text-base">{tool.name}</span>
                        </motion.div>
                    ))}

                    {/* Blurred / Locked Tools — exclusivity, not censorship */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <motion.div
                            key={`locked-${i}`}
                            variants={cardVariant}
                            className="aspect-square rounded-2xl bg-slate-800/40 border border-white/[0.04] flex items-center justify-center relative overflow-hidden group hover:border-primary/20 hover:shadow-md hover:shadow-violet-500/5 transition-all duration-300"
                        >
                            {/* Subtle glass blur — not heavy */}
                            <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-br from-slate-800/60 to-slate-900/80" />

                            <div className="relative z-10 flex flex-col items-center gap-1.5 opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                                <Sparkles className="w-5 h-5 text-slate-400" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Live Only</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Register-to-Unlock CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-center mt-10"
                >
                    <div className="inline-block p-[1.5px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mb-4">
                        <div className="bg-slate-900 rounded-full px-6 py-2.5 flex items-center gap-2.5">
                            <Lock className="w-4 h-4 text-cyan-400" />
                            <span className="text-white font-medium text-sm">Register to unlock the full stack</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <RegisterButton variant="glow" size="lg">
                            Unlock All 15+ Tools — Register Free
                        </RegisterButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
