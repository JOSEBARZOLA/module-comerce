import { useState, useEffect } from "react";
import SidebarFilter from "@/components/sidebarFilter";
import ProductCard from "@/components/productCards";
import productsData from "@/data/products/products.json"; // tu JSON
import { Container, Row, Col } from "react-bootstrap";
import type { Product } from "@/types/Product";
import "@/assets/sass/_sidebarfilter.scss"
import NavbarProducts from "@/components/navbarProducts";



function ProductsListPage() {
  const products: Product[] = productsData as Product[];
  // Estado con los productos a mostrar
    const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
 // Estado  de busqueda
 const [searchQuery, setSearchQuery] = useState("");




  const handleSearch = (query: string) => {
  setSearchQuery(query);
};



  
 const [filters, setFilters] = useState<{
    categories: string[];
    
    maxPrice: number;
  }>({
    categories: [],
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
      (p) => p.price <= filters.maxPrice
    );
 // Filtro de búsqueda
  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description?.toLowerCase().includes(q) ?? false) ||
        p.category.toLowerCase().includes(q)
    );
  }






    setDisplayProducts(filtered);
  }, [filters, products, searchQuery]);
  useEffect(() => {
    // Ejemplo: mostrar 60 productos random
   // const shuffled = [...products].sort(() => 0.5 - Math.random());
    const selected = products.slice(0, 60);
    setDisplayProducts(selected);
  }, [products]);




  return (
    <>
    <NavbarProducts onSearch={handleSearch}/>
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
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default ProductsListPage;
