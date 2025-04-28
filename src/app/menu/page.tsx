import { siteConfig } from "@/config/site";
import { MenuCategories } from "./_sections/menu-categories";
import { MenuItems } from "./_sections/menu-items";
import { SearchForm } from "./_sections/search-form";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Menu",
};
export default function MenuPage() {
  return (
    <section>
      <section className="container mx-auto px-4 py-12 bg-secondary rounded-3xl mt-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Our <span className="text-primary">Delicious</span> Menu
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our wide range of authentic Pakistani dishes prepared with
            fresh ingredients and traditional recipes
          </p>
          <SearchForm />
        </div>
      </section>

      <MenuCategories categories={siteConfig.menuCategories} />
      <MenuItems menuItems={siteConfig.fullMenu} />
    </section>
  );
}
