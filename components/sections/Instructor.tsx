import RegisterButton from '@/components/RegisterButton';

import Image from 'next/image';

export default function Instructor() {
    return (
        <section id="instructor-s5" className="py-20 bg-slate-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end py-8">
                        <div className="relative w-72 h-96 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden bg-slate-800 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/instructor.png"
                                alt="Shubhang Sethi"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-3 rounded-xl shadow-lg">
                                <div className="font-bold text-sm">Shubhang Sethi</div>
                                <div className="text-xs text-primary">AI &amp; Growth Mentor</div>
                            </div>
                        </div>
                        {/* Decorative Background elements */}
                        <div className="absolute w-64 h-64 bg-primary/20 blur-[120px] -z-10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Meet Your Instructor: <br />
                            <span className="text-primary">Shubhang Sethi</span>
                        </h2>

                        <p className="text-lg text-slate-300">
                            Teacher, content creator, and personal growth enthusiast on a mission to help people unlock their full potential through reading and AI-driven learning.
                        </p>

                        <div className="space-y-4 text-slate-400 text-sm lg:text-base">
                            <ul className="space-y-2 list-disc list-inside text-left mx-auto max-w-md lg:mx-0">
                                <li><strong>Read &amp; Retain:</strong> Extracts actionable insights from multiple books weekly.</li>
                                <li><strong>Simplified AI:</strong> Shares easy-to-understand AI concepts with a growing community on Instagram &amp; LinkedIn.</li>
                                <li><strong>Mentorship:</strong> Guides young minds on learning, self-development, and mindfulness.</li>
                                <li><strong>Holistic Growth:</strong> Practices mindfulness routines to stay focused and productive.</li>
                            </ul>
                        </div>

                        <div className="bg-slate-900/50 border border-white/5 p-6 rounded-xl italic">
                            <p className="mb-2">"Books hold the power to change your life — but only if you know how to truly learn from them."</p>
                            <p className="text-sm font-semibold text-primary not-italic">— Shubhang Sethi</p>
                        </div>

                        <div className="pt-4">
                            <RegisterButton size="lg" variant="glow">JOIN THE MASTERCLASS</RegisterButton>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
