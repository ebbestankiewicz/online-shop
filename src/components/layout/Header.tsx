import Link from "next/link";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLinks />
          {/* Replaced with a cart button showing item count in step 5 */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-3 py-1.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-dark"
          >
            <BagIcon />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 7h12l-1 13H7L6 7Z" />
      <path d="M9 7a3 3 0 0 1 6 0" />
    </svg>
  );
}
