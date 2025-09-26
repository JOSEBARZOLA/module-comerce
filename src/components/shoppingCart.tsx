import "@/assets/sass/_shopping-cart.scss";
import { useCart } from "@/contexts/useCart";

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  // Subtotal dinámico
  const subtotal: number = cart.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  // Descuento de ejemplo (puede ser dinámico)
  const discount: number = 0;
  const total: number = subtotal - discount;

  return (
    <div className="cart-wrapper">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Carrito de compras</h4>
          <span className="text-muted">{cart.length} Productos</span>
        </div>

        <div className="row g-4">
          {/* Cart Items */}
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-2">
              {cart.length === 0 ? (
                <p className="text-muted">Tu carrito está vacío</p>
              ) : (
                cart.map((product) => (
                  <div key={product.id} className="product-cart p-3 shadow-sm">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img
                          src={product.images?.[0] || ""}
                          alt={product.name}
                          id="product-image"
                        />
                      </div>
                      <div className="col-md-4">
                        <h6 className="mb-1">{product.name}</h6>
                        <p className="text-muted mb-0">{product.description}</p>
                      </div>
                      <div className="col-md-3">
                        <span>
                          {product.quantity}{" "}
                          {product.quantity === 1 ? "unidad" : "unidades"}
                        </span>
                      </div>
                      <div className="col-md-2">
                        <span className="fw-bold">
                          ${(product.price * product.quantity).toFixed(2)}
                        </span>
                      </div>
                      <div className="col-md-1">
                        <i
                          className="bx bx-trash remove-btn"
                          onClick={() => removeFromCart(product.id)}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
  );
};

export default ShoppingCart;
