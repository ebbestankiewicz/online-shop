import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PriceTag } from "@/components/product/PriceTag";
import { Rating } from "@/components/product/Rating";
import { ReviewList } from "@/components/product/ReviewList";
import { TagList } from "@/components/product/TagList";
import { getProductById } from "@/lib/api";
import { getDiscountPercentage, hasDiscount } from "@/utils/price";
import { AddToCartButton } from "@/components/product/AddToCartButton";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = await getProductById(id);

  return {
    title: product
      ? `${product.title} · Sunday Market`
      : "Product not found · Sunday Market",
    description: product?.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) notFound();

  const {
    title,
    description,
    image,
    price,
    discountedPrice,
    rating,
    tags,
    reviews,
  } = product;
  const onSale = hasDiscount(product);

  return (
    <article>
      <Link
        href="/"
        className="text-sm font-semibold text-ink-soft hover:text-ink"
      >
        ← Back to the market
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative aspect-square overflow-hidden rounded-card bg-paper">
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <TagList tags={tags} />

          <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
            {title}
          </h1>

          <div className="flex items-center gap-3">
            <Rating value={rating} />
            {reviews.length > 0 && (
              <a
                href="#reviews"
                className="text-sm text-ink-soft underline-offset-4 hover:underline"
              >
                {reviews.length} {reviews.length === 1 ? "review" : "reviews"}
              </a>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <PriceTag
              price={price}
              discountedPrice={discountedPrice}
              size="lg"
            />
            {onSale && (
              <span className="-rotate-3 rounded-full bg-terracotta px-3 py-1 text-sm font-bold text-paper">
                Save {getDiscountPercentage(product)}%
              </span>
            )}
          </div>

          <p className="text-lg leading-relaxed text-ink-soft">{description}</p>

          <div className="pt-2">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>

      <section
        id="reviews"
        aria-labelledby="reviews-heading"
        className="mt-16 scroll-mt-24"
      >
        <h2 id="reviews-heading" className="mb-6 font-serif text-3xl">
          What people say
        </h2>
        <ReviewList reviews={reviews} />
      </section>
    </article>
  );
}
