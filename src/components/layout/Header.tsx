import { CartButton } from "./CartButton";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-cream/90 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-4">
          <NavLinks />
          <CartButton />
        </div>
      </div>
    </header>
  );
}
