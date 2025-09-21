import "@/assets/sass/_product-cards.scss";
import { Card } from "react-bootstrap";


interface CardProps {
  product: {
    name: string;
    description?: string;
    price: number;
    image?: string;
  };
}

function ProductCard({ product }: CardProps) {
  return (
    <Card className="product-card">
      <div className="position-relative overflow-hidden">
        <img
          className="product-image card-img-top"
          src={
            product.image ||
            "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg"
          }
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{product.name}</h5>
        </div>
        <p className="card-text text-muted">{product.description || ""}</p>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <span className="h4 mb-0 ms-2 card-price">${product.price}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;