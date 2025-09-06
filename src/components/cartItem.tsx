import React from "react";
import "@/assets/sass/_cart-details.scss";


interface CartItemProps {
  id: number | string;
  title: string;
  size: string | number;
  color: string;
  price: number;
  image: string;
  quantity: number;
  onUpdateQuantity: (id: string | number, qty: number) => void;
  onRemove: (id: string | number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  id,
  title,
  size,
  color,
  price,
  image,
  quantity,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div className="d-sm-flex justify-content-between my-4 pb-4 border-bottom">
      {/* Imagen + info */}
      <div className="media d-block d-sm-flex text-center text-sm-left">
        <a className="cart-item-thumb mx-auto mr-sm-4" href="#">
          <img src={image} alt={title} />
        </a>
        <div className="media-body pt-3">
          <h3 className="product-card-title font-weight-semibold border-0 pb-0">
            <a href="#">{title}</a>
          </h3>
          <div className="font-size-sm">
            <span className="text-muted mr-2">Size:</span>
            {size}
          </div>
          <div className="font-size-sm">
            <span className="text-muted mr-2">Color:</span>
            {color}
          </div>
          <div className="font-size-lg text-primary pt-2">${price}</div>
        </div>
      </div>

      {/* Controles */}
      <div
        className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left"
        style={{ maxWidth: "10rem" }}
      >
        <div className="form-group mb-2">
          <label htmlFor={`quantity-${id}`}>Quantity</label>
          <input
            className="form-control form-control-sm"
            type="number"
            id={`quantity-${id}`}
            value={quantity}
            min={1}
            onChange={(e) => onUpdateQuantity(id, Number(e.target.value))}
          />
        </div>
        <button
          className="btn btn-outline-secondary btn-sm btn-block mb-2"
          type="button"
          onClick={() => onUpdateQuantity(id, quantity)}
        >
          <i className="feather feather-refresh-cw mr-1"></i>
          Actualizar
        </button>
        <button
          className="btn btn-outline-danger btn-sm btn-block mb-2"
          type="button"
          onClick={() => onRemove(id)}
        >
          <i className="feather feather-trash-2 mr-1"></i>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;