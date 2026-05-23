import { MarketingHero } from "@/components/ui-custom/MarketingHero";
import { TwoPathsSection } from "@/components/ui-custom/TwoPathsSection";
import { FlowSection } from "@/components/ui-custom/FlowSection";
import { LaunchCountdown } from "@/components/ui-custom/LaunchCountdown";
import { DealerCTASection } from "@/components/ui-custom/DealerCTASection";
import { FAQSection } from "@/components/ui-custom/FAQSection";

export default function HomePage() {
  return (
    <>
      <MarketingHero />
      <TwoPathsSection />
      <FlowSection />
      <LaunchCountdown />
      <DealerCTASection />
      <FAQSection />
    </>
  );
}
