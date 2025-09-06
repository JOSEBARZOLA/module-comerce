import "@/assets/sass/_product-cards.scss";
import { Card } from "react-bootstrap";


interface CardProps {
  product: {
    name: string;
    description?: string;
    price: number;
    image?: string;
  };
    onVerMas?: () => void; // 👈 nuevo prop
}

function ProductCard({ product, onVerMas }: CardProps) {
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
        <div className="d-grid gap-1">
          <button className="btn btn-primary">
            <i className="fas fa-shopping-cart me-2"></i>Agregar
          </button>
          <button 
            className="btn btn-outline-success"
            onClick={onVerMas} // 👈 aquí llamamos la función que viene del padre
          >
            <i className="fas fa-circle-info me-2"></i>Ver mas
          </button>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;