import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext({})

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.element
}

export default AuthContext
