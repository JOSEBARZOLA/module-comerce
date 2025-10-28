import React, { useState } from "react";

interface InfoPlansProps {
  onCheckChange?: (checked: boolean) => void;
}

const InfoPlans: React.FC<InfoPlansProps> = ({ onCheckChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    onCheckChange?.(value);
  };

  return (
    <>
      <p className="text-md-start fw-light">
  A continuación, encontrarás toda la información relacionada con los planes de
  entrenamiento, su funcionamiento, pagos, reservas y condiciones generales.
</p>

<h5 className="fw-bolder fst-italic">Tipos de planes:</h5>
<p className="text-md-start fw-light">
  Cada plan se compone de clases semanales con renovación mensual. El alumno
  podrá elegir el plan que mejor se adapte a sus necesidades y efectuar el pago
  de manera inmediata o durante el transcurso del mes (esta opción estará
  disponible a partir del segundo mes de actividad).
</p>
<p className="text-md-start fw-light">
  Una vez activo el plan, el alumno podrá acceder al calendario para seleccionar
  los días de la semana en los que desea asistir y reservar sus clases. Es
  obligatorio confirmar la asistencia o, en caso contrario, cancelar la clase
  con antelación. En caso de acumular dos clases sin cancelar, el sistema
  aplicará una penalización automática. El alumno es responsable de conocer las
  penalizaciones y los posibles recargos derivados del incumplimiento en los
  pagos o reservas.
</p>

<ul>
  <li className="fw-light fst-italic">2 clases por semana</li>
  <li className="fw-light fst-italic">3 clases por semana</li>
</ul>

<h5 className="fw-bolder fst-italic">Pagos:</h5>
<p className="text-md-start fw-light">
  Los pagos podrán realizarse en efectivo, débito o transferencia virtual. El
  primer pago mensual deberá realizarse en el momento de la inscripción. A
  partir de la renovación del plan, el alumno podrá abonar al inicio o durante
  el transcurso del mes, recordando que el incumplimiento o retraso en el pago
  generará sanciones y recargos por mora.
</p>

<h5 className="fw-bolder fst-italic">Penalizaciones:</h5>
<p className="text-md-start fw-light">
  Las penalizaciones se aplicarán según la gravedad y frecuencia de las
  infracciones. Si el alumno tiene el plan al día y acumula dos clases sin
  cancelar, recibirá una sanción de dos clases. Durante este período podrá
  seguir realizando reservas, pero si el cupo de la clase se completa, pasará
  automáticamente a lista de espera.
</p>
<p className="text-md-start fw-light">
  Si el alumno no tiene regularizado el pago, no podrá realizar reservas durante
  el mismo lapso y bajo las mismas condiciones. Si al finalizar el plan el pago
  continúa pendiente, se aplicarán recargos por vencimiento con un plazo de cinco
  días hábiles para regularizar la situación. Las reservas hechas dentro de ese
  plazo quedarán sujetas a disponibilidad y podrían pasar a lista de espera. Si
  transcurrido el plazo no se regulariza el pago, el sistema bloqueará las
  reservas hasta que se abone el saldo adeudado y los recargos correspondientes.
</p>

<h5 className="fw-bolder fst-italic">Lista de espera:</h5>
<p className="text-md-start fw-light">
  Por respeto al resto de los alumnos, al profesor y al espacio, se aplicará el
  sistema de lista de espera en los siguientes casos:
</p>

<ul>
  <li className="fw-light fst-italic">
    Si el alumno tiene su plan al día pero acumula dos clases sin cancelar,
    podrá seguir reservando la semana siguiente. Sin embargo, si el cupo de la
    clase se completa, será trasladado a la lista de espera por la misma
    cantidad de clases sancionadas.
  </li>
  <li className="fw-light fst-italic">
    Si el alumno no tiene su plan regularizado, no podrá realizar reservas
    durante dicho período. En caso de que ya tenga una reserva hecha, esta será
    trasladada a la lista de espera con la prioridad correspondiente.
  </li>
  <li className="fw-light fst-italic">
    Si un alumno cancela su reserva, el cupo se asignará automáticamente al
    siguiente en la lista de espera.
  </li>
</ul>

<h5 className="fw-bolder fst-italic">Orden de la lista:</h5>
<ul>
  <li className="fw-light fst-italic">
    El orden general se asigna según el orden de reserva.
  </li>
  <li className="fw-light fst-italic">
    No obstante, los alumnos con infracciones o pagos irregulares se reorganizan
    automáticamente según la prioridad definida por el sistema.
  </li>
</ul>

<h5 className="fw-bolder fst-italic">Prioridad en la lista:</h5>
<p className="text-md-start fw-light">
  La prioridad en la lista de espera se asigna de manera jerárquica:
</p>

<ul>
  <li className="fw-light fst-italic">
    Los alumnos con plan regular y al día tienen prioridad sobre aquellos con
    deudas o sanciones.
  </li>
  <li className="fw-light fst-italic">
    Si dos alumnos regulares intentan reservar el mismo cupo, el cupo se
    asignará por orden de reserva. En caso de que uno de ellos esté irregular en
    el pago, pasará al segundo lugar en la prioridad.
  </li>
  <li className="fw-light fst-italic">
    Si el cupo de la clase está lleno, los alumnos regulares en lista de espera
    tendrán prioridad de asignación sobre los alumnos con estado irregular.
  </li>
  <li className="fw-light fst-italic">
    Las sanciones por faltar sin cancelar afectan la prioridad de manera
    proporcional a la cantidad de infracciones acumuladas.
  </li>
</ul>

<h6 className="fw-bold fst-italic">Ejemplo de asignación de prioridad:</h6>
<ul>
  <li className="fw-light fst-italic">
    Si dos alumnos regulares entran en lista de espera y uno tiene 3 infracciones
    mientras que el otro tiene 1, el cupo se asignará primero al alumno con 1
    infracción.
  </li>
  <li className="fw-light fst-italic">
    En general, un alumno regular siempre tendrá prioridad sobre aquellos que
    adeudan pagos, y entre los alumnos regulares, la prioridad se determina por
    la menor cantidad de infracciones.
  </li>
</ul>


      <div className="mt-4">
        <label className="fw-ligh">
          <input
            type="checkbox"
            className="me-2"
            checked={checked}
            onChange={handleCheck}
          />
          Comprendo y acepto estos términos.
        </label>
      </div>
    </>
  );
};
export default InfoPlans;
