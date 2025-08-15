import { ToastContainer } from 'react-toastify';
import CartSidebar from './components/cartSidebar';
import BodySections from './components/bodySections';
function App() {
  return (
    <>
    <CartSidebar/>
    <BodySections/>
      <ToastContainer position="top-right" autoClose={3000}/>
    </>
  )
}
export default App;