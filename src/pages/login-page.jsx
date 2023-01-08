import React from 'react'
import ContainerGeneral from '../layouts/ContainerGeneral'

import SignIn from '../components/SignIn'
import { useAuth } from '../hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const go = location.state?.location?.pathname ?? '/'

  const onLogin = (data) => {
    login(data.email, data.password)

    navigate(go)
  }

  return (
    <ContainerGeneral>
      <h1>SignIn</h1>
      <SignIn onSubmit={onLogin} />
    </ContainerGeneral>
  )
}

export default LoginPage
