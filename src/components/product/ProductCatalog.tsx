"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import {
  isSortOption,
  sortOptions,
  sortProducts,
  type SortOption,
} from "@/utils/sort";
import { ProductGrid } from "./ProductGrid";

interface ProductCatalogProps {
  products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const sortedProducts = sortProducts(products, sortBy);

  return (
    <section aria-labelledby="products-heading">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <h2 id="products-heading" className="font-serif text-3xl">
          All products{" "}
          <span className="text-lg text-ink-soft">({products.length})</span>
        </h2>

        <label className="flex items-center gap-2 text-sm font-semibold text-ink-soft">
          Sort by
          <select
            value={sortBy}
            onChange={(event) => {
              if (isSortOption(event.target.value))
                setSortBy(event.target.value);
            }}
            className="rounded-full bg-paper px-4 py-2 text-ink ring-1 ring-ink/15 focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            {Object.entries(sortOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ProductGrid products={sortedProducts} />
    </section>
  );
}
