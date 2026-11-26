"use client";

import Link from "next/link";
import { useHasMounted } from "@/hooks/useHasMounted";
import { useCartStore } from "@/store/cart-store";
import { CartItemRow } from "./CartItemRow";
import { CartSummary } from "./CartSummary";

export function CartView() {
  const items = useCartStore((state) => state.items);
  const hasMounted = useHasMounted();

  // The cart lives in localStorage, so wait for the browser before rendering it
  if (!hasMounted) {
    return <p className="text-ink-soft">Loading your cart…</p>;
  }

  if (items.length === 0) {
    return (
      <div className="rounded-card bg-paper px-6 py-16 text-center ring-1 ring-ink/5">
        <p className="font-serif text-2xl">Your cart is empty</p>
        <p className="mt-2 text-ink-soft">
          Nothing here yet. Have a wander through the market.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 font-semibold text-cream transition-colors hover:bg-ink/85"
        >
          Browse products
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-start">
      <ul className="divide-y divide-ink/10 rounded-card bg-paper px-4 ring-1 ring-ink/5 sm:px-6">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} />
        ))}
      </ul>
      <CartSummary />
    </div>
  );
}
