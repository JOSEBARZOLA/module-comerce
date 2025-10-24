import "@/assets/sass/_home-page.scss";
import ModalPopUp from "@/components/modalPopUp";
import TermsConditions from "@/components/terms&Conditions";
import InfoPlans from "@/components/infoPlans";


function HomePage() {
  return (
    <>
      <ModalPopUp
        id="termsModal"
        title="Términos y Condiciones"
        buttonLabel="Ver Términos"
      >
        <TermsConditions />
      </ModalPopUp>
      <ModalPopUp
        id="plansModal"
        title="Planes"
        buttonLabel="planes de entrenamiento"
      >
        <InfoPlans />
      </ModalPopUp>
    </>
  );
}

export default HomePage;
