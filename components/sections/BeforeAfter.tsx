export default function BeforeAfter() {
    return (
        <section id="sp-3" className="py-20 bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-5 lg:px-8">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                    <div className="bg-slate-900 rounded-2xl p-6 border border-red-500/10 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 bg-red-500/10 text-red-500 px-4 py-1 text-sm font-bold rounded-br-xl">Before</div>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4 opacity-50">
                                <span className="text-2xl">❌</span>
                                <div>
                                    <h4 className="font-semibold text-white">10 Hours/Week on Emails</h4>
                                    <p className="text-slate-400 text-sm">Drowning in inbox, generic replies, missed messages.</p>
                                </div>
                            </div>
                            <div className="w-full h-24 bg-slate-800 rounded-lg animate-pulse" />
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-2xl p-6 border border-emerald-500/10 relative overflow-hidden group">
                        <div className="absolute top-0 left-0 bg-emerald-500/10 text-emerald-500 px-4 py-1 text-sm font-bold rounded-br-xl">After</div>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <span className="text-2xl">✅</span>
                                <div>
                                    <h4 className="font-semibold text-white">Inbox Zero in 20 Mins</h4>
                                    <p className="text-slate-400 text-sm">Using AI assistants to draft and categorize.</p>
                                </div>
                            </div>
                            <div className="w-full h-24 border-2 border-dashed border-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500/50">
                                <span className="font-mono text-xs">✨ AI Draft Generated</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
