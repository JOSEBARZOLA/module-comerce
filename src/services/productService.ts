import type { Product } from "@/types/Product";

export async function fetchProducts(): Promise<Product[]> {
  // Simulación de fetch con mock local
  return [
    {
      id: 1,
      name: "Remera Shopverse",
      description: "100% algodón orgánico",
      price: 7999.99,
      imageUrl: "/clients/shopverse/la-estrella-azul/img/remera.jpg",
    },
    {
      id: 2,
      name: "Taza Multiverse",
      description: "Ideal para café y código ☕️",
      price: 3999.5,
      imageUrl: "/clients/shopverse/la-estrella-azul/img/taza.jpg",
    },
  ];
}
