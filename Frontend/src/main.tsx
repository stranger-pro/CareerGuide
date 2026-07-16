import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppProvider } from './context/AppContex.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

export const server = "https://careerguide-ye9d.onrender.com";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId='123614352312-htdnmsvf0ujpap6m8mouru0737r31nsp.apps.googleusercontent.com'>
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>,
)
