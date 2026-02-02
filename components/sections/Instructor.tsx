import RegisterButton from '@/components/RegisterButton';

export default function Instructor() {
    return (
        <section id="instructor-s5" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">

                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-800 border-border max-w-sm mx-auto shadow-2xl skew-y-1">
                            {/* Placeholder for Instructor Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 bg-slate-900">
                                [INSTRUCTOR_PHOTO]
                            </div>
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 bg-white text-slate-900 px-4 py-2 font-bold rounded-lg shadow-lg">
                                Instructor
                            </div>
                        </div>
                        {/* Background elements */}
                        <div className="absolute w-64 h-64 bg-primary/20 blur-[100px] -z-10 rounded-full" />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Not a "Guru". <br />
                            <span className="text-primary">Just a Practitioner.</span>
                        </h2>

                        <p className="text-lg text-slate-300">
                            With 10+ years in Tech, I've helped Founders and professionals save thousands of hours using practical AI automation.
                        </p>

                        <div className="space-y-4 text-slate-400">
                            <p>I don't teach "theory". I teach the exact workflows I use daily to run my business.</p>
                            <p><strong>Previous Outcomes:</strong> Helped a digital agency scale to $1M ARR without adding headcount.</p>
                        </div>

                        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl italic">
                            "My goal is simple: To get you back your time so you can focus on the work that actually matters."
                        </div>

                        <div className="pt-4">
                            <RegisterButton size="lg" variant="glow">REGISTER FOR FREE</RegisterButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
