export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  category: string; // 👈 OBLIGATORIO
  images?: string[];
}