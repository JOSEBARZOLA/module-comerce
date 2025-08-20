import "../assets/sass/_cartSidebar.scss";
import { useRef } from "react";
import ProductCards from "./productCards";

function CartSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => {
    sidebarRef.current?.classList.toggle("active-nav");
    containerRef.current?.classList.toggle("active-cont");
  };
  return (
    <>
      <div
        ref={sidebarRef}
        className="side-navbar d-flex flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <h2 className="title">Usuario</h2>
          <li className="nav-link">
            <span className="mx-2">Carrito</span>
          </li>
        </ul>
        <div>
          <ProductCards/>
        </div>
        
      </div>
      <div ref={containerRef} className="p-1 my-container">
        <nav className="navbar top-navbar">
          <button onClick={handleToggle} className="btn border-0" id="menu-btn">
            <i className="bx bxs-cart"></i>
          </button>
        </nav>
      </div>
    </>
  );
}

export default CartSidebar;
