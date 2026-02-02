'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';

const quotes = [
    {
        text: "Cut my weekly reporting time from 6 hours to under 90 minutes. Essential for any PM.",
        author: "Priya S.",
        role: "Growth PM, Fintech"
    },
    {
        text: "I thought I knew ChatGPT, but the tools revealed here were on another level.",
        author: "David K.",
        role: "Founder, Agency"
    },
    {
        text: "Direct, actionable, and zero fluff. The best 90 minutes I spent this year.",
        author: "Sarah L.",
        role: "Marketing Director"
    }
];

export default function QuoteCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % quotes.length);
    const prev = () => setIndex((i) => (i - 1 + quotes.length) % quotes.length);

    return (
        <section id="sp-2" className="py-16 bg-slate-900 border-y border-white/5 relative">
            <div className="container mx-auto px-4 max-w-4xl">
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
