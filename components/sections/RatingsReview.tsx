import { Star } from 'lucide-react';

export default function RatingsReview() {
    return (
        <section id="sp-6" className="py-16 bg-slate-950 border-t border-white/5">
            <div className="container mx-auto px-5 lg:px-8 text-center">
                <div className="flex items-center justify-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />)}
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">4.9/5 Average Rating</h2>
                <p className="text-slate-400 text-lg mb-8">from 15,000+ Students</p>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8 max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">One Last Thing.</h3>
                    <p className="text-slate-300 mb-6">
                        You have two choices. Ignore AI and hope your job doesn't change. Or spend 90 minutes now to future-proof your career for the next 5 years. The choice is yours.
                    </p>
                </div>
            </div>
        </section>
    );
}
