import { useState, useRef } from "react";
import {
  CartContext,
  type CartItem,
  type CartProviderProps,
} from "./CartContext";
import type { Product } from "@/types/Product";
import { toast } from "react-toastify";

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const toastRef = useRef(false); // ✅ para evitar duplicados

  const addToCart = (product: Product, quantity: number, size: string) => {
    toastRef.current = false; // reset antes de cada acción

    setCart((prev) => {
       const exists = prev.find((item) => item.id === product.id && item.size === size);

      if (exists) {
        const newQuantity = Math.min(exists.quantity + quantity, 5);
        // Mostrar toast solo una vez
        if (!toastRef.current) {
          if (exists.quantity + quantity > 5) {
            toast.info("Máximo 5 unidades por producto");
          } else {
            toast.success("Producto agregado al carrito");
          }
          toastRef.current = true;
        }

        return prev.map((item) =>
          item.id === product.id && item.size === size ? { ...item, quantity: newQuantity } : item
        );
      }
      // Nuevo producto
      const finalQuantity = Math.min(quantity, 5);

      if (!toastRef.current) {
        if (quantity > 5) {
          toast.info("Máximo 5 unidades por producto");
        } else {
          toast.success("Producto agregado al carrito");
        }
        toastRef.current = true;
      }

      return [...prev, { ...product, quantity: finalQuantity,size}];
    });
  };

 const removeFromCart = (id: number, size: string) => {
  setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
};


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};