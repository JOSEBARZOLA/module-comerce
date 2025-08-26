import "@/assets/sass/_product-cards.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaCcMastercard, FaCcVisa, FaCcAmex, FaCcPaypal } from "react-icons/fa";
import type { Product } from "@/types/Product";
interface ProductCardProps {
  product: Product;
}

function PaymentCredit({ product }: ProductCardProps) {
  return (
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
              <Form.Control type="text" placeholder="Nombre de la tarjeta" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Número de tarjeta</Form.Label>
              <Form.Control type="text" placeholder="1234 5678 9012 3457" />
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
  );
}
export default PaymentCredit;
