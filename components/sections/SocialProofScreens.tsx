export default function SocialProofScreens() {
    return (
        <section id="sp-5" className="py-20 bg-slate-900/50 border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4 text-center mb-12">
                <h3 className="text-slate-400 font-medium uppercase tracking-widest">Don't just take our word for it</h3>
            </div>

            {/* Masonry-style layout or just overlapping screenshots */}
            <div className="relative max-w-6xl mx-auto h-[400px] md:h-[500px]">

                {/* Mock Slack Message */}
                <div className="absolute left-4 top-10 md:left-20 md:top-20 bg-slate-800 p-4 rounded-xl border border-white/10 shadow-2xl w-64 md:w-80 rotate-[-4deg] hover:rotate-0 transition-transform duration-300 z-10">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded bg-green-500/20" />
                        <div className="h-2 w-20 bg-slate-700 rounded" />
                    </div>
                    <p className="text-sm text-slate-300">"Team, please watch the recording of this workshop. Mandatory."</p>
                </div>

                {/* Mock WhatsApp Message */}
                <div className="absolute right-4 bottom-20 md:right-40 md:top-10 bg-[#075E54] p-4 rounded-xl rounded-tr-none border border-white/10 shadow-2xl w-64 md:w-72 rotate-[3deg] hover:rotate-0 transition-transform duration-300 z-20">
                    <div className="text-xs text-white/60 mb-1">Yesterday</div>
                    <p className="text-sm text-white">"Bro, that Excel trick just saved my weekend! I'm actually leaving work on time."</p>
                </div>

                {/* Mock Email */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-slate-900 p-6 rounded-xl shadow-2xl w-80 md:w-96 rotate-[1deg] hover:rotate-0 transition-transform duration-300 z-30">
                    <div className="border-b border-slate-200 pb-2 mb-2 font-bold text-lg">Re: Session Feedback</div>
                    <p className="text-sm leading-relaxed">I've attended 10+ AI webinars. Yours was the only one that actually showed live demos instead of just PPT slides. Respect.</p>
                </div>

            </div>
        </section>
    );
}
