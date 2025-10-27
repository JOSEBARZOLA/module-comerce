import React from "react";
import "@/assets/sass/_modal-pop-up.scss";

interface ModalPopUpProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  buttonLabel?: string;
  onAccept?: () => void; // Acción cuando se hace clic en Aceptar
  disableAccept?: boolean; // Permite deshabilitar el botón de Aceptar
  showAcceptButton?: boolean; // Opción para ocultar el botón si no se necesita
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({
  id,
  title,
  children,
  buttonLabel = "Abrir modal",
  onAccept,
  disableAccept = false,
  showAcceptButton = true,
}) => {
  return (
    <>
      <div
        className="popUp-Modal modal fade modal-lg"
        id={id}
        aria-labelledby={`${id}Label`}
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {title && (
              <div className="modal-header mw-100">
                <h1 className="textModal modal-title" id={`${id}Label`}>
                  {title}
                </h1>
              </div>
            )}

            <div className="modal-body">{children}</div>

            {showAcceptButton && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  id="btn-close"
                  data-bs-dismiss={!disableAccept ? "modal" : undefined} // solo cierra si está habilitado
                  onClick={() => {
                    if (!disableAccept && onAccept) onAccept();
                  }}
                  disabled={disableAccept}
                >
                  Aceptar
                </button>
              </div>
            )}
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
