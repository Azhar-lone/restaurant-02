import Hero from "./_sections/Hero";
import Coupons from "./_sections/coupons";
import Deals from "./_sections/Deals";
import Subscribe from "./_sections/subscribe";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Offers",
};

export default function OffersPage() {
  return (
    <main>
      <Hero />
      <Coupons />
      <Deals />
      <Subscribe />
    </main>
  );
}
