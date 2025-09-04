import "@/assets/sass/_sidebarfilter.scss";
import { Form } from "react-bootstrap";
import { useState } from "react";
import FilterSection from "@/components/filterProps";

interface SidebarFilterProps {
  onFilterChange: (filters: {
    categories: string[];
    minPrice: number;
    maxPrice: number;
  }) => void;
}

function SidebarFilter ({ onFilterChange }: SidebarFilterProps){
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500000);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  

const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };
  const handleSearch = () => {
  onFilterChange({
    categories: selectedCategories,
    minPrice,
    maxPrice,
  });
};
  
  return (
    <section>
      <aside
        className="bsb-sidebar-1 offcanvas offcanvas-start"
        tabIndex={-1}
        id="bsbSidebar1"
        aria-labelledby="bsbSidebarLabel1"
      >
        <div className="offcanvas-header">
          <h5 className="">Filtros</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body pt-0">
          <hr className="sidebar-divider m-1" />
          <FilterSection title="Categorias">
            <form>
              <div className="form-group nav-link-icon">
                <input
                  type="checkbox"
                  onChange={() => toggleCategory("Botines")}
                  checked={selectedCategories.includes("Botines")}
                />
                <label className="nav-link-text">Botines</label>
              </div>
              <div className="form-group nav-link-icon">
                <div className="form-group nav-link-icon">
                  <input
                    type="checkbox"
                    onChange={() => toggleCategory("Calzado Femenino")}
                    checked={selectedCategories.includes("Calzado Femenino")}
                  />
                  <label className="nav-link-text">Calzado Femenino</label>
                </div>
              </div>
              <div className="form-group nav-link-icon">
                <div className="form-group nav-link-icon">
                  <input
                    type="checkbox"
                    onChange={() => toggleCategory("Zapatillas Masculinas")}
                    checked={selectedCategories.includes(
                      "Zapatillas Masculinas"
                    )}
                  />
                  <label className="nav-link-text">Zapatillas Masculinas</label>
                </div>
              </div>
              <div className="form-group nav-link-icon ">
                <div className="form-group nav-link-icon">
                  <input
                    type="checkbox"
                    onChange={() => toggleCategory("Camisetas")}
                    checked={selectedCategories.includes("Camisetas")}
                  />
                  <label className="nav-link-text">Camisetas</label>
                </div>
              </div>
              <div className="form-group nav-link-icon ">
                <div className="form-group nav-link-icon">
                  <input
                    type="checkbox"
                    onChange={() => toggleCategory("Ropa Casual")}
                    checked={selectedCategories.includes("Ropa Casual")}
                  />
                  <label className="nav-link-text">Ropa Casual</label>
                </div>
              </div>
              <div className="form-group nav-link-icon">
                <div className="form-group nav-link-icon">
                  <input
                    type="checkbox"
                    onChange={() => toggleCategory("Camperas Deportivas")}
                    checked={selectedCategories.includes("Camperas Deportivas")}
                  />
                  <label className="nav-link-text">Camperas Deportivas</label>
                </div>
              </div>
            </form>
          </FilterSection>
          <FilterSection title="Talles">
            <form>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">M</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">L</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">S</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">XL</label>
              </div>
            </form>
          </FilterSection>
          <FilterSection title="Rango de precio">
            <div className="mb-1">
              <label className="nav-link-text">
                Precio mínimo: ${minPrice}
              </label>
              <Form.Range
                min={0}
                max={150000}
                step={10}
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
              />
            </div>
            <div className="mb-1">
              <label className="nav-link-text">
                Precio máximo: ${maxPrice}
              </label>
              <Form.Range
                min={150000}
                max={300000}
                step={10}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
              />
            </div>
          </FilterSection>
          <FilterSection title="Numero">
            <form>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">41</label>
              </div>
              <div className="form-group nav-link-icon">
                <input type="checkbox" />
                <label className="nav-link-text">42</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">43</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">44</label>
              </div>
              <div className="form-group nav-link-icon ">
                <input type="checkbox" />
                <label className="nav-link-text">45</label>
              </div>
            </form>
          </FilterSection>
          <div className="col-10 ms-3" id="busc-btn">
            <button
              className="btn btn-primary text-white col-12 col-mb-4"
              id="btn-buscar"
              type="button"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
        </div>
      </aside>
    </section>
  );
}
export default SidebarFilter;