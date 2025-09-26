import { createContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/types/Product";

export type CartItem = Product & { quantity: number };

export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
};
// 👇 solo creamos el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);
export type CartProviderProps = {
  children: ReactNode;
};