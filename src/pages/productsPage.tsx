import { useState, useEffect } from "react";
import SidebarFilter from "@/components/sidebarFilter";
import ProductCard from "@/components/productCards";
import VerMas from "@/components/modalVerMas";
import productsData from "@/data/products/products.json"; // tu JSON
import { Container, Row, Col } from "react-bootstrap";
import type { Product } from "@/types/Product";
import "@/assets/sass/_sidebarfilter.scss"
import NavbarProducts from "@/components/navbarProducts";


function ProductsPage() {
  const products: Product[] = productsData as Product[];
  // Estado con los productos a mostrar
    const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
 
  // Estado del modal
  const [showModal, setShowModal] = useState(false);

  // si en el futuro quieres mostrar info de un producto específico
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);


const handleVerMas = (product: Product ) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // setSelectedProduct(null);
  };
 const [filters, setFilters] = useState<{
    categories: string[];
    minPrice: number;
    maxPrice: number;
  }>({
    categories: [],
    minPrice: 0,
    maxPrice: 500000,
  });
  useEffect(() => {
    let filtered = [...products];

    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category)
      );
    }
    filtered = filtered.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );
    setDisplayProducts(filtered);
  }, [filters, products]);
  useEffect(() => {
    // Ejemplo: mostrar 60 productos random
   // const shuffled = [...products].sort(() => 0.5 - Math.random());
    const selected = products.slice(0, 60);
    setDisplayProducts(selected);
  }, [products]);
  return (
    <>
    <NavbarProducts/>
      {/* Sidebar a la izquierda */}
      <SidebarFilter onFilterChange={setFilters}/>
      {/* Body con cards */}

      <div className="pt-5" id="main-demo">
        <section className="my-1 my-md-1">
          <Container>
            <Row className="gy-3 row_card">
              {displayProducts.map((product) => (
                <Col key={product.id} className="col-12 col-md-4 col-xl-3">
                  <ProductCard  product={product} 
                  onVerMas={() => handleVerMas(product)}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>

      {/* Modal VerMas */}
      <VerMas show={showModal} onClose={handleCloseModal} product={selectedProduct}/>
    </>
  );
}

export default ProductsPage;
