
import { Dropdown } from "react-bootstrap";
import "@/assets/sass/_quantity-selector.scss";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (q: number) => void;
}
const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, onChange }) => {
  const options = [1, 2, 3, 4, 5];

  
  return (
    <div>
      <h5 id="h5">
        Cantidad:{" "}
        <Dropdown className="d-inline">
          <Dropdown.Toggle
            variant="link"
            className="quantity-toggle"
          >
            {quantity} {quantity === 1 ? "unidad" : "unidades"}
          </Dropdown.Toggle>

          <Dropdown.Menu
            className="quantity-menu"
           popperConfig={{ strategy: "absolute" }}  // 👈 acá es
          >
            {options.map((num) => (
              <Dropdown.Item
                key={num}
               onClick={() => onChange(num)} // 👈 avisamos al padre
                className={`quantity-item ${
                  quantity === num ? "active" : ""
                }`}
              >
                {num} {num === 1 ? "unidad" : "unidades"}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </h5>
    </div>
  );
};

export default QuantitySelector;
