import type { Category } from "@/App";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Category {
  quantity: number;
}

interface InitialState {
  products: CartItem[];
}

interface Actions {
  addToCart: (product: Category) => void;
}

type State = InitialState & Actions;

export const usecartStore = create<State>()(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (product) => {
        const state = get();
        const wasAdded = state.products.some((p) => p.id == product.id);

        if (wasAdded) {
          const updatedProducts = state.products.map((p) => {
            if (p.id == product.id && p.stock > p.quantity) {
              const updateProductFound: CartItem = {
                ...p,
                quantity: p.quantity + 1,
                stock: p.stock - 1,
              };
              return updateProductFound;
            }
            return p;
          });

          set({
            products: updatedProducts,
          });
        } else {
          const newProduct: CartItem = {
            ...product,
            quantity: 1,
            stock: product.stock - 1,
          };

          set((state) => ({
            products: [...state.products, newProduct],
          }));
        }
      },
    }),
    { name: "cart" },
  ),
);
