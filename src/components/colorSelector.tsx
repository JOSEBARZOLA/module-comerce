import "@/assets/sass/_color-selector.scss";
import React, { useState } from "react";

type ColorOption = {
  src: string;
  label: string;
};

interface ColorSelectorProps {
  colors: ColorOption[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState<ColorOption | null>(
    colors.length > 0 ? colors[0] : null
  );
  const [hoveredColor, setHoveredColor] = useState<ColorOption | null>(null);

  return (
    <div className="color-selector">
      <h5>
        Color:{" "}
        <strong>
          {hoveredColor ? hoveredColor.label : selectedColor?.label}
        </strong>
      </h5>
      <div className="color-options">
        {colors.map((color: ColorOption, index: number) => (
          <img
            key={index}
            src={color.src}
            className={`color-thumb ${
              selectedColor?.label === color.label ? "selected" : ""
            }`}
            onClick={() => setSelectedColor(color)}
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
