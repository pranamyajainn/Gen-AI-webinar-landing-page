import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import VisualMomentum from '@/components/sections/VisualMomentum';
import QuoteCarousel from '@/components/sections/QuoteCarousel';
import ToolsReveal from '@/components/sections/ToolsReveal';
import BeforeAfter from '@/components/sections/BeforeAfter';
import ValueBreakdown from '@/components/sections/ValueBreakdown';
import OutcomesWall from '@/components/sections/OutcomesWall';
import Instructor from '@/components/sections/Instructor';
import SocialProofScreens from '@/components/sections/SocialProofScreens';
import FAQ from '@/components/sections/FAQ';
import RatingsReview from '@/components/sections/RatingsReview';
import Footer from '@/components/sections/Footer';
import StickyCountdown from '@/components/sections/StickyCountdown';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Hero />
      <TrustBar />
      <VisualMomentum />
      <QuoteCarousel />
      <ToolsReveal />
      <BeforeAfter />
      <ValueBreakdown />
      <OutcomesWall />
      <Instructor />
      <SocialProofScreens />
      <FAQ />
      <RatingsReview />
      <Footer />
      <StickyCountdown />
    </main>
  );
}
