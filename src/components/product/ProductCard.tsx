import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { getDiscountPercentage, hasDiscount } from "@/utils/price";
import { PriceTag } from "./PriceTag";
import { Rating } from "./Rating";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { id, title, image, price, discountedPrice, rating } = product;
  const onSale = hasDiscount(product);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-paper ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-14px_rgb(46_38_34/0.4)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <Image
          src={image.url}
          alt={image.alt || title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {onSale && (
          <span className="absolute left-3 top-3 -rotate-6 rounded-full bg-terracotta px-3 py-1 text-sm font-bold text-paper shadow-md">
            −{getDiscountPercentage(product)}%
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-serif text-xl leading-tight">
          {/* Stretched link: makes the whole card clickable */}
          <Link
            href={`/product/${id}`}
            className="after:absolute after:inset-0"
          >
            {title}
          </Link>
        </h3>
        <Rating value={rating} />
        <div className="mt-auto pt-2">
          <PriceTag price={price} discountedPrice={discountedPrice} />
        </div>
      </div>
    </article>
  );
}
