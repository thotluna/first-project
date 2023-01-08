import React from 'react'
import { NavLink as NavLinkRouter } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth'
import styles from './Menu.module.css'

const activeStyle = {
  textDecoration: 'underline'
}

function NavLink({ children, to }) {
  return (
    <NavLinkRouter className={styles.link} to={to} style={({ isActive }) => isActive ? activeStyle : undefined }>
      {children}
    </NavLinkRouter>
  )
}

export default function Menu() {
  const { isAuthenticated } = useAuth()
  return (
    <nav>
        {isAuthenticated &&
          <ul className={styles['group-items']}>
            <li>
              <NavLink to='/first'>Ejercicio 1</NavLink>
            </li>
            <li>
              <NavLink to='/second'>Ejercicio 2</NavLink>
            </li>
            <li>
              <NavLink to='/third'>Ejercicio 3</NavLink>
            </li>
          </ul>
        }
    </nav>
  )
}
