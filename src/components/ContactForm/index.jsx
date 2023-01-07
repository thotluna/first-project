import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Contact } from '../../models/contact.model.js'

export default function ContactForm({ onSubmit }) {
  const firstname = useRef('')
  const lastname = useRef('')
  const email = useRef('')
  const isConnected = useRef('')

  const submitHandler = (e) => {
    e.preventDefault()
    const newContact = new Contact(firstname.current.value, lastname.current.value, email.current.value, isConnected.current.checked)
    console.log({ newContact })
    onSubmit(newContact)
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Firstname' ref={firstname} />
      <input type="text" placeholder='Lastname' ref={lastname} />
      <input type="email" placeholder='E-mail' ref={email} />
      <label htmlFor="isConnected">is connected
        <input type="checkbox" ref={isConnected} id='isConnected' />
      </label>
      <button>send</button>
    </form>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
