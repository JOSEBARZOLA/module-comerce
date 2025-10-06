// sizeSelector.tsx
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "@/assets/sass/_Button-group-size.scss";

interface Props {
  selectedSize: string;
  onChange: (size: string) => void;
}

const SizeSelector: React.FC<Props> = ({ selectedSize, onChange }) => {
  const sizes = ["36 AR", "37 AR", "38 AR", "39 AR", "40 AR", "41 AR"];
  const [hoverSize, setHoverSize] = useState<string | null>(null);

  return (
    <Row className="g-2 mb-4">
      <h5 className="size">
        Talle: <strong>{hoverSize || selectedSize}</strong>
      </h5>
      {sizes.map((size) => (
        <Col key={size} xs="auto">
          <Button
            variant="outline-secondary"
            className={`size-button ${selectedSize === size ? "active" : ""}`}
            onClick={() => onChange(size)}
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
