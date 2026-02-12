'use client';
import { Button } from '@/components/ui/Button';
import ValueStackInfographic from '@/components/upsell/ValueStackInfographic';
import { Check, ShieldCheck, CreditCard, ArrowRight, Clock, AlarmClock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CourseUpsellPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">

            {/* Urgency Banner */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 text-center text-sm font-bold sticky top-0 z-50 shadow-lg">
                <div className="container mx-auto px-4 flex items-center justify-center gap-2">
                    <AlarmClock className="w-4 h-4 animate-pulse" />
                    <span>WEBINAR ATTENDEE SPECIAL: Offer Expires In 14:59 Minutes</span>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">

                    {/* LEFT: Offer Copy */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 border border-emerald-500/20"
                            >
                                Exclusive Attendee Discount Applied
                            </motion.div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                                Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">AI Transformation</span> Today
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                Because you attended the workshop, you've proven you're serious about your career. We're removing the financial barrier so you can start mastering these tools immediately.
                            </p>
                        </div>

                        {/* Feature Bullets */}
                        <div className="space-y-4">
                            <Feature text="Master ChatGPT, Midjourney, and 20+ Enterprise Tools" />
                            <Feature text="Build Custom AI Agents & Automation Pipelines" />
                            <Feature text="Certified AI Practitioner Accreditation" />
                            <Feature text="Lifetime Access to All Future Updates" />
                            <Feature text="BONUS: 1-on-1 Implementation Call (First 50 Only)" highlight />
                        </div>

                        {/* Pricing Block (Offer) */}
                        <div className="p-1 rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 mt-8 shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                            <div className="bg-slate-900 rounded-[14px] p-8 h-full">
                                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                                    <div>
                                        <div className="text-slate-400 text-sm font-medium mb-1">Webinar Special Offer</div>
                                        <div className="flex items-baseline gap-3">
                                            <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">₹4,999</span>
                                            <span className="text-2xl text-slate-600 line-through decoration-slate-600/50">₹24,999</span>
                                        </div>
                                        <div className="text-xs font-bold text-emerald-500 mt-1 uppercase tracking-wider">
                                            You Save 80% Today
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold rounded-full animate-pulse border border-red-500/20">
                                            <Clock className="w-3 h-3" />
                                            Only 3 Spots Left at this Price
                                        </div>
                                    </div>
                                </div>

                                <Button
                                    className="w-full text-lg h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/20 border-t border-white/20"
                                    variant="glow"
                                >
                                    Claim My 80% Discount Now
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>

                                <div className="flex items-center justify-center gap-6 mt-4 opacity-70">
                                    <div className="flex items-center gap-2 text-xs text-slate-400">
                                        <ShieldCheck className="w-3.5 h-3.5" /> 100% Money Back Guarantee
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-slate-400">
                                        <CreditCard className="w-3.5 h-3.5" /> Secure Payment
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: Value Stack Infographic */}
                    <div className="lg:col-span-5 sticky top-24">
                        {/* Added label above the stack for the upsell page */}
                        <div className="text-center mb-4 lg:hidden">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Everything You Get</span>
                        </div>
                        <ValueStackInfographic className="border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.1)]" />
                    </div>

                </div>
            </main>
        </div>
    );
}

function Feature({ text, highlight }: { text: string; highlight?: boolean }) {
    return (
        <div className="flex items-start gap-3">
            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${highlight ? 'bg-amber-500/20' : 'bg-emerald-500/20'}`}>
                <Check className={`w-3 h-3 ${highlight ? 'text-amber-400' : 'text-emerald-400'}`} />
            </div>
            <span className={`font-medium ${highlight ? 'text-white' : 'text-slate-300'}`}>{text}</span>
        </div>
    );
}
