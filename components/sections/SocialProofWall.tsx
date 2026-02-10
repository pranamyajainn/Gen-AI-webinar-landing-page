'use client';
import { Star } from 'lucide-react';

/* ─── Testimonial Data (12+ realistic entries) ─── */
const TESTIMONIALS_ROW_1 = [
    { name: 'Ankit M.', role: 'CEO, SaaS Startup', text: 'Cut my weekly reporting from 6 hours to 90 minutes. Absolute game-changer for any founder.', rating: 5, color: 'from-violet-500 to-indigo-600' },
    { name: 'Sarah L.', role: 'Marketing Director', text: 'Direct, actionable, and zero fluff. The best 90 minutes I spent this year.', rating: 5, color: 'from-cyan-500 to-blue-600' },
    { name: 'David K.', role: 'Founder, Creative Agency', text: 'I thought I knew ChatGPT, but the tools revealed here were on another level entirely.', rating: 5, color: 'from-pink-500 to-rose-600' },
    { name: 'Priya S.', role: 'Growth PM, Fintech', text: 'My team adopted 4 tools the same week. ROI was immediate and measurable.', rating: 5, color: 'from-amber-500 to-orange-600' },
    { name: 'James W.', role: 'VP Operations', text: 'Finally an AI workshop that doesn\'t assume I can code. Practical from minute one.', rating: 5, color: 'from-emerald-500 to-teal-600' },
    { name: 'Meera R.', role: 'Founder, EdTech', text: 'I registered skeptically. Left as a convert. Now my entire company is attending.', rating: 5, color: 'from-violet-500 to-purple-600' },
];

const TESTIMONIALS_ROW_2 = [
    { name: 'Carlos F.', role: 'COO, Retail Chain', text: 'The Excel automation alone saved our finance team 15 hours a week. Insane.', rating: 5, color: 'from-blue-500 to-indigo-600' },
    { name: 'Nina T.', role: 'Strategy Consultant', text: 'I\'ve attended 10+ AI webinars. This was the only one with live demos, not slides.', rating: 5, color: 'from-rose-500 to-pink-600' },
    { name: 'Raj P.', role: 'CTO, HealthTech', text: 'Even as a technical person, I discovered tools I\'d never heard of. Highly recommended.', rating: 5, color: 'from-teal-500 to-emerald-600' },
    { name: 'Lisa Chen', role: 'Head of Sales', text: 'Outreach emails that used to take hours now take minutes. My close rate jumped 23%.', rating: 5, color: 'from-orange-500 to-amber-600' },
    { name: 'Tom B.', role: 'Freelance Designer', text: 'Pitch decks from text prompts? I was skeptical until I saw it live. Mind blown.', rating: 4, color: 'from-purple-500 to-violet-600' },
    { name: 'Aisha K.', role: 'CEO, D2C Brand', text: 'Mandatory for any non-technical founder who wants to stay competitive in 2026.', rating: 5, color: 'from-indigo-500 to-blue-600' },
];

/* ─── Testimonial Card ─── */
function TestimonialCard({ name, role, text, rating, color }: {
    name: string; role: string; text: string; rating: number; color: string;
}) {
    const initials = name.split(' ').map(n => n[0]).join('');
    return (
        <div className="flex-shrink-0 w-[340px] p-5 rounded-2xl bg-slate-900/80 border border-white/[0.06] backdrop-blur-sm hover:border-white/10 transition-colors duration-300 group">
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                    {initials}
                </div>
                <div>
                    <div className="font-semibold text-white text-sm">{name}</div>
                    <div className="text-xs text-slate-500">{role}</div>
                </div>
                <div className="ml-auto flex text-yellow-400">
                    {[...Array(rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                &ldquo;{text}&rdquo;
            </p>
        </div>
    );
}

/* ─── Marquee Row ─── */
function MarqueeRow({ testimonials, direction }: { testimonials: typeof TESTIMONIALS_ROW_1; direction: 'left' | 'right' }) {
    const doubled = [...testimonials, ...testimonials];
    return (
        <div className="overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className={`flex gap-5 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} pause-on-hover`}>
                {doubled.map((t, i) => (
                    <TestimonialCard key={`${t.name}-${i}`} {...t} />
                ))}
            </div>
        </div>
    );
}

export default function SocialProofWall() {
    return (
        <section id="sp-wall" className="py-16 lg:py-20 bg-slate-950 relative overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{ background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.08), transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="container mx-auto px-4 mb-10">
                <h2 className="text-center text-3xl lg:text-4xl font-bold text-white mb-3">
                    Don&apos;t Just Take Our Word For It
                </h2>
                <p className="text-center text-slate-400 max-w-lg mx-auto">
                    Hear from founders, leaders, and professionals who transformed their workflow.
                </p>
            </div>

            <div className="space-y-5">
                <MarqueeRow testimonials={TESTIMONIALS_ROW_1} direction="left" />
                <MarqueeRow testimonials={TESTIMONIALS_ROW_2} direction="right" />
            </div>
        </section>
    );
}
