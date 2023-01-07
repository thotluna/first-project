import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.model'

export function ComponentB({ contact, toggledConect }) {
  return (
    <button onClick={() => toggledConect()}>
      {contact.getConnected() ? 'Contacto En Línea' : 'Contacto No Disponible'}
    </button>
  )
};

ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  toggledConect: PropTypes.func.isRequired
}
