import { ToastContainer } from 'react-toastify';

import  ModalOpen  from './components/modal'
function App() {
  return (
    <>
    <ModalOpen/>
      <ToastContainer position="top-left" autoClose={3000}/>
    </>
  )
}
export default App;