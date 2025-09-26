import { useState } from "react";
import { CartContext, type CartItem, type CartProviderProps } from "./CartContext";
import type { Product } from "@/types/Product";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
  setCart((prev) => {
    const exists = prev.find((item) => item.id === product.id);
    if (exists) {
      return prev.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Math.min(item.quantity + quantity, 5), // 👈 nunca pasa de 5
            }
          : item
      );
    }
    return [...prev, { ...product, quantity: Math.min(quantity, 5) }]; // 👈 por si ya vienen más de 5
  });
};


  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};