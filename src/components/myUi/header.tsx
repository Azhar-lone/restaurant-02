"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import ProfileButton from "./ProfileButton";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-primary font-bold text-xl">
          {siteConfig.name}
        </Link>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        {siteConfig.mainNav.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className={
              pathname === item.href
                ? "text-primary font-medium"
                : "text-foreground font-medium hover:text-primary"
            }
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="flex items-center space-x-2">
        <ModeToggle />
        <ProfileButton />
      </div>
    </header>
  );
}
