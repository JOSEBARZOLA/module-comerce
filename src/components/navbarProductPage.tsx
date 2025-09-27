import { useNavigate } from "react-router-dom";

interface NavProductPageProps {
  onCartClick: () => void;
}
function NavProductPage({ onCartClick }: NavProductPageProps) {
  const navigate = useNavigate();
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <button
          className="btn btn-sm btn-success me-2"
          type="button"
          onClick={() => navigate("/")}
        >
          Inicio
        </button>
        <button
          className="btn btn-sm btn-secondary"
          type="button"
          onClick={onCartClick}
        >
          Carrito
        </button>
      </form>
    </nav>
  );
}

export default NavProductPage;
