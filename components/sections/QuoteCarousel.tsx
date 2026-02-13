'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';

const quotes = [
    {
        text: "I went from working 70 hours a week to 45 by implementing just two of the workflows here. It felt like cheating.",
        author: "Arjun M.",
        role: "Founder, Stealth Startup"
    },
    {
        text: "I fired my $5k/mo agency because I realized I could do a better job myself in 30 minutes with this stack.",
        author: "Sarah L.",
        role: "DTC Founder"
    },
    {
        text: "Finally, a workshop that respects a founder's time. Zero fluff, just lethal workflows.",
        author: "David K.",
        role: "SaaS Founder"
    }
];

export default function QuoteCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % quotes.length);
    const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

    return (
        <section id="sp-2" className="py-16 bg-slate-900 border-y border-white/5 relative">
            <div className="container mx-auto px-5 lg:px-8 max-w-4xl">
                <div className="text-center">
                    <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />

                    <div className="min-h-[160px] flex items-center justify-center">
                        <p className="text-xl md:text-2xl font-medium text-slate-200 italic leading-relaxed">
                            "{quotes[index].text}"
                        </p>
                    </div>

                    <div className="mt-6">
                        <div className="font-bold text-white">{quotes[index].author}</div>
                        <div className="text-sm text-primary">{quotes[index].role}</div>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <button onClick={prev} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={next} className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
