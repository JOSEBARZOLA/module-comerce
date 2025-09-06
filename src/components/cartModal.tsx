import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import "@/assets/sass/_modal.scss";
import CartItem from "@/components/cartItem";
import CartDetails from "@/components/cartDetails";
import "@/assets/sass/_cart-details.scss";

export default function ModalOpen() {
  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => setShowModal((prev) => !prev);
  const handleClose = () => setShowModal(false);

    const [cart, setCart] = useState([
    {
      id: 1,
      title: "Calvin Klein Jeans Keds",
      size: "8.5",
      color: "Black",
      price: 125,
      image: "https://www.bootdey.com/image/240x240/FF0000/000000",
      quantity: 1,
    },
    {
      id: 2,
      title: "Nike Air Zoom Pegasus",
      size: "42",
      color: "White",
      price: 150,
      image: "https://www.bootdey.com/image/240x240/00FF00/000000",
      quantity: 2,
    },
  ]);

    const handleUpdateQuantity = (id: number, qty: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  return (
    <Container className="py-5 h-100 bg-transparent">
      
      <Button onClick={handleToggle} variant="primary">
        Modal carrito
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="no-border-header">
        <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container ">
            <div className="row">
              {/* Lista de productos */}
              <div className="col-xl-9 col-md-8">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemove={handleRemove}
                  />
                ))}
              </div>

              {/* Resumen */}
              <CartDetails subtotal={subtotal} />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}