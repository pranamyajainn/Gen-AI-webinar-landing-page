'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, BarChart3, FileText, Megaphone, Video, Globe, Lightbulb, Zap, Brain, Search } from 'lucide-react';

/* ─── Value Clusters ─── */
const CLUSTERS = [
    {
        label: 'Communication',
        color: 'from-cyan-500 to-blue-600',
        border: 'border-cyan-500/15',
        items: [
            { icon: Brain, title: 'Understanding Generative AI', outcome: 'Stop guessing. Learn the fundamental structure behind every successful prompt.' },
            { icon: Mail, title: 'AI for Emails & Communication', outcome: 'Clear your inbox 10× faster. Never write a generic reply again.' },
            { icon: Zap, title: 'Prompting That Actually Works', outcome: 'The exact formula to get high-quality outputs on the first try.' },
        ],
    },
    {
        label: 'Research & Analysis',
        color: 'from-violet-500 to-purple-600',
        border: 'border-violet-500/15',
        items: [
            { icon: Search, title: 'AI for Research & Information', outcome: 'Aggregate hours of Google searches into a single cited summary in seconds.' },
            { icon: BarChart3, title: 'AI for Excel, Data & Analysis', outcome: 'Turn messy spreadsheets into charts, trends, and insights — no formulas needed.' },
        ],
    },
    {
        label: 'Content & Creative',
        color: 'from-pink-500 to-rose-600',
        border: 'border-pink-500/15',
        items: [
            { icon: FileText, title: 'AI for Presentations & Docs', outcome: 'Generate first-draft decks and reports while you grab a coffee.' },
            { icon: Megaphone, title: 'AI for Ads & Marketing', outcome: 'Produce studio-quality ad copy and visuals at zero cost.' },
            { icon: Video, title: 'AI for Video & Voice Content', outcome: 'Clone your voice and generate video scripts that retain attention.' },
        ],
    },
    {
        label: 'Operations & Growth',
        color: 'from-emerald-500 to-teal-600',
        border: 'border-emerald-500/15',
        items: [
            { icon: Globe, title: 'AI for Website Building', outcome: 'Launch a landing page in under 30 minutes — no developer needed.' },
            { icon: Lightbulb, title: 'AI for Learning Faster', outcome: 'Use AI as your personal 24/7 tutor for any new skill or domain.' },
        ],
    },
];

const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ValueStack() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="value-stack" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(ellipse at bottom left, rgba(124,58,237,0.12), transparent 60%)' }}
                aria-hidden="true"
            />

            <motion.div
                className="container mx-auto px-4 relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="text-center mb-14 max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-300 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        <Zap className="w-3.5 h-3.5" />
                        90 Minutes. 10 Modules.
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                        Here&apos;s What You Walk Away With
                    </h2>
                    <p className="text-slate-400">
                        Not theory. Not slides. Actionable playbooks you&apos;ll use the same day.
                    </p>
                </motion.div>

                {/* Cluster Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {CLUSTERS.map((cluster) => (
                        <motion.div
                            key={cluster.label}
                            variants={fadeUp}
                            className={`rounded-2xl bg-slate-900/60 border ${cluster.border} p-6 hover:bg-slate-900/80 transition-colors duration-300`}
                        >
                            {/* Cluster Label */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cluster.color}`} />
                                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                                    {cluster.label}
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {cluster.items.map(({ icon: Icon, title, outcome }) => (
                                    <div key={title} className="flex gap-3 group">
                                        <div className="mt-0.5 flex-shrink-0">
                                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${cluster.color} bg-opacity-10 flex items-center justify-center`}>
                                                <Icon className="w-4 h-4 text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-white mb-0.5 group-hover:text-violet-300 transition-colors">{title}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{outcome}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
