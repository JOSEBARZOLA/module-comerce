
import { ToastContainer } from "react-toastify";
import { CartProvider } from "@/contexts/CartProvider";
import NewSwiper from "./components/newSwipper";


function App() {
  return (
    <CartProvider>
     <NewSwiper/>
      <ToastContainer position="top-left" autoClose={3000} />
    </CartProvider>
  );
}
export default App;