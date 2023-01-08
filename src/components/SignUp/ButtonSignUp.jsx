import React from 'react'
import PropTypes from 'prop-types'

function ButtonSignUp({ onRegister }) {
  return (
    <button onClick={onRegister}>Register</button>
  )
}

ButtonSignUp.propTypes = {
  onRegister: PropTypes.func.isRequired
}

export default ButtonSignUp
