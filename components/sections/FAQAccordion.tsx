'use client';
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '@/lib/motion';
import { cn } from '@/lib/utils';

const FAQS = [
    {
        q: "I\u0027m not technical at all. Will I be lost?",
        a: "This workshop is built specifically for non-technical professionals \u2014 founders, managers, marketers. Every tool is demonstrated step-by-step. If you can use Google Docs, you can follow along.",
    },
    {
        q: "I don\u0027t have 90 minutes to spare right now.",
        a: "Understood. But consider: these 90 minutes will save you 10+ hours every week going forward. That\u0027s 500+ hours a year. One session now buys back months of your future calendar.",
    },
    {
        q: "Is this actually free? What\u0027s the catch?",
        a: "No catch. No credit card. No upsell during the session. We offer advanced programmes, but this workshop delivers standalone value. 1M+ people have attended without spending a rupee.",
    },
    {
        q: "Do I need paid AI tools or subscriptions?",
        a: "No. Every tool covered has a free tier or is completely free. You won\u0027t need to pay for anything to apply what you learn.",
    },
    {
        q: "Will there be a recording available?",
        a: "The bonuses and live Q\u0026A are exclusive to the live session. We can\u0027t guarantee a recording, so attending live is the safest way to capture full value.",
    },
    {
        q: "How is this different from YouTube tutorials?",
        a: "YouTube teaches isolated tricks. This workshop gives you a complete, end-to-end system \u2014 10 workflows connected into a daily operating playbook. Plus, you can ask questions in real time.",
    },
    {
        q: "I\u0027ve tried AI before and it didn\u0027t work for me.",
        a: "Most people fail with AI because they use generic prompts. This workshop teaches a structured prompting method that produces reliable results on the first try. It\u0027s the \u0022formula\u0022 that changes everything.",
    },
];

const container = staggerContainer(0.06, 0.1);

function AccordionItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
    return (
        <motion.div
            variants={fadeUp}
            className={cn('border rounded-xl overflow-hidden transition-all duration-300', isOpen ? 'border-indigo-500/25 bg-white/[0.04] backdrop-blur-xl border-l-2 border-l-indigo-500/50 shadow-lg shadow-indigo-500/5' : 'border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.03]')}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-5 text-left group"
                aria-expanded={isOpen}
            >
                <span className={cn('font-semibold text-sm transition-colors duration-200', isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white')}>
                    {q}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="flex-shrink-0 ml-3"
                >
                    <ChevronDown className={cn('w-4 h-4 transition-colors duration-200', isOpen ? 'text-indigo-400' : 'text-slate-600')} />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/[0.04] pt-3">
                            {a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section id="faq" className="py-16 lg:py-24 bg-slate-950 relative section-glow-purple" ref={ref}>
            <motion.div
                className="container mx-auto px-5 lg:px-8 max-w-3xl relative z-10"
                variants={container}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* Header */}
                <motion.div variants={fadeUp} className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-slate-800/50 text-slate-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-3.5 h-3.5" />
                        Questions Before You Join
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        Still Thinking It Over?
                    </h2>
                    <p className="text-slate-400 text-sm max-w-md mx-auto">
                        Here are the most common concerns — answered honestly.
                    </p>
                </motion.div>

                {/* Accordion */}
                <motion.div variants={container} className="space-y-3">
                    {FAQS.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            q={faq.q}
                            a={faq.a}
                            isOpen={openIndex === i}
                            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
