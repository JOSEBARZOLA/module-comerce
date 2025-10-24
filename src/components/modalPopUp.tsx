import React from "react";
import "@/assets/sass/_modal-pop-up.scss";

interface ModalPopUpProps {
  id: string; // ID único para poder abrir el modal correcto
  title?: string; // Título opcional
  children: React.ReactNode; // Contenido dinámico
  buttonLabel?: string; // Texto del botón
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({
  id,
  title,
  children,
  buttonLabel = "Abrir modal",
}) => {
  return (
    <>
      <div
        className="popUp-Modal modal fade modal-lg "
        id={id}
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {title && (
              <div className="modal-header mw-100">
                <h1 className="textModal modal-title " id={`${id}Label`}>
                  {title}
                </h1>
              </div>
            )}
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                id="btn-close"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#${id}`}
      >
        {buttonLabel}
      </button>
    </>
  );
};
export default ModalPopUp;
