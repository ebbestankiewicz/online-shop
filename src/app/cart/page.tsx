import type { Metadata } from "next";
import { CartView } from "@/components/cart/CartView";

export const metadata: Metadata = {
  title: "Your cart · Sunday Market",
};

export default function CartPage() {
  return (
    <>
      <h1 className="mb-8 font-serif text-4xl sm:text-5xl">Your cart</h1>
      <CartView />
    </>
  );
}
