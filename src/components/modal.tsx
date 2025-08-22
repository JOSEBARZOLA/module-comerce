import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import ProductCard from "@/components/productCards";
import "@/assets/sass/_modal.scss";

export default function ModalOpen() {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => setShowModal((prev) => !prev);
  const handleClose = () => setShowModal(false);

  return (
    <Container className="py-5 h-100 bg-transparent">
      <Button onClick={handleToggle} variant="primary">
        Modal carrito
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <ProductCard
          product={{
            id: 1,
            name: "Remera básica",
            description: "Remera de algodón 100%",
            price: 29.99,
            image: "/img/remera.jpg",
          }}
        />
      </Modal>
    </Container>
  );
}
