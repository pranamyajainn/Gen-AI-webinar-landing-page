'use client';
import { motion } from 'framer-motion';
import { Check, Zap, BookOpen, Video, Users, FileText, Crown, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ValueItemProps {
    icon: any;
    title: string;
    value: string;
    delay: number;
}

function ValueItem({ icon: Icon, title, value, delay }: ValueItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="flex items-center justify-between p-4 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm mb-3 group hover:border-white/10 transition-colors"
        >
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-sm font-medium text-slate-200">{title}</div>
            </div>
            <div className="text-sm font-bold text-slate-500 line-through decoration-slate-600/50">
                {value}
            </div>
        </motion.div>
    );
}

export default function ValueStackInfographic({ className }: { className?: string }) {
    return (
        <div className={cn("relative p-6 lg:p-8 rounded-3xl bg-slate-950/50 border border-white/10 overflow-hidden", className)}>
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10">
                <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-1">
                        Everything You Get
                    </h3>
                    <p className="text-slate-400 text-xs">
                        Inside The AI Mastery Course
                    </p>
                </div>

                <div className="space-y-1">
                    <ValueItem icon={Video} title="15+ Hour Video Masterclass" value="₹19,997" delay={0.1} />
                    <ValueItem icon={BookOpen} title="Advanced Prompt Engineering Guide" value="₹4,997" delay={0.2} />
                    <ValueItem icon={Zap} title="Automation Workflows Library" value="₹9,997" delay={0.3} />
                    <ValueItem icon={FileText} title="Copy-Paste Marketing Scripts" value="₹6,997" delay={0.4} />
                    <ValueItem icon={Users} title="Private Community Access" value="₹12,000" delay={0.5} />
                    <ValueItem icon={Crown} title="Weekly Q&A Calls (3 Months)" value="₹25,000" delay={0.6} />

                    {/* Bonus Highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-center"
                    >
                        <div className="flex items-center justify-center gap-2 text-amber-500 mb-1">
                            <Sparkles className="w-4 h-4 fill-current" />
                            <span className="font-bold text-xs uppercase tracking-widest">Fast Action Bonus</span>
                        </div>
                        <div className="text-white font-medium text-sm">
                            "AI Agency" Business in a Box Kit
                        </div>
                        <div className="text-amber-500/60 text-xs font-bold line-through mt-1">Value: ₹15,000</div>
                    </motion.div>
                </div>

                {/* Total Value Summary */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm mb-1 uppercase tracking-widest">Total Value</p>
                    <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        ₹93,988
                    </div>
                </div>
            </div>
        </div>
    );
}
