import Hero from "./_sections/Hero";
import Services from "./_sections/services";
import How from "./_sections/how-it-works";
import Areas from "./_sections/Areas";
import ContactUs from "./_sections/contact-us";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
};

export default function ServicePage() {
  return (
    <main>
      <Hero />
      <Services />
      <How />
      <Areas />
      <ContactUs />
    </main>
  );
}
