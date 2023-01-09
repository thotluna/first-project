import React from 'react'
import PropTypes from 'prop-types'

import { Task } from './Task.model'
import { State } from './State.enum'

export function ItemTask({ item, onChange, onDelete }) {
  return (
    <tr>
      <td>{item.getTitle()}</td>
      <td>{item.getState()}</td>
      <td><button
            onClick={() => onChange(item.getId())}>
            {item.getState() === State.OPENED ? 'closed' : 'open'}
          </button>
      </td>
      <td>
        <button onClick={() => onDelete(item.getId())}>Delete</button>
      </td>
    </tr>
  )
}

ItemTask.propTypes = {
  item: PropTypes.instanceOf(Task).isRequired,
  onDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}
