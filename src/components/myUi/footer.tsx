import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12 border-t">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-primary font-bold text-xl mb-4">
            {siteConfig.name.toUpperCase()}
          </h3>
          <p className="text-foreground/40 text-sm mb-4">
            {siteConfig.name} ©2025 All Rights Reserved
          </p>
          <p className="text-foreground/40 text-sm flex gap-2">
            By
            <Link
              href={"https://azhar-lone-portfolio.vercel.app/"}
              target="_blank"
              className="hover:text-primary"
            >
              @{siteConfig.author}
            </Link>
          </p>
          <h4 className="font-bold mt-6 mb-4">Follow Us On</h4>
          <div className="flex space-x-2">
            {siteConfig.socialMedia.map(({ Icon }, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Menu</h4>
          <ul className="space-y-2">
            {siteConfig.footerLinks.menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-foreground/40 hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Information</h4>
          <ul className="space-y-2">
            {siteConfig.footerLinks.information.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="text-foreground/40 hover:text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2">
            {siteConfig.contact.map((item, index) => (
              <li key={index} className="text-foreground/40">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
