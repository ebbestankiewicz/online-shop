import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

export interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  restoreItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          const { id, title, price, discountedPrice, image } = product;
          return {
            items: [
              ...state.items,
              { id, title, price, discountedPrice, image, quantity: 1 },
            ],
          };
        }),

      removeItem: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      restoreItem: (item) =>
        set((state) =>
          state.items.some((existing) => existing.id === item.id)
            ? state
            : { items: [...state.items, item] },
        ),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.id !== id)
              : state.items.map((item) =>
                  item.id === id ? { ...item, quantity } : item,
                ),
        })),

      clearCart: () => set({ items: [] }),
    }),
    { name: "sunday-market-cart" },
  ),
);

export const selectItemCount = (state: CartState): number =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectCartTotal = (state: CartState): number =>
  state.items.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0,
  );

export const selectCartSavings = (state: CartState): number =>
  state.items.reduce(
    (sum, item) => sum + (item.price - item.discountedPrice) * item.quantity,
    0,
  );
