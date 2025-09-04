import "@/assets/sass/_modal-ver-mas.scss";
import type { Product } from "@/types/Product"
import { Button, Modal } from "react-bootstrap";


interface VerMasProps {
  show: boolean;
  onClose: () => void;
    product?: Product | null;
}

function VerMas({ show, onClose,  product }: VerMasProps){
  if (!product) return null; // No renderizar si no hay producto

  return (
    
      <Modal show={show} onHide={onClose} centered>
        <Modal.Header closeButton className="no-border-header">
          <Modal.Title>Regresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="card-container">
          {/* image div */}
          <div className="col-12 col-md-4 col-xl-4 container-image">
            <img
              src={product.image}
              alt={product.name}
              className="card-image"
            />
          </div>
          {/* content */}
          <div className="content col-12 col-md-8 col-xl-7">
            {/* Label Description */}
            <div className="description">
              {/* Title */}
              <div className="title">{product.name}</div>
              <div className="subtitle">
                <a>{product.description}
                </a>
              </div>

              {/* Price Container */}
              <div className="price-container">
                <p className="price">${product.price}</p>
              </div>
              {/* Bottom Buttons Container */}
              <div className="buttons-container">
                <Button className="btn btn-primary"><i className="fas fa-wallet me-2"></i>Comprar</Button>
                <Button className="btn btn-danger"> <i className="fas fa-shopping-cart me-2"></i>Agregar al
                  carrito</Button>
              </div>
            </div>
          </div>
        </div>    
    </Modal.Body>
      </Modal>
    
  );
}

export default VerMas;
