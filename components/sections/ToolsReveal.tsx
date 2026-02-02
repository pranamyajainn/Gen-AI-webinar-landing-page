'use client';
import RegisterButton from '@/components/RegisterButton';
import { Lock } from 'lucide-react';

const revealedTools = [
    { name: 'Multi', icon: 'M' },
    { name: 'Numerous', icon: 'N' },
    { name: 'Tome', icon: 'T' },
    { name: 'ChatGPT', icon: 'C' },
    { name: 'Emily', icon: 'E' },
];

export default function ToolsReveal() {
    return (
        <section id="tools-s3" className="py-20 bg-slate-900 border-b border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                        We Don't Gatekeep.
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Here are 5 of the 15+ tools you will master. The rest are revealed live.
                    </p>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 lg:gap-8 max-w-4xl mx-auto mb-12">
                    {revealedTools.map((tool) => (
                        <div key={tool.name} className="aspect-square rounded-2xl bg-slate-800 border border-white/10 flex flex-col items-center justify-center gap-2 group hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-white group-hover:bg-primary group-hover:scale-110 transition-all">
                                {tool.icon}
                            </div>
                            <span className="font-medium text-slate-300 text-sm">{tool.name}</span>
                        </div>
                    ))}

                    {/* Blurred / Locked Tools */}
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div key={i} className="aspect-square rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 blur-xl bg-slate-700/30"></div>
                            <div className="relative z-10 flex flex-col items-center gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Lock className="w-8 h-8 text-slate-500" />
                                <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Locked</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <div className="bg-slate-900 rounded-full px-6 py-2 flex items-center gap-2">
                        <Lock className="w-4 h-4 text-pink-500" />
                        <span className="text-white font-medium text-sm">Register to Unlock the Full Stack</span>
                    </div>
                </div>

                <div className="mt-8">
                    <RegisterButton variant="default" size="lg">REGISTER FOR FREE</RegisterButton>
                </div>
            </div>
        </section>
    );
}
