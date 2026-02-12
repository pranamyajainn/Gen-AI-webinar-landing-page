'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RegisterButton from '@/components/RegisterButton';
import Image from 'next/image';

const cards = [
    {
        title: "Write Emails in Seconds",
        sub: "Draft, reply, and tone-check instantly.",
        bg: "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20",
        image: "/images/speed_email.png"
    },
    {
        title: "Research Like a Pro",
        sub: "Summarize 100-page PDFs in 30 seconds.",
        bg: "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20",
        image: "/images/speed_research.png"
    },
    {
        title: "Create Pitch Decks",
        sub: "From text prompt to full slide deck.",
        bg: "bg-gradient-to-br from-pink-500/10 to-rose-500/10 border-pink-500/20",
        image: "/images/speed_pitch_deck.png"
    },
    {
        title: "Analyze Complex Data",
        sub: "Excel formulas and insights without coding.",
        bg: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20",
        image: "/images/speed_data_analysis.png"
    },
    {
        title: "Automate Meetings",
        sub: "Transcribe, summarize, and assign tasks auto-magically.",
        bg: "bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20",
        image: "/images/speed_meeting_notes.png"
    }
];

export default function VisualMomentum() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Note: For a true draggable carousel we might use free-scroll or specialized libraries,
    // but for "Visual Momentum" a simple horizontal scroll snap or framer drag is good.
    // We'll use a simple CSS grid with overflow for robustness + Framer for entrance.

    return (
        <section id="visuals-s2" className="py-20 bg-slate-950 relative overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 max-w-2xl mx-auto">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        Speed is the New Currency
                    </h2>
                    <p className="text-slate-400">
                        See what you can achieve in minutes, not hours.
                    </p>
                </div>

                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`min-w-[260px] h-[320px] rounded-2xl border p-6 flex flex-col justify-end relative overflow-hidden snap-center group hover:-translate-y-2 transition-transform duration-300 ${card.bg} border`}
                        >
                            {/* Feature Image */}
                            <div className="absolute top-0 left-0 right-0 h-48 overflow-hidden">
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90 z-10" />
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                                <p className="text-sm text-slate-400 leading-relaxed">{card.sub}</p>
                            </div>
                        </motion.div>

                    ))}
                </div>

                <div className="mt-12 text-center">
                    <RegisterButton variant="glow" size="lg">REGISTER FOR FREE</RegisterButton>
                </div>
            </div>
        </section>
    );
}
