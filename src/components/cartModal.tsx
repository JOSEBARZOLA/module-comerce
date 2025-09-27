
import {  Modal } from "react-bootstrap";
import "@/assets/sass/_cart-modal.scss";
import ShoppingCart from "@/components/shoppingCart";

interface ModalOpenProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalOpen({ isOpen, onClose }: ModalOpenProps)  {



  return (
      <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton className="no-border-header"></Modal.Header>
      <Modal.Body>
        <ShoppingCart/>
      </Modal.Body>
    </Modal>
  );
}