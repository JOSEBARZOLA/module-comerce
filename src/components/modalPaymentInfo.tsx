import "@/assets/sass/_modal-payment-info.scss";
import { useState } from "react";
import { Modal } from "react-bootstrap";

function PaymentInfo() {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <button className="btn btn-link payment-methods" onClick={openModal}>
        Ver medios de pago
      </button>

      <Modal show={show} onHide={closeModal} centered dialogClassName="payment-modal">
  <Modal.Header closeButton className="no-border-header"></Modal.Header>
  <Modal.Body id="modal_body" className="p-0">
    <img
      src="src/assets/img/payment/methodPayment1.png"
      alt="Medio de pago 1"
      className="d-block w-100"
    />
    <img
      src="src/assets/img/payment/methodPayment2.png"
      alt="Medio de pago 2"
      className="d-block w-100"
    />
    <img
      src="src/assets/img/payment/methodPayment3.png"
      alt="Medio de pago 3"
      className="d-block w-100"
    />
  </Modal.Body>
</Modal>

    </>
  );
}

export default PaymentInfo;
