import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "@/assets/sass/_Button-group-size.scss"

const SizeSelector = () => {
  const sizes = ["36 AR", "37 AR", "38 AR", "39 AR", "40 AR", "41 AR"];
  const [selectedSize, setSelectedSize] = useState<string | null>("36 AR");
const [hoverSize, setHoverSize] = useState<string | null>(null);
  return (
    <Row className="g-2 mb-4">
        <h5>
        Talle:{" "}
        <strong>
          {hoverSize || selectedSize}
        </strong>
      </h5>
      {sizes.map((size) => (
        <Col key={size} xs="auto">
          <Button
            variant="outline-secondary"
            className={`size-button ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
            onMouseEnter={() => setHoverSize(size)}
              onMouseLeave={() => setHoverSize(null)}
          >
            {size}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default SizeSelector;
