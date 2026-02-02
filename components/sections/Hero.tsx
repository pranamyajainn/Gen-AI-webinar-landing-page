import RegisterButton from '@/components/RegisterButton';
import { ArrowRight, Star, Clock } from 'lucide-react';

export default function Hero() {
    return (
        <section id="hero-s1" className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="space-y-6 text-center lg:text-left z-10">

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Live Workshop
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                            Learn 15+ <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">AI Tools</span> to Save Time & Supercharge Your Skills
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0">
                            In this 90-minute workshop, master the tools you need to stay relevant in 2026. Stop watching from the sidelines.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <RegisterButton size="lg" variant="glow" className="w-full sm:w-auto group">
                                REGISTER FOR FREE
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </RegisterButton>
                            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                                <Clock className="h-4 w-4 text-primary" />
                                <span>90 Minutes</span>
                            </div>
                        </div>

                        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm font-medium text-slate-300">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-slate-700 flex items-center justify-center text-xs">
                                        {/* Placeholder avatars */}
                                        <span className="sr-only">User {i}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                    <Star className="h-4 w-4 fill-current" />
                                </div>
                                <span>Trusted by professionals</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Video/Visual */}
                    <div className="relative group perspective-1000">
                        <div className="relative rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm p-2 shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700 ease-out">
                            <div className="aspect-video rounded-xl bg-slate-800 overflow-hidden relative">
                                {/* [HERO_VIDEO_MP4] Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                                    <span className="text-lg">[HERO_VIDEO_MP4]</span>
                                </div>
                                {/* Fake UI Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-primary rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>
                    </div>

                </div>
            </div>
        </section>
    )
}
