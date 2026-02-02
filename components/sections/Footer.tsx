export default function Footer() {
    return (
        <footer id="footer-s7" className="bg-slate-950 border-t border-slate-800 py-12 text-slate-500 text-sm">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-white font-bold mb-4">[COMPANY_LEGAL_NAME]</h3>
                        <p>[COMPANY_ADDRESS]</p>
                        <p className="mt-2 text-primary">[SUPPORT_EMAIL]</p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-3">Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                        </ul>
                    </div>
                    {/* Add more columns as needed */}
                </div>

                <div className="border-t border-slate-900 pt-8 text-xs text-slate-600 space-y-4">
                    <p>
                        This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                    <p>
                        Results vary. We do not guarantee that you will earn money or save a specific amount of time. All examples are for illustrative purposes. Not affiliated with OpenAI, Microsoft, or any other tool providers mentioned.
                    </p>
                    <p>
                        &copy; 2026 [COMPANY_LEGAL_NAME]. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
