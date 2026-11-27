import type { Product } from "@/types/product";

export const sortOptions = {
  featured: "Featured",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  rating: "Top rated",
  "title-asc": "Name: A–Z",
} as const;

export type SortOption = keyof typeof sortOptions;

export function isSortOption(value: string): value is SortOption {
  return value in sortOptions;
}

export function sortProducts(
  products: Product[],
  option: SortOption,
): Product[] {
  const sorted = [...products];

  switch (option) {
    case "featured":
      return sorted;
    case "price-asc":
      return sorted.sort((a, b) => a.discountedPrice - b.discountedPrice);
    case "price-desc":
      return sorted.sort((a, b) => b.discountedPrice - a.discountedPrice);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }
}
