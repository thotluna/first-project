import React from 'react'
import PropTypes from 'prop-types'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import Menu from '../../components/Menu'
import { useAuth } from '../../hooks/useAuth'
import styles from './ContainerGeneral.module.css'

import '../../index.css'
import ButtonSignUp from '../../components/SignUp/ButtonSignUp'

export default function ContainerGeneral(props) {
  const { isAuthenticated, logout } = useAuth()
  const navigation = useNavigate()

  const handleLogout = () => {
    logout()
    return <Navigate to='/' />
  }

  const onRegister = () => {
    navigation('/register')
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to='/'><img src='/public/vite.svg' /></Link>
        <Menu />
        {
          isAuthenticated === true
            ? (<button onClick={handleLogout}>Logout</button>)
            : (
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '.5rem' }}>
                <Link to='/login'>Login</Link>
                <ButtonSignUp onRegister={onRegister} />
              </div>
              )
        }
      </header>
      <main>
        {props.children}
      </main>
    </div>
  )
}

ContainerGeneral.propTypes = {
  children: PropTypes.node
}
