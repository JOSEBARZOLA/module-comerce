import "@/assets/sass/_product-cards.scss";
import { Card } from "react-bootstrap";


interface CardProps {
  product: {
    name: string;
    description?: string;
    price: number;
    oldPrice?: number;
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
        {product.oldPrice && (
          <p className="old-price">${product.oldPrice.toLocaleString()}</p>
        )}
        <span className="card-price">${product.price.toLocaleString()}</span>
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description || ""}</p>
        <span className="envio-span">Envío gratis </span>
      </div>
    </Card>
  );
}

export default ProductCard;