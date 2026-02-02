export default function TrustBar() {
    return (
        <section id="sp-1" className="py-8 bg-slate-950 border-y border-white/5">
            <div className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-widest">
                    Trusted by professionals from
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Logo Placeholders using Text for now, or SVGs if available */}
                    {['Google', 'Microsoft', 'Uber', 'Notion', 'Spotify'].map((brand) => (
                        <div key={brand} className="text-xl font-bold font-mono text-white/40 hover:text-white/80 transition-colors cursor-default">
                            {brand}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
