'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, CreditCard, ArrowRight, User, Mail, Phone } from 'lucide-react';
import OrderBump from '@/components/checkout/OrderBump';
import ProcessingOverlay from '@/components/checkout/ProcessingOverlay';
import { Button } from '@/components/ui/Button';

export default function CheckoutPage() {
    const router = useRouter();
    const [isVip, setIsVip] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    // Form State (Simplified)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate API call / Payment processing
        setTimeout(() => {
            setIsProcessing(false);
            if (isVip) {
                router.push('/thank-you');
            } else {
                router.push('/oto');
            }
        }, 3000); // 3 seconds delay for "Almost There" experience
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            {isProcessing && <ProcessingOverlay />}

            <div className="container mx-auto px-4 py-8 lg:py-12">

                {/* Header (Minimal) */}
                <header className="flex items-center justify-between mb-8 lg:mb-12 border-b border-white/10 pb-6">
                    <div className="text-xl font-bold text-white tracking-tight">
                        Namyah<span className="text-primary">.</span> Checkout
                    </div>
                    <div className="flex items-center gap-2 text-xs lg:text-sm text-slate-400">
                        <Lock className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-400" />
                        Secure 256-bit Encrypted Payment
                    </div>
                </header>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 max-w-6xl mx-auto">

                    {/* LEFT COLUMN: Summary & Trust */}
                    <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
                        <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 lg:p-8">
                            <h3 className="text-lg font-semibold text-white mb-4">Order Summary</h3>

                            {/* Main Item */}
                            <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/5">
                                <div>
                                    <div className="font-medium text-white">AI Mastery Workshop</div>
                                    <div className="text-sm text-slate-400">Live 90-Minute Session</div>
                                </div>
                                <div className="font-bold text-emerald-400">FREE</div>
                            </div>

                            {/* VIP Upgrade Item (Dynamic) */}
                            {isVip && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="flex justify-between items-start mb-4 pb-4 border-b border-white/5 overflow-hidden"
                                >
                                    <div>
                                        <div className="font-medium text-white">VIP Upgrade Bundle</div>
                                        <div className="text-sm text-slate-400">Recording + Notes + Prompts</div>
                                    </div>
                                    <div className="font-bold text-white">$99.00</div>
                                </motion.div>
                            )}

                            <div className="flex justify-between items-center pt-2">
                                <div className="text-slate-300 font-medium">Total Today</div>
                                <div className="text-2xl font-bold text-white">
                                    {isVip ? '$99.00' : '$0.00'}
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span>30-Day Money-Back Guarantee (for VIP upgrades)</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-400">
                                <CreditCard className="w-5 h-5 text-blue-400 shrink-0" />
                                <span>All major credit cards accepted securely.</span>
                            </div>
                        </div>

                        {/* Testimonial Snippet */}
                        <div className="bg-slate-900/30 rounded-xl p-4 border border-white/5 italic text-slate-400 text-sm">
                            &quot;The VIP notes alone were worth 10x the price. I use the prompts every single day.&quot;
                            <span className="block mt-2 not-italic font-semibold text-slate-300">— Sarah J., Product Manager</span>
                        </div>
                    </div>


                    {/* RIGHT COLUMN: Form & Checkout */}
                    <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                        <div>
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">Initialize Your Registration</h2>
                            <p className="text-slate-400">Complete your details below to reserve your spot instantly.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Full Name</label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            className="w-full bg-slate-900 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder:text-slate-600 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-slate-900 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder:text-slate-600 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full bg-slate-900 border border-white/10 rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary text-white placeholder:text-slate-600 transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Order Bump */}
                            <OrderBump isSelected={isVip} onToggle={setIsVip} />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="glow"
                                size="lg"
                                className="w-full text-lg h-14"
                            >
                                {isVip ? `Pay $99 & Complete Order` : `Complete Free Registration`}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>

                            <p className="text-xs text-center text-slate-500">
                                By clicking above, you agree to our Terms of Service and Privacy Policy.
                            </p>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
