
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import CubeSlide from "./components/cubeSlide";
import CreativeSlide from "./components/creativeSlide";

function App() {
  return (
    <CartProvider>
      <CubeSlide/>
      <CreativeSlide/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;