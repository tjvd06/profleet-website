import { Suspense } from "react";
import { InstantOfferMarketplace } from "@/components/tenders/InstantOfferMarketplace";
import { ComingSoonOverlay } from "@/components/ui-custom/ComingSoonOverlay";

export default function SofortAngebotePage() {
  return (
    <>
      <Suspense>
        <InstantOfferMarketplace />
      </Suspense>
      <ComingSoonOverlay />
    </>
  );
}
