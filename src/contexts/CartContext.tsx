import { createContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "@/types/Product";

export type CartItem = Product & { quantity: number, size:string};
export type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, size: string) => void;
  removeFromCart: (id: number, size:string) => void;
};
// 👇 solo creamos el contexto
export const CartContext = createContext<CartContextType | undefined>(undefined);
export type CartProviderProps = {
  children: ReactNode;
};