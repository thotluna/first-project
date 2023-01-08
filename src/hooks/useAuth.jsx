import { useContext, useCallback } from 'react'
import AuthContext from '../contexts/auth-context'
import { isLocalLoggedIn, localLogin, localLogout } from '../services/authentication'

export function useAuth() {
  const { isAuthenticated, setAuth } = useContext(AuthContext)

  const logout = useCallback(
    () => {
      localLogout()
      setAuth(isLocalLoggedIn)
    },
    []
  )

  const login = useCallback(
    (username, password) => {
      localLogin(username, password)

      setAuth(isLocalLoggedIn)
    },
    []
  )

  return { isAuthenticated, login, logout }
}
