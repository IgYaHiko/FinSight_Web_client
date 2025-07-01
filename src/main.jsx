import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import UserProvider from './context/useContext';



createRoot(document.getElementById('root')).render(
  <UserProvider>
     <AuthProvider>
    <App/>
  </AuthProvider>
  </UserProvider>
)
