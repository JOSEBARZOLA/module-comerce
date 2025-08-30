import "@/assets/sass/_product-cards.scss";
import { Card, } from "react-bootstrap";

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
                <img className="product-image card-img-top" src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxM3x8cHJlbWl1bSUyMGhlYWRwaG9uZXxlbnwwfDB8fHwxNzM0ODUwNDgxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt={product.name}/>
            </div>
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title mb-0">{product.name}</h5>
                </div>
                <p className="card-text text-muted">{product.description || ''}</p>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div>
                  {/**     <span className="text-muted text-decoration-line-through">$299.99</span>  */}{/**precio rebajado */}
                        <span className="h4 mb-0 ms-2 text-primary">${product.price}</span>
                    </div>
                </div>
                <div className="d-grid gap-1">
                    <button className="btn btn-primary">
                        <i className="fas fa-shopping-cart me-2"></i>Agregar
                    </button>
                    <button className="btn btn-outline-secondary">
                        <i className="fas fa-heart me-2"></i>Ver mas
                    </button>
                </div>
            </div>
        </Card>
  );
}
export default ProductCard;
