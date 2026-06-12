import { MarketingHero } from "@/components/ui-custom/MarketingHero";
import { TwoPathsSection } from "@/components/ui-custom/TwoPathsSection";
import { LaunchCountdown } from "@/components/ui-custom/LaunchCountdown";
import { DealerCTASection } from "@/components/ui-custom/DealerCTASection";
import { FAQSection } from "@/components/ui-custom/FAQSection";

export default function HomePage() {
  return (
    <>
      <MarketingHero />
      <TwoPathsSection />
      <LaunchCountdown />
      <DealerCTASection />
      <FAQSection />
    </>
  );
}
