import { Task } from '../Task.model'
import { State } from '../State.enum'

const listInitial = [
  new Task('title other 1', State.OPENED),
  new Task('title other 2', State.OPENED),
  new Task('title other 3', State.OPENED),
  new Task('title other 4', State.OPENED),
  new Task('title other 5', State.OPENED)
]

export const inititalState = {
  list: listInitial,
  listFiltered: listInitial,
  filter: 'ALL'
}

export const ACTION_TYPES = {
  ADD: 'add',
  DELETE: 'delete',
  CHANGE: 'change',
  CHANGE_FILTER: 'change_filter',
  UPDATE_LIST_FILTERED: 'update_list_filtered'
}

export const listReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    case ACTION_TYPES.DELETE:
      return {
        ...state,
        list: state.list.filter(item => item.getId() !== action.payload)
      }
    case ACTION_TYPES.CHANGE:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.getId() === action.payload) {
            const newItem = item.clone()
            newItem.chageState()

            return newItem
          }
          return item
        })
      }
    case ACTION_TYPES.CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload
      }
    case ACTION_TYPES.UPDATE_LIST_FILTERED:
      return {
        ...state,
        listFiltered: state.list.filter(item => {
          if (state.filter === 'ALL') {
            return true
          }
          return item.getState() === state.filter
        })
      }
  }
}
