"use client";

import Link from "next/link";
import { useHasMounted } from "@/hooks/useHasMounted";
import { selectItemCount, useCartStore } from "@/store/cart-store";

export function CartButton() {
  const itemCount = useCartStore(selectItemCount);
  const hasMounted = useHasMounted();
  const count = hasMounted ? itemCount : 0;

  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} ${count === 1 ? "item" : "items"}`}
      className="relative inline-flex items-center gap-2 rounded-full bg-terracotta px-3 py-1.5 text-sm font-semibold text-paper transition-colors hover:bg-terracotta-dark"
    >
      <BagIcon />
      <span className="hidden sm:inline">Cart</span>
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-mustard px-1 text-xs font-bold text-ink ring-2 ring-cream">
          {count}
        </span>
      )}
    </Link>
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
