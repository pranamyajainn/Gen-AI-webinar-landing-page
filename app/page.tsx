import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import SocialProofWall from '@/components/sections/SocialProofWall';
import LearnersAuthority from '@/components/sections/LearnersAuthority';
import CTAReinforcement from '@/components/sections/CTAReinforcement';
import ToolsReveal from '@/components/sections/ToolsReveal';
import VisualMomentum from '@/components/sections/VisualMomentum';
import ValueStack from '@/components/sections/ValueStack';
import OutcomeReframe from '@/components/sections/OutcomeReframe';
import BonusExclusivity from '@/components/sections/BonusExclusivity';
import InstructorAuthority from '@/components/sections/InstructorAuthority';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ConfidenceReinforcement from '@/components/sections/ConfidenceReinforcement';
import FinalCommitment from '@/components/sections/FinalCommitment';
import ComplianceFooter from '@/components/sections/ComplianceFooter';
import StickyCountdown from '@/components/sections/StickyCountdown';
import StickyHeader from '@/components/sections/StickyHeader';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <StickyHeader />
      <Hero />
      <TrustBar />

      {/* Iteration 2: Social Proof & Momentum */}
      <SocialProofWall />
      <CTAReinforcement
        headline="Ready to join them?"
        ctaText="Register Free — Limited Seats"
        variant="subtle"
      />
      <LearnersAuthority />
      <ToolsReveal />

      {/* Iteration 3: Value Stack, Outcomes & Objection Destruction */}
      <VisualMomentum />
      <ValueStack />
      <OutcomeReframe />
      <BonusExclusivity />

      {/* Iteration 4: Authority Transfer & Objection Closure */}
      <InstructorAuthority />
      <FAQAccordion />
      <ConfidenceReinforcement />

      {/* Iteration 5: Final Conversion & Compliance */}
      <FinalCommitment />
      <ComplianceFooter />
      <StickyCountdown />
    </main>
  );
}
