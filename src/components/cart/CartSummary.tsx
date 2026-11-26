import { useRouter } from "next/navigation";
import {
  selectCartSavings,
  selectCartTotal,
  selectItemCount,
  useCartStore,
} from "@/store/cart-store";
import { formatPrice } from "@/utils/price";

export function CartSummary() {
  const total = useCartStore(selectCartTotal);
  const savings = useCartStore(selectCartSavings);
  const itemCount = useCartStore(selectItemCount);
  const router = useRouter();

  return (
    <aside
      aria-labelledby="summary-heading"
      className="rounded-card bg-paper p-6 ring-1 ring-ink/5 lg:sticky lg:top-24"
    >
      <h2 id="summary-heading" className="font-serif text-2xl">
        Summary
      </h2>

      <dl className="mt-4 space-y-2 text-ink-soft">
        <div className="flex justify-between">
          <dt>Items</dt>
          <dd>{itemCount}</dd>
        </div>
        {savings > 0 && (
          <div className="flex justify-between font-semibold text-terracotta-dark">
            <dt>You save</dt>
            <dd>−{formatPrice(savings)}</dd>
          </div>
        )}
        <div className="flex justify-between border-t border-ink/10 pt-3 text-lg font-bold text-ink">
          <dt>Total</dt>
          <dd>{formatPrice(total)}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => router.push("/checkout/success")}
        className="mt-6 w-full rounded-full bg-terracotta px-6 py-3.5 text-lg font-bold text-paper transition hover:bg-terracotta-dark active:scale-[0.98]"
      >
        Checkout
      </button>
    </aside>
  );
}
