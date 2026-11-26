"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Shop" },
  { href: "/contact", label: "Contact" },
] as const;

function isActiveLink(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/" || pathname.startsWith("/product");
  return pathname.startsWith(href);
}

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main">
      <ul className="flex items-center gap-1">
        {links.map(({ href, label }) => {
          const isActive = isActiveLink(href, pathname);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-ink text-cream"
                    : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
