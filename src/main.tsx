import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/sass/_main.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);