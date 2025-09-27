import "@/assets/sass/_product-cards.scss";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface CardProps {
  product: {
    id: number;
    name: string;
    description?: string;
    price: number;
    oldPrice?: number;
    image?: string;
    images?: string[]; // 👈 agregamos soporte para array de imágenes
  };
}

function ProductCard({ product }: CardProps) {
  const navigate = useNavigate();

  // Fallback para la imagen
  const imageSrc =
    product.image ||
    (product.images && product.images.length > 0 ? product.images[0] : null) ||
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg";

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <Card
      className="product-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative overflow-hidden">
        <img
          className="product-images card-img-top"
          src={imageSrc}
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
        {/* Bloque envío: lo movemos al fondo con margin-top:auto */}
        <div className="shipping">
          <span className="envio-span">Envío gratis </span>
          <span className="full-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="bolt-icon"
            >
              <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z" />
            </svg>
            FULL
          </span>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
