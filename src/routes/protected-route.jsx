import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function ProtectedRoute({ children }) {
  const location = useLocation()
  const { isAuthenticated } = useAuth()
  if (!isAuthenticated) return <Navigate to="/login" state={{ location }} />

  return children
}
