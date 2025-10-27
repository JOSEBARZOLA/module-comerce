import "@/assets/sass/_home-page.scss";
import React, { useState } from "react";
import ModalPopUp from "@/components/modalPopUp";
import TermsConditions from "@/components/terms&Conditions";
import InfoPlans from "@/components/infoPlans";


const HomePage: React.FC = () => {
  const [canAcceptTerms, setCanAcceptTerms] = useState(false);

  const handleAcceptTerms = () => {
    console.log("Términos aceptados ✅");
    // acá podrías guardar algo en localStorage o marcar el estado global
  };

  const [canAcceptPlans, setCanAcceptPlans] = useState(false);

  const handleAcceptPlans = () => {
    console.log("Planes aceptados ✅");
  };

  return (
    <>
      <ModalPopUp
      id="termsModal"
      title="Términos y Condiciones"
      onAccept={handleAcceptTerms}
      disableAccept={!canAcceptTerms}
    >
      <TermsConditions onCheckChange={setCanAcceptTerms} />
    </ModalPopUp>
    
       <ModalPopUp
      id="plansModal"
      title="Planes de Entrenamiento"
      onAccept={handleAcceptPlans}
      disableAccept={!canAcceptPlans}
    >
      <InfoPlans onCheckChange={setCanAcceptPlans} />
    </ModalPopUp>
    </>
  );
}
export default HomePage;