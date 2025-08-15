import "../assets/sass/_cartSidebar.scss";
import { useRef } from "react";

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
        className="side-navbar d-flex justify-content-between flex-wrap flex-column"
        id="sidebar"
      >
        <ul className="nav flex-column text-white w-100">
          <a href="#" className="nav-link h3 my-2">
            Usuario
          </a>
          <li className="nav-link">
            <span className="mx-2">Carrito</span>
          </li>
        </ul>
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
