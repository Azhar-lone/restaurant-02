import { Hero } from "./_sections/hero";
import { Features } from "./_sections/features";
import { BestDishes } from "./_sections/best-dishes";
import { RegionTabs } from "./_sections/region-tabs";
import { CouponSection } from "./_sections/coupon-section";
import { RegularMenu } from "./_sections/regular-menu";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Features features={siteConfig.features} />
      <BestDishes dishes={siteConfig.bestDishes} />
      <RegionTabs regions={siteConfig.regions} />
      <RegularMenu menuItems={siteConfig.regularMenu} />
      <CouponSection />
    </>
  );
}
