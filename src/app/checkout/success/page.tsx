import type { Metadata } from "next";
import Link from "next/link";
import { ClearCartOnMount } from "@/components/cart/ClearCartOnMount";

export const metadata: Metadata = {
  title: "Order confirmed · Sunday Market",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-lg py-12 text-center">
      <ClearCartOnMount />

      <div
        aria-hidden
        className="relative mx-auto h-20 w-20 overflow-hidden rounded-full bg-mustard"
      >
        <span className="absolute inset-x-0 bottom-0 h-1/4 bg-terracotta" />
      </div>

      <h1 className="mt-6 font-serif text-4xl sm:text-5xl">Thank you!</h1>
      <p className="mt-4 text-lg text-ink-soft">
        Your order is confirmed. We&apos;re wrapping it up with care, and
        you&apos;ll get an email as soon as it&apos;s on its way.
      </p>

      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-ink px-6 py-3 font-semibold text-cream transition-colors hover:bg-ink/85"
      >
        Continue shopping
      </Link>
    </div>
  );
}
