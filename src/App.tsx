
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import SponsorsSection from "@/components/sponsorsSections";
import  Modal  from "@/components/modal";

function App() {
  return (
    <CartProvider>
      <Modal/>
      <SponsorsSection />
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;