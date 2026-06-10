import type { Product } from "@/components/StoreExample";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartItem extends Product {
  quantity: number;
}

interface InitialState {
  products: CartItem[];
}

interface Actions {
  addToCart: (product: Product) => void;
  minusFromCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
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
            if (p.id == product.id && p.stock > 0) {
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
      minusFromCart: (product) => {
        const state = get();
        const wasAdded = state.products.some((p) => p.id == product.id);

        if (wasAdded) {
          const updatedProducts = state.products.map((p) => {
            if (p.id == product.id && p.quantity > 1) {
              const updateProductFound: CartItem = {
                ...p,
                quantity: p.quantity - 1,
                stock: p.stock + 1,
              };
              return updateProductFound;
            }
            return p;
          });

          set({
            products: updatedProducts,
          });
        }
      },
      clearCart: () => {
        set({
          products: [],
        });
      },
      removeFromCart: (product) => {
        const state = get();

        const updatedProducts = state.products.filter(
          (p) => p.id !== product.id,
        );

        set({
          products: updatedProducts,
        });
      },
    }),
    { name: "cart" },
  ),
);
