import React, { useState } from "react";
import "@/assets/sass/_shopping-cart.scss";



interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount?: string;
  image: string;
}

interface Quantities {
  [key: number]: number;
}

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Black | Premium Series",
      price: 129.99,
      discount: "20% OFF",
      image: "https://http2.mlstatic.com/D_NQ_NP_2X_625133-MLA88400808193_072025-F.webp",
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Silver | Series 7",
      price: 299.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_784647-MLA91988925183_092025-O.webp",
    },
    {
      id: 3,
      name: "Wireless Charger",
      description: "White | 15W Fast Charge",
      price: 49.99,
      image: "https://http2.mlstatic.com/D_NQ_NP_943999-MLA88803153492_082025-O.webp",
    },
  ]);

  const [quantities, setQuantities] = useState<Quantities>({
    1: 1,
    2: 1,
    3: 1,
  });

  const updateQuantity = (productId: number, change: number): void => {
    setQuantities((prev) => {
      const newQty = Math.max(1, (prev[productId] ?? 1) + change);
      return { ...prev, [productId]: newQty };
    });
  };

  const removeProduct = (productId: number): void => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setQuantities((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  };

  const subtotal: number = products.reduce(
    (sum, p) => sum + p.price * (quantities[p.id] ?? 1),
    0
  );

  const discount: number = 26.0; // Hardcodeado, puedes hacerlo dinámico
  const total: number = subtotal - discount ;

  return (
    <>
    <div className="cart-wrapper">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Carrito de compras</h4>
              <span className="text-muted">{products.length} Productos</span>
            </div>
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-2">
              {products.map((product) => (
                <div key={product.id} className="product-card p-3 shadow-sm">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        id="product-image"
                      />
                    </div>
                    <div className="col-md-4">
                      <h6 className="mb-1">{product.name}</h6>
                      <p className="text-muted mb-0">{product.description}</p>
                      {product.discount && (
                        <span className="discount-badge mt-2">
                          {product.discount}
                        </span>
                      )}
                    </div>
                    <div className="col-md-3">
                      <div className="d-flex align-items-center gap-2">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(product.id, -1)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="quantity-input"
                          value={quantities[product.id] ?? 1}
                          readOnly
                        />
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(product.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <span className="fw-bold">
                        $
                        {(
                          product.price * (quantities[product.id] ?? 1)
                        ).toFixed(2)}
                      </span>
                    </div>
                    <div className="col-md-1">
                      <i
                        className="bx bx-trash remove-btn"
                        onClick={() => removeProduct(product.id)}
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="col-lg-4">
            <div className="summary-card p-4 shadow-sm">
              <h5 className="mb-4">Orden de compra</h5>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">Descuento</span>
                <span className="text-success">-${discount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total</span>
                <span className="fw-bold">${total.toFixed(2)}</span>
              </div>
              <button className="btn checkout-btn w-100 mb-3">
                Proceeder a la compra
              </button>

              <div className="d-flex justify-content-center gap-2">
                <i className="bx bx-check-shield text-success"></i>
                <small className="text-muted">Compra asegurada.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShoppingCart;
