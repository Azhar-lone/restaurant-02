import { siteConfig } from "@/config/site";
import Hero from "./_sections/Hero";
import OurStory from "./_sections/our-story";
import OurValues from "./_sections/our-values";
import OurTeam from "./_sections/our-team";
export default function AboutUsPage() {
  return (
    <main>
      <Hero />
      <OurStory author={siteConfig.author} />
      <OurValues />
      <OurTeam />

    </main>
  );
}
