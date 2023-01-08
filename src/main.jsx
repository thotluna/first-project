import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from './contexts/auth-context'

import { Routes } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={ Routes } />
    </AuthContextProvider>
  </React.StrictMode>
)
