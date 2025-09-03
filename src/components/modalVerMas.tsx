import "@/assets/sass/_modal-ver-mas.scss";
import { useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";

function VerMas() {
  const [showModal, setShowModal] = useState(false);
  const handleToggle = () => setShowModal((prev) => !prev);
  const handleClose = () => setShowModal(false);


  return (
    <Container className="py-5 h-100 bg-transparent">
      <Button onClick={handleToggle} variant="primary">
        Modal Detalles
      </Button>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton className="no-border-header">
          <Modal.Title>Regresar</Modal.Title>
        </Modal.Header>
        {/* Global Container */}

        <div className="card-container">
          {/* image div */}
          <div className="col-12 col-md-4 col-xl-4 container-image">
            <img
              src="https://imgs.search.brave.com/8TQ0EiiNsLVgksdfDPE-s0u_37u7AIBML7IDk0lYKK0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zcG9y/dGxpbmUudnRleGFz/c2V0cy5jb20vYXJx/dWl2b3MvaWRzLzEy/NjMzMzktODAwLWF1/dG8_dj02Mzg1NDk3/Nzg5OTYzNzAwMDAm/d2lkdGg9ODAwJmhl/aWdodD1hdXRvJmFz/cGVjdD10cnVl"
              alt="camera"
              className="card-image"
            />
          </div>
          {/* content */}
          <div className="content col-12 col-md-8 col-xl-6">
            {/* Label Description */}
            <div className="description">
              {/* Title */}
              <div className="title">HiTech Camera</div>
              <div className="subtitle">
                <a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur harum voluptates amet, eos minus tempore molestiae
                  nesciunt obcaecati totam eius!
                </a>

                <a>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  sunt fugiat quam ad perferendis molestiae ut sit consequatur
                  nihil modi!
                </a>
              </div>

              {/* Price Container */}
              <div className="price-container">
                <p className="price">$599</p>
              </div>
              {/* Bottom Buttons Container */}
              <div className="buttons-container">
                <button className="btn btn-primary">
                  <i className="fas fa-wallet me-2"></i>Comprar
                </button>
                <button className="btn btn-danger">
                  <i className="fas fa-shopping-cart me-2"></i>Agregar al
                  carrito
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
}

export default VerMas;
