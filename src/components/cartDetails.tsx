import "@/assets/sass/_cart-details.scss";
import React from "react";

interface CartDetailsProps {
  subtotal: number;
}

const CartDetails: React.FC<CartDetailsProps> = ({ subtotal }) => {
    return(
<div className="col-xl-3 col-md-4 pt-3 pt-md-0">
      <h2 className="h6 px-4 py-3 bg-secondary text-center">Subtotal</h2>
      <div className="h3 font-weight-semibold text-center py-3">
        ${subtotal.toFixed(2)}
      </div>
      <hr />
      <h3 className="h6 pt-4 font-weight-semibold">
        Additional comments
      </h3>
      <textarea
        className="form-control mb-3"
        id="order-comments"
        rows={5}
      ></textarea>
      <a className="btn btn-primary " href="#">
        <i className="feather feather-credit-card mr-2"></i>
        Proceed to Checkout
      </a>
    </div>
    );
}

export default CartDetails;