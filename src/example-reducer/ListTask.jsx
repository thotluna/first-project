import React from 'react'

import { useListsReducer } from './reducer/use-lists-reducer'
import { ItemTask } from './ItemTask'
import { State } from './State.enum'

import styles from './reducer.module.css'

export function ListTask() {
  const { listFiltered, select, onFilter, onAdd, onChangeTaskState, onDelete } = useListsReducer()

  return (
    <article className={styles.article}>
      <h1>Task List</h1>
      <div>
      <label htmlFor="state">Choose a pet:</label>
      <select ref={select} name="state" id="state">
          <option value="ALL">ALL</option>
          <option value={State.OPENED}>{State.OPENED}</option>
          <option value={State.CLOSED}>{State.CLOSED}</option>
      </select>
      <button onClick={onFilter}>filter</button>
      </div>
      <button onClick={onAdd}>Add Task</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {
            listFiltered.map(item => {
              return (

                <ItemTask
                  key={item.getId()}
                  item={item}
                  onChange={() => onChangeTaskState(item.getId())}
                  onDelete={() => onDelete(item.getId())}/>
              )
            })
          }
        </tbody>
      </table>
    </article>
  )
}
