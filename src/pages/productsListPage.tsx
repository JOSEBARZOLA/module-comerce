import { useState, useEffect } from "react";
import SidebarFilter from "@/components/sidebarFilter";
import ProductCard from "@/components/productCards";
import productsData from "@/data/products/products.json"; // tu JSON
import { Container, Row, Col } from "react-bootstrap";
import type { Product } from "@/types/Product";
import "@/assets/sass/_sidebarfilter.scss";
import NavbarProducts from "@/components/navbarProducts";
import "@/assets/sass/_product-list-page.scss";
import HeroCarouselVideo from "@/components/heroCarouselVideo";
import ContainerPublicity from "@/components/containerPublicity";

function ProductsListPage() {
  const products: Product[] = productsData as Product[];
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]); // Estado con los productos a mostrar
  const [searchQuery, setSearchQuery] = useState("");  // Estado  de busqueda
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
    filtered = filtered.filter((p) => p.price <= filters.maxPrice);
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
    const selected = products.slice(0, 60);
    setDisplayProducts(selected);
  }, [products]);

  return (
    <>
    <ContainerPublicity/>
      <NavbarProducts onSearch={handleSearch} />
      <SidebarFilter onFilterChange={setFilters} />   {/* Sidebar a la izquierda */}
      <div className="pt-5" id="main-demo"> {/* Body con cards */}
        <section className="my-1 my-md-2">
          <Container>
            <Row className="gy-3 row_card">
              {displayProducts.map((product) => (
                <Col
                  key={product.id}
                  className="col-12 col-md-4 col-xl-2"
                  id="col-product"
                >
                  <div className="product-card">
                    <ProductCard product={product} />
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
<HeroCarouselVideo/>
    </>
  );
}

export default ProductsListPage;
