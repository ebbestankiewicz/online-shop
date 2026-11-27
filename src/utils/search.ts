import type { Product } from "@/types/product";

export function filterProducts(products: Product[], query: string): Product[] {
  const normalisedQuery = query.trim().toLowerCase();
  if (!normalisedQuery) return products;

  return products.filter(
    ({ title, tags }) =>
      title.toLowerCase().includes(normalisedQuery) ||
      tags.some((tag) => tag.toLowerCase().includes(normalisedQuery)),
  );
}
