import { Mail } from 'lucide-react';

const FOOTER_LINKS = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Refund & Cancellation', href: '#' },
    { label: 'Contact Us', href: 'mailto:support@aimastery.com' },
];

export default function ComplianceFooter() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="bg-slate-950 border-t border-white/[0.04] pt-12 pb-24 relative">
            <div className="container mx-auto px-5 lg:px-8 max-w-5xl">
                {/* Top row — brand + contact */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-1">AI Mastery Workshop</h3>
                        <p className="text-slate-600 text-xs">
                            by Jeevesh Sabharwal &middot; Learn AI automation for business
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <Mail className="w-4 h-4 text-slate-600" />
                        <a
                            href="mailto:support@aimastery.com"
                            className="hover:text-white transition-colors"
                        >
                            support@aimastery.com
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
                    {FOOTER_LINKS.map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="text-xs text-slate-600 hover:text-slate-400 transition-colors py-1 inline-block"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                {/* Disclaimers — ad-platform compliance */}
                <div className="border-t border-white/[0.04] pt-8 space-y-4 text-[11px] text-slate-500 leading-relaxed">
                    <p>
                        This site is not a part of the Facebook&trade; website or Facebook Inc. Additionally, this site
                        is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of META PLATFORMS, Inc.
                    </p>
                    <p>
                        This site is not a part of the Google&trade; website or Alphabet Inc. This site is NOT endorsed
                        by Google in any way.
                    </p>
                    <p>
                        EARNINGS & RESULTS DISCLAIMER: Results vary. We make no guarantees regarding income, savings, or
                        specific outcomes. All examples and testimonials are for illustrative purposes only and should not
                        be interpreted as guarantees. Individual results depend on effort, background, and market conditions.
                    </p>
                    <p>
                        This workshop is an educational programme. It is not affiliated with, endorsed by, or sponsored by
                        OpenAI, Microsoft, Google, or any other third-party tool provider mentioned on this page.
                    </p>

                    <p className="pt-4 text-slate-500">
                        &copy; {year} AI Mastery Workshop. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
