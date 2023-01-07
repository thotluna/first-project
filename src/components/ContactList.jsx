import React, { useState } from 'react'
import { Contact } from '../models/contact.model'
import ContactForm from './ContactForm'
import ContactItem from './ContactItem'

const listInitial = [
  new Contact('thot', 'luna', 'thot@luna.me', false),
  new Contact('thot2', 'luna2', 'thot2@luna.me', true),
  new Contact('thot3', 'luna3', 'thot3@luna.me', false),
  new Contact('thot4', 'luna4', 'thot4@luna.me', false),
  new Contact('thot5', 'luna5', 'thot5@luna.me', true)
]

export default function ContactList() {
  const [state, setState] = useState(listInitial)

  const togglingHandler = (id) => {
    setState(prev => {
      const tempList = [...prev]
      const changed = tempList.find(element => element.getId() === id)
      changed.toggledConect()
      return tempList
    })
  }

  const delHandler = (id) => {
    setState(prev => {
      const changed = prev.filter(cont => cont.getId() !== id)
      return changed
    })
  }

  const createContact = (contact) => {
    setState(prev => [...prev, contact])
  }

  return (
    <>
      <ContactForm onSubmit={createContact} />
      <ul style={{ listStyle: 'none' }}>
        {state.map(contact => {
          return (
            <li key={contact.getId()}>
              <ContactItem contact={contact}
                togglingHandler={togglingHandler}
                delHandler={delHandler}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
