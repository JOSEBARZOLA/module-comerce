import { useEffect, useState } from "react";
import "@/assets/sass/_how-it-works.scss";

function HowItWorks() {
  const progress = [
    [
      "Pasos para reservar",
      "Aqui te brindamos una serie de pasos a seguir para que reserves tu clase de forma rapida y efectiva.",
    ],
    [
      "LogIn/Registro",
      "Primero deberas loguearte con tu cuenta para poder hacer efectiva la reserva, en el caso de no tener una cuenta, deberas registrarte en la seccion de registro, una vez registrado, ingresa al apartado Planes.",
    ],
    [
      "Planes de entrenamiento",
      "Aqui deberas elegir que plan de entrenamiento quieres tener.",
    ],
    [
      "Seleccion de dias",
      "Una vez hayas seleccionado tu plan, podras dirigirte al calendario y seleccionar los dias para tus clases.",
    ],
    [
      "Pagos",
      "Los planes de entrenamiento son planes de pago mensual, comenzando a correr desde el 1 de cada mes, puedes efectuar el pago por adelantado, o dentro de los primeros 10 dias del corriente mes, en caso de retraso se aplicara un recargo, finalizado el mes sin pago, la cuenta quedara restringida y no podra reservar futuras clases.",
    ],
  ];

  const [value, setValue] = useState(0);

  // Maneja los textos
  const [title, setTitle] = useState(progress[0][0]);
  const [text, setText] = useState(progress[0][1]);

  // Actualiza texto según el valor actual
  useEffect(() => {
    setTitle(progress[value][0]);
    setText(progress[value][1]);
  }, [value]);

  // Función para obtener las clases de cada burbuja
  const getBubbleClass = (index: number) => {
    return index <= value ? "bubble bubble-fill" : "bubble";
  };

  // Handlers de botones
  const handleNext = () => {
    if (value < progress.length - 1) setValue(value + 1);
  };
  const handleBack = () => {
    if (value > 0) setValue(value - 1);
  };
  return (
    <div id="container_how-works" className="container">
      <div className="card">
        <div className="box">
          <h1 id="title">{title}</h1>
          <p id="text">{text}</p>
          <div className="bottom-element">
            <div id="footer-card">
              <div id="back" onClick={handleBack}>
                Back
              </div>
              <div id="progress">
                {progress.map((_, i) => (
                  <>
                    <span
                      key={i}
                      className={`${getBubbleClass(i)}${
                        i === progress.length - 1 ? " tap" : ""
                      }`}
                      id={`bubble-${i + 1}`}
                    />
                    {i < progress.length - 1 && (
                      <div className="connector" aria-hidden="true" />
                    )}
                  </>
                ))}
              </div>

              <div id="next" onClick={handleNext}>
                Next
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
