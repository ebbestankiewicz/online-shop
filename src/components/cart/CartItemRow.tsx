import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { PriceTag } from "@/components/product/PriceTag";
import { QuantityControl } from "@/components/ui/QuantityControl";
import { useCartStore } from "@/store/cart-store";
import type { CartItem } from "@/types/cart";
import { formatPrice } from "@/utils/price";

interface CartItemRowProps {
  item: CartItem;
}

export function CartItemRow({ item }: CartItemRowProps) {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const restoreItem = useCartStore((state) => state.restoreItem);

  const { id, title, image, price, discountedPrice, quantity } = item;
  const productUrl = `/product/${id}`;

  function handleRemove() {
    removeItem(id);
    toast(`${title} removed from your cart`, {
      action: { label: "Undo", onClick: () => restoreItem(item) },
    });
  }

  return (
    <li className="flex gap-4 py-5">
      <Link
        href={productUrl}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-cream sm:h-28 sm:w-28"
      >
        <Image
          src={image.url}
          alt={image.alt || title}
          fill
          sizes="112px"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h2 className="font-serif text-xl leading-tight">
            <Link href={productUrl} className="hover:underline">
              {title}
            </Link>
          </h2>
          <PriceTag price={price} discountedPrice={discountedPrice} />
          <button
            type="button"
            onClick={handleRemove}
            className="text-sm font-semibold text-ink-soft underline underline-offset-4 hover:text-terracotta-dark"
          >
            Remove<span className="sr-only"> {title}</span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-6 sm:justify-end">
          <QuantityControl
            quantity={quantity}
            onChange={(next) => updateQuantity(id, next)}
            label={title}
          />
          <p className="min-w-24 text-right text-lg font-bold">
            <span className="sr-only">Line total: </span>
            {formatPrice(discountedPrice * quantity)}
          </p>
        </div>
      </div>
    </li>
  );
}
