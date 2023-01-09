import { useEffect, useReducer, useRef } from 'react'
import { inititalState, ACTION_TYPES, listReducer } from './lists-reducer'

import { Task } from '../Task.model'
import { State } from '../State.enum'

export function useListsReducer() {
  const [state, dispatch] = useReducer(listReducer, inititalState)

  const { list, listFiltered, filter } = state

  const select = useRef()

  const onFilter = () => {
    dispatch({
      type: ACTION_TYPES.CHANGE_FILTER,
      payload: select.current.value
    })
  }

  const onAdd = () => {
    const task = new Task('title other', State.OPENED)
    dispatch(
      {
        type: ACTION_TYPES.ADD,
        payload: task
      }
    )
  }

  const onChangeTaskState = (id) => dispatch(
    {
      type: ACTION_TYPES.CHANGE,
      payload: id
    }
  )

  const onDelete = (id) => dispatch(
    {
      type: ACTION_TYPES.DELETE,
      payload: id
    }
  )

  useEffect(() => {
    console.log('refresh')
    dispatch({
      type: ACTION_TYPES.UPDATE_LIST_FILTERED
    })
  }, [list, filter])

  return {
    listFiltered,
    select,
    onFilter,
    onAdd,
    onChangeTaskState,
    onDelete
  }
}
