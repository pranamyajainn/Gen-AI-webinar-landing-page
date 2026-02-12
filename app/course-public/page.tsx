'use client';
import { Button } from '@/components/ui/Button';
import ValueStackInfographic from '@/components/upsell/ValueStackInfographic';
import { Check, ShieldCheck, CreditCard, ArrowRight } from 'lucide-react';

export default function CoursePublicPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">

            {/* Nav Placeholder */}
            <div className="border-b border-white/10 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-white text-xl">AI Mastery<span className="text-indigo-500">.</span> Academy</div>
                    <Button variant="outline" size="sm" className="hidden sm:flex">Login</Button>
                </div>
            </div>

            <main className="container mx-auto px-4 py-12 lg:py-20">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start max-w-7xl mx-auto">

                    {/* LEFT: Sales Copy */}
                    <div className="lg:col-span-7 space-y-8">
                        <div>
                            <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/20">
                                Public Enrollment Open
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                                Become The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Expert</span> In Your Industry
                            </h1>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                A complete, 4-week implementation program to master Generative AI, automate your workflows, and build future-proof skills. This is not just a course—it's a career transformation system.
                            </p>
                        </div>

                        {/* Feature Bullets */}
                        <div className="space-y-4">
                            <Feature text="Master ChatGPT, Midjourney, and 20+ Enterprise Tools" />
                            <Feature text="Build Custom AI Agents & Automation Pipelines" />
                            <Feature text="Certified AI Practitioner Accreditation" />
                            <Feature text="Lifetime Access to All Future Updates" />
                        </div>

                        {/* Pricing Block (Anchor) */}
                        <div className="p-8 rounded-2xl bg-slate-900 border border-white/10 mt-8">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                                <div>
                                    <div className="text-slate-400 text-sm font-medium mb-1">Standard Enrollment</div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl font-bold text-white">₹24,999</span>
                                        <span className="text-slate-500 text-sm">/ Lifetime</span>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <div className="text-emerald-400 text-sm font-bold flex items-center gap-1 justify-end">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        Slots Available
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full text-lg h-14 bg-white text-slate-950 hover:bg-slate-200">
                                Enroll Now at Standard Price
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <div className="flex items-center justify-center gap-6 mt-4 opacity-60">
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Money Back Guarantee
                                </div>
                                <div className="flex items-center gap-2 text-xs text-slate-400">
                                    <CreditCard className="w-3.5 h-3.5" /> Secure Payment
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT: Value Stack Infographic */}
                    <div className="lg:col-span-5 sticky top-24">
                        <ValueStackInfographic />
                    </div>

                </div>
            </main>
        </div>
    );
}

function Feature({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <div className="mt-1 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-indigo-400" />
            </div>
            <span className="text-slate-300 font-medium">{text}</span>
        </div>
    );
}
