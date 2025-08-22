
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import SponsorsSection from "./components/sponsorsSections";

function App() {
  return (
    <CartProvider>
      <SponsorsSection />
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}

export default App;