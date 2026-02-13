'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';

const faqs = [
    { q: "Who is this for?", a: "Anyone who uses a computer for work. Whether you are a Founder, Marketer, HR, or Student, these tools are universal time-savers." },
    { q: "Is this really free?", a: "Yes. No credit card required. We do offer advanced courses, but this workshop is a complete, standalone value-add." },
    { q: "Will there be a recording?", a: "No guarantees. We highly recommend attending live to ask questions and get the bonuses." },
    { q: "Do I need a paid ChatGPT subscription?", a: "No. All workflows demonstrated can be done with free versions or free alternatives." },
    { q: "How do I join?", a: "Click the register button. You will receive a Zoom link via email and WhatsApp." },
    { q: "Is this pre-recorded?", a: "This is a LIVE session. You can interact and ask questions in real-time." },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq-s6" className="py-20 bg-slate-950">
            <div className="container mx-auto px-5 lg:px-8 max-w-3xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-white/10 rounded-xl bg-slate-900/50 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="font-semibold text-white">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-slate-500" />}
                            </button>
                            {openIndex === i && (
                                <div className="px-4 pb-6 md:px-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <RegisterButton variant="default" size="lg">REGISTER FOR FREE</RegisterButton>
                </div>
            </div>
        </section>
    );
}
