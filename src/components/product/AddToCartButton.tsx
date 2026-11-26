"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useCartStore } from "@/store/cart-store";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);
  const router = useRouter();

  function handleAddToCart() {
    addItem(product);
    toast.success(`${product.title} added to your cart`, {
      action: { label: "View cart", onClick: () => router.push("/cart") },
    });
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="w-full rounded-full bg-terracotta px-8 py-3.5 text-lg font-bold text-paper transition hover:bg-terracotta-dark active:scale-[0.98] sm:w-auto"
    >
      Add to cart
    </button>
  );
}
