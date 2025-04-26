"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import ProfileButton from "./ProfileButton";
import { ModeToggle } from "./mode-toggle";
import { useEffect, useState } from "react";
import Slider from "./Slider";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowHeader(true); // Scrolling up
      } else {
        setShowHeader(false); // Scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const pathname = usePathname();

  return (
    <header
      className={`container mx-auto bg-background z-50 sticky top-0 px-4 py-4 flex justify-between items-center transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
        <Slider side="right" className="flex flex-col gap-4 items-center py-10">
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
        </Slider>
      </div>
    </header>
  );
}
