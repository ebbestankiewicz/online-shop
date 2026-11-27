"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/types/product";
import { formatPrice } from "@/utils/price";
import { filterProducts } from "@/utils/search";

const MAX_RESULTS = 6;

interface SearchBarProps {
  products: Product[];
}

export function SearchBar({ products }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const router = useRouter();
  const listboxId = useId();

  const results = filterProducts(products, query).slice(0, MAX_RESULTS);
  const showResults = isOpen && query.trim().length > 0;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setActiveIndex(-1);
    setIsOpen(true);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (!showResults) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setActiveIndex((index) => Math.min(index + 1, results.length - 1));
        break;
      case "ArrowUp":
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, -1));
        break;
      case "Enter": {
        const activeProduct = results[activeIndex];
        if (activeProduct) {
          event.preventDefault();
          router.push(`/product/${activeProduct.id}`);
        }
        break;
      }
      case "Escape":
        setIsOpen(false);
        break;
    }
  }

  return (
    <div className="relative w-full max-w-xl">
      <label htmlFor={`${listboxId}-input`} className="sr-only">
        Search products
      </label>
      <div className="flex items-center gap-3 rounded-full bg-paper px-5 py-3 ring-1 ring-ink/15 focus-within:ring-2 focus-within:ring-terracotta">
        <SearchIcon />
        <input
          id={`${listboxId}-input`}
          type="search"
          role="combobox"
          aria-expanded={showResults}
          aria-controls={listboxId}
          aria-autocomplete="list"
          aria-activedescendant={
            activeIndex >= 0 ? `${listboxId}-${activeIndex}` : undefined
          }
          autoComplete="off"
          placeholder="Search for headphones, perfume, shoes…"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          className="w-full bg-transparent text-base placeholder:text-ink-soft/70 focus:outline-none"
        />
      </div>

      {showResults && (
        <ul
          id={listboxId}
          role="listbox"
          aria-label="Search results"
          // Keep focus in the input so the blur doesn't close the list before a click registers
          onMouseDown={(event) => event.preventDefault()}
          className="absolute inset-x-0 top-full z-30 mt-2 overflow-hidden rounded-card bg-paper shadow-[0_16px_40px_-16px_rgb(46_38_34/0.45)] ring-1 ring-ink/10"
        >
          {results.length === 0 ? (
            <li className="px-5 py-4 text-ink-soft">
              No products match &ldquo;{query.trim()}&rdquo;
            </li>
          ) : (
            results.map((product, index) => (
              <li
                key={product.id}
                id={`${listboxId}-${index}`}
                role="option"
                aria-selected={index === activeIndex}
              >
                <Link
                  href={`/product/${product.id}`}
                  tabIndex={-1}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 transition-colors hover:bg-cream ${
                    index === activeIndex ? "bg-cream" : ""
                  }`}
                >
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-cream">
                    <Image
                      src={product.image.url}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </span>
                  <span className="flex-1 font-semibold">{product.title}</span>
                  <span className="text-sm text-ink-soft">
                    {formatPrice(product.discountedPrice)}
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="shrink-0 text-ink-soft"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
