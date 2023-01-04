import { useState } from 'react'

import { Contact } from "../models/contact.model.js"
import { ComponentB } from './ComponentB.jsx'

const contactInitial = new Contact("Pedrito", "Palotes", "PedritoPalotes", false)

export default function ComponentA() {
  const [contact, setContact] = useState(contactInitial)

  const handleToggledConnections = () => {
    setContact(prevContact => {
      const contactNew = prevContact.clone()
      contactNew.toggledConect()
      return contactNew
    })
  }

  return (
    <article>
      <h2>{`${contact.getFirstname()} ${contact.getLastname()}`}</h2>
      <h3>{contact.getEmail()}</h3>
      <ComponentB contact={contact} toggledConect={handleToggledConnections} />
    </article>
  )
}
