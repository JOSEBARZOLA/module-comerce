import  Modal  from './components/modal';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <Modal/>
      <ToastContainer position="top-left" autoClose={3000}/>
    </>
  )
}
export default App;