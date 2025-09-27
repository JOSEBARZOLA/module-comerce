import "@/assets/sass/_modal-payment-info.scss";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import methodPayment1 from "@/assets/img/payment/methodPayment1.png";
import methodPayment2 from "@/assets/img/payment/methodPayment2.png";
import methodPayment3 from "@/assets/img/payment/methodPayment3.png";

function PaymentInfo() {
  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  return (
    <>
      <button className="btn btn-link payment-methods" onClick={openModal}>
        Ver medios de pago
      </button>
      <Modal
        show={show}
        onHide={closeModal}
        centered
        dialogClassName="payment-modal"
      >
        <Modal.Header closeButton className="no-border-header"></Modal.Header>
        <Modal.Body id="modal_body" className="p-0">
          <img
            src={methodPayment1}
            alt="Medio de pago 1"
            className="d-block w-100"
          />
          <img
            src={methodPayment2}
            alt="Medio de pago 2"
            className="d-block w-100"
          />
          <img
            src={methodPayment3}
            alt="Medio de pago 3"
            className="d-block w-100"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PaymentInfo;
