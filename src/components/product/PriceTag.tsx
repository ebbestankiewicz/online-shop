import type { Product } from "@/types/product";
import { formatPrice, hasDiscount } from "@/utils/price";

interface PriceTagProps extends Pick<Product, "price" | "discountedPrice"> {
  size?: "sm" | "lg";
}

export function PriceTag({
  price,
  discountedPrice,
  size = "sm",
}: PriceTagProps) {
  const onSale = hasDiscount({ price, discountedPrice });

  return (
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span
        className={`font-bold ${size === "lg" ? "text-2xl" : "text-base"} ${
          onSale ? "text-terracotta-dark" : ""
        }`}
      >
        <span className="sr-only">{onSale ? "Sale price: " : "Price: "}</span>
        {formatPrice(discountedPrice)}
      </span>
      {onSale && (
        <s className="text-sm text-ink-soft">
          <span className="sr-only">Original price: </span>
          {formatPrice(price)}
        </s>
      )}
    </p>
  );
}
