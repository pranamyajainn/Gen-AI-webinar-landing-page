import RegisterButton from '@/components/RegisterButton';

interface CTAReinforceProps {
    headline: string;
    ctaText: string;
    variant?: 'outline' | 'gradient-border' | 'subtle';
}

export default function CTAReinforcement({ headline, ctaText, variant = 'outline' }: CTAReinforceProps) {
    if (variant === 'gradient-border') {
        return (
            <div className="py-10 text-center">
                <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest font-medium">{headline}</p>
                <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500">
                    <RegisterButton variant="ghost" size="lg" className="bg-slate-950 rounded-full hover:bg-slate-900">
                        {ctaText}
                    </RegisterButton>
                </div>
            </div>
        );
    }

    if (variant === 'subtle') {
        return (
            <div className="py-8 text-center">
                <p className="text-slate-500 text-sm mb-3">{headline}</p>
                <RegisterButton variant="ghost" size="default" className="text-primary hover:text-white underline underline-offset-4 decoration-primary/30 hover:decoration-primary">
                    {ctaText} →
                </RegisterButton>
            </div>
        );
    }

    // Default: outline
    return (
        <div className="py-10 text-center">
            <p className="text-slate-400 text-sm mb-4">{headline}</p>
            <RegisterButton variant="outline" size="lg" className="border-white/10 hover:border-primary/40">
                {ctaText}
            </RegisterButton>
        </div>
    );
}
