import { useEffect, useState } from "react";
import { fetchProducts } from "@/modules/shopverse/services/productService";
import type { Product } from "@/modules/shopverse/types/Product";

// ✅ Es `ProductCards.tsx` (export default)
import ProductCard from "@/modules/shopverse/components/ProductCards";

// ✅ Es `CardSlider.tsx`, no `CartSidebar`
import CardSlider from "@/modules/shopverse/components/CardSlider";

// ✅ Ajustar al contexto correcto (asumo que está en contexts/CartContext.tsx)
import { CartProvider } from "@/modules/shopverse/contexts/CartContext";

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <CartProvider>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <CardSlider />
      </div>
    </CartProvider>
  );
};

export default ProductListPage;
