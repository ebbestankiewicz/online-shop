import type { Product } from "@/types/product";

const CURRENCY = "NOK";
const LOCALE = "nb-NO";

const priceFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: CURRENCY,
});

export function formatPrice(amount: number): string {
  return priceFormatter.format(amount);
}

type PricedProduct = Pick<Product, "price" | "discountedPrice">;

export function hasDiscount({
  price,
  discountedPrice,
}: PricedProduct): boolean {
  return discountedPrice < price;
}

export function getDiscountPercentage({
  price,
  discountedPrice,
}: PricedProduct): number {
  return Math.round(((price - discountedPrice) / price) * 100);
}
