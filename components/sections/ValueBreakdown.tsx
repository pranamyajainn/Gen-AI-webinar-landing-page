import RegisterButton from '@/components/RegisterButton';
import { CheckCircle2, Gift } from 'lucide-react';

const modules = [
    { title: "Understanding Generative AI", outcome: "Stop guessing keywords. Learn the fundamental structure behind every successful prompt." },
    { title: "AI for Emails & Daily Communication", outcome: "Clear your inbox 10x faster and never write a generic reply again." },
    { title: "Prompting That Actually Works", outcome: "The exact formula to get high-quality outputs from ChatGPT on the first try." },
    { title: "AI for Research & Information", outcome: "Aggregate hours of Google searches into a single, cited summary in seconds." },
    { title: "AI for Excel, Data & Analysis", outcome: "Turn messy spreadsheets into charts, trends, and insights without knowing a single formula." },
    { title: "AI for Presentations & Documents", outcome: "Generate first-draft decks and reports while you grab a coffee." },
    { title: "AI for Ads & Marketing Creatives", outcome: "Produce studio-quality ad copy and visuals at zero cost." },
    { title: "AI for Video & Voice Content", outcome: "Clone your voice and generate video scripts that retain attention." },
    { title: "AI for Website Building", outcome: "Launch a landing page (like this one) in under 30 minutes." },
    { title: "AI for Learning Faster", outcome: "Use AI as your personal 24/7 tutor for any new skill." },
];

export default function ValueBreakdown() {
    return (
        <section id="value-s4" className="py-20 bg-slate-950">
            <div className="container mx-auto px-5 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        What You Will Learn in 90 Minutes
                    </h2>
                    <p className="text-slate-400">
                        No fluff. Just actionable workflows you can use immediately.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto mb-16">
                    {modules.map((mod, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="mt-1">
                                <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1">{mod.title}</h3>
                                <p className="text-slate-400 text-sm">{mod.outcome}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden">
                    {/* Decorative sheen */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                            <Gift className="w-4 h-4" />
                            Live Attendee Bonuses
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 text-left">
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="text-2xl mb-2">🎁</div>
                                <div className="font-bold text-white text-sm">Curated Gold-Standard Prompts Library</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="text-2xl mb-2">🎁</div>
                                <div className="font-bold text-white text-sm">How to Find Hidden AI Tools Guide</div>
                            </div>
                            <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5">
                                <div className="text-2xl mb-2">🎁</div>
                                <div className="font-bold text-white text-sm">Exclusive Image Generation Prompts</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <RegisterButton variant="glow" size="lg">REGISTER FOR FREE</RegisterButton>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
