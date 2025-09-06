import "@/assets/sass/_modal-ver-mas.scss";
import type { Product } from "@/types/Product"
import { Button, Modal } from "react-bootstrap";
import ProductDetail from "@/components/productDetail"

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
        <Modal.Body id="modal_body">
             
        <ProductDetail/>
    </Modal.Body>
      </Modal>
    
  );
}

export default VerMas;









