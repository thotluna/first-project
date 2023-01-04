import React from 'react'
import { Contact } from '../models/contact.model'
import PropTypes from 'prop-types'

function ContactItem({ contact, togglingHandler, delHandler }) {
  return (
    <article style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', width: '60vw', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2>{`${contact.getFirstname()} ${contact.getLastname()}`}</h2>
      <h3>{`${contact.getEmail()}`}</h3>
      <h3>{contact.getConnected()
        ? ('In - line')
        : ('off - line')}
      </h3>
      <button
        onClick={() => togglingHandler(contact.getId())}>
        State
      </button>
      <button
        onClick={() => delHandler(contact.getId())}>
        Del
      </button>

    </article>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  togglingHandler: PropTypes.func.isRequired,
  delHandler: PropTypes.func.isRequired
}

export default ContactItem
