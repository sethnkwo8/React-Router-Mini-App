import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './output.css'
import { router } from './router'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
) 
