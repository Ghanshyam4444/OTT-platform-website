import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './store/auth.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>

)
