import type { Product } from "./product";

export type CartItem = Pick<
  Product,
  "id" | "title" | "price" | "discountedPrice" | "image"
> & {
  quantity: number;
};
