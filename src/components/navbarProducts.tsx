import "@/assets/sass/_navbar-product.scss";

function NavbarProducts() {
  return (
    <nav className="navbar bsb-navbar bsb-navbar-caret">
      <div className="container position-relative justify-content-center">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder=" ¿Qué estás buscando?"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        <button
          className="navbar-toggler  position-absolute start-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#bsbSidebar1" // 👈 apunta al ID de tu Sidebar real
          aria-controls="bsbSidebar1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
export default NavbarProducts;
