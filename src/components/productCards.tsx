// src/modules/shopverse/ProductCards/ProductCard.tsx
import "@/assets/sass/_product-cards.scss";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import {
  FaArrowLeft,
  FaTrashAlt,
  FaCcMastercard,
  FaCcVisa,
  FaCcAmex,
  FaCcPaypal,
} from "react-icons/fa";
import type { Product } from "@/types/Product";
interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <Container className="py-5 h-100 bg-transparent">
      <Row className="justify-content-center align-items-center h-100">
        <Col>
          <Card>
            <Card.Body className="p-4">
              <Row>
                {/* 🛒 Carrito */}
                <Col lg={7}>
                  <h5>
                    <a href="#!" className="text-body">
                      <FaArrowLeft className="me-2" />
                      Regresar...
                    </a>
                  </h5>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="mb-0">Producto en el carrito:</p>
                  </div>

                  {/* Producto dinámico */}
                  <Card className="mb-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <img
                            src={product.image}
                            className="rounded-3"
                            style={{ width: "65px" }}
                            alt={product.name}
                          />
                          <div className="ms-3">
                            <h5>{product.name}</h5>
                            <p className="small mb-0">{product.description}</p>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <h5 className="fw-normal mb-0">1</h5>
                          </div>
                          <div style={{ width: "80px" }}>
                            <h5 className="mb-0">${product.price}</h5>
                          </div>
                          <a href="#!" style={{ color: "#cecece" }}>
                            <FaTrashAlt />
                          </a>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                {/* 💳 Pago */}
                <Col lg={5}>
                  <Card className="bg-primary text-white rounded-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">Detalles de la tarjeta</h5>
                      </div>
                      <p className="small">Aceptamos</p>
                      <div className="d-flex mb-3">
                        <FaCcMastercard size={32} className="me-2" />
                        <FaCcVisa size={32} className="me-2" />
                        <FaCcAmex size={32} className="me-2" />
                        <FaCcPaypal size={32} />
                      </div>
                      <Form className="mt-4">
                        <Form.Group className="mb-3">
                          <Form.Label>Nombre de la tarjeta</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nombre de la tarjeta"
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Número de tarjeta</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="1234 5678 9012 3457"
                          />
                        </Form.Group>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Vencimiento</Form.Label>
                              <Form.Control type="text" placeholder="MM/YYYY" />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>CVV</Form.Label>
                              <Form.Control type="password" placeholder="•••" />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form>

                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Precio</p>
                        <p className="mb-2">${product.price}</p>
                      </div>

                      <Button variant="info" className="w-100 mt-3">
                        Comprar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
