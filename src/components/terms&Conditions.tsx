import React, { useState } from "react";

interface TermsConditionsProps {
  onCheckChange?: (checked: boolean) => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ onCheckChange }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setChecked(value);
    onCheckChange?.(value);
  };

  return (
    <>
      <h5 className="fw-bolder fst-italic">Términos y Condiciones de Uso</h5>
      <p className="text-md-start fw-light">
        Por medio del presente documento, el usuario deja constancia expresa de
        la aceptación de los presentes Términos y Condiciones para el uso de
        nuestro sitio web y servicios. Al acceder al sitio, cuyo dominio es
        .........., o hacer uso de los servicios ofrecidos por .......... (en
        adelante, “el Centro”), el usuario acepta expresamente sujetarse a los
        Términos y Condiciones aquí detallados. El usuario deberá leer, entender
        y aceptar las condiciones antes de registrarse, realizar pagos, reservas
        o participar en cualquiera de las actividades del Centro.
      </p>

      <h5 className="fw-bolder fst-italic">Término de uso.</h5>
      <p className="text-md-start fw-light">
        El acceso y uso de los servicios brindados por el Centro implican el
        conocimiento y aceptación de los siguientes documentos:
      </p>
      <ul>
        <li className="fw-light fst-italic">Términos y Condiciones</li>
        <li className="fw-light fst-italic">Política de Convivencia</li>
        <li className="fw-light fst-italic">
          Reglamento Interno de Actividades
        </li>
      </ul>

      <h5 className="fw-bolder fst-italic">¿Qué es ..........?</h5>
      <p className="text-md-start fw-light">
        .......... es un espacio dedicado al entrenamiento físico integral, la
        rehabilitación funcional y la preparación deportiva personalizada.
        Nuestro objetivo es brindar un servicio profesional y seguro que
        contribuya al bienestar físico y mental de los alumnos, a través de
        programas diseñados por profesionales capacitados en actividad física,
        kinesiología y ciencias del deporte.
      </p>

      <h5 className="fw-bolder fst-italic">Proceso de inscripción</h5>
      <p className="text-md-start fw-light">
        Para acceder a los servicios del Centro, los usuarios deberán cumplir
        los siguientes requisitos:
      </p>
      <ul>
        <li className="fw-light fst-italic">
          Registrarse en el sitio web o de forma presencial.
        </li>
        <li className="fw-light fst-italic">
          Ser mayor de edad. En caso de menores, se requerirá autorización
          firmada por padre, madre o tutor legal.
        </li>
        <li className="fw-light fst-italic">
          Presentar un certificado médico de aptitud física actualizado, que
          acredite estar en condiciones de realizar actividad física.
        </li>
        <li className="fw-light fst-italic">
          Aceptar expresamente los presentes Términos y Condiciones y la
          Política de Convivencia.
        </li>
      </ul>
      <p className="text-md-start fw-light">
        El usuario declara bajo juramento que la información brindada es veraz y
        completa, y asume plena responsabilidad por cualquier omisión o
        falsedad.
      </p>

      <h5 className="fw-bolder fst-italic">Obligaciones de los usuarios</h5>
      <p className="text-md-start fw-light">
        Los usuarios se comprometen a hacer un uso adecuado de las instalaciones
        y servicios, respetando las normas de convivencia, higiene y seguridad.
        Asimismo, deberán seguir las indicaciones del personal técnico y
        profesional durante el desarrollo de las actividades.
      </p>
      <ul>
        <li className="fw-light fst-italic">
          Mantener actualizado su estado de salud y notificar cualquier lesión o
          condición médica antes de participar en las clases o entrenamientos.
        </li>
        <li className="fw-light fst-italic">
          Usar vestimenta y calzado adecuados para la actividad física.
        </li>
        <li className="fw-light fst-italic">
          Respetar los horarios, políticas de cancelación y uso responsable de
          los turnos y reservas.
        </li>
      </ul>

      <h5 className="fw-bolder fst-italic">Responsabilidades del Centro</h5>
      <ul>
        <li className="fw-light fst-italic">
          Brindar un entorno seguro, limpio y apto para la práctica de actividad
          física.
        </li>
        <li className="fw-light fst-italic">
          Ofrecer programas de entrenamiento supervisados por profesionales
          calificados y respetar los estándares de seguridad y ética
          profesional.
        </li>
        <li className="fw-light fst-italic">
          Proteger los datos personales y médicos de los usuarios conforme a la
          legislación vigente sobre protección de datos personales.
        </li>
      </ul>
      <p className="text-md-start fw-light">
        El Centro no se responsabiliza por lesiones, accidentes o daños
        derivados del incumplimiento de las normas internas, del uso inadecuado
        de los equipos o por omisión en la comunicación de información médica
        relevante por parte del usuario.
      </p>

      <h5 className="fw-bolder fst-italic">
        Condiciones de pago y cancelación
      </h5>
      <p className="text-md-start fw-light">
        Los planes y servicios deberán abonarse de acuerdo con las modalidades
        vigentes. Los pagos fuera de término podrán generar recargos y
        suspensión temporal del acceso a las actividades. La cancelación o
        reprogramación de clases debe realizarse dentro de los plazos
        estipulados para evitar sanciones o pérdida del turno.
      </p>

      <h5 className="fw-bolder fst-italic">Modificaciones y vigencia</h5>
      <p className="text-md-start fw-light">
        El Centro se reserva el derecho de modificar en cualquier momento los
        presentes Términos y Condiciones, así como las políticas internas, sin
        previo aviso. Dichas modificaciones entrarán en vigencia desde su
        publicación en el sitio web o cartelería institucional.
      </p>

      <h5 className="fw-bolder fst-italic">Aceptación</h5>
      <p className="text-md-start fw-light">
        La inscripción y uso de los servicios del Centro implican la aceptación
        plena y sin reservas de los presentes Términos y Condiciones. Cualquier
        incumplimiento podrá derivar en la suspensión o cancelación del acceso a
        las actividades, sin derecho a reembolso.
      </p>

      <div className="mt-4">
        <label className="fw-light">
          <input
            type="checkbox"
            className="me-2"
            checked={checked}
            onChange={handleCheck}
          />
          Acepto estos términos y condiciones.
        </label>
      </div>
    </>
  );
};

export default TermsConditions;
