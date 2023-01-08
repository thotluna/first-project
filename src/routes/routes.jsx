import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ErrorPage from '../pages/error-page'
import FirstPage from '../pages/first-page'
import LoginPage from '../pages/login-page'
import Register from '../pages/register-page'
import SecondPage from '../pages/second-page'
import ThirdPage from '../pages/ThirdPage'
import { ProtectedRoute } from './protected-route'

export const Routes = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <Register /> },

  { path: '/first', element: <ProtectedRoute><FirstPage /></ProtectedRoute> },
  { path: '/second', element: <ProtectedRoute><SecondPage /></ProtectedRoute> },
  { path: '/third', element: <ProtectedRoute><ThirdPage /></ProtectedRoute> }
])
