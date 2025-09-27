// src/contexts/useCart.ts
import { useContext } from "react";
import { CartContext, type CartContextType } from "@/contexts/CartContext";

export function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}