import { createContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/types/Product";

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};
// 👇 solo creamos el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);
export type CartProviderProps = {
  children: ReactNode;
};