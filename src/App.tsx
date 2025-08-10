import { ToastContainer } from 'react-toastify';
import BodySections from './components/bodySections';
function App() {
  return (
    <>
    
      <ToastContainer position="top-right" autoClose={3000}/>
      
      <BodySections/>
    </>
  )
}
export default App;