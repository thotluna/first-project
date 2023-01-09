import { State } from './State.enum'

export class Task {
  #id
  #title
  #state

  constructor(title, state, id) {
    this.#id = id || self.crypto.randomUUID()
    this.#title = title
    this.#state = state
  }

  getId() {
    return this.#id
  }

  getTitle() {
    return this.#title
  }

  getState() {
    return this.#state
  }

  chageState() {
    this.#state = this.#state === State.OPENED ? State.CLOSED : State.OPENED
  }

  clone() {
    return new Task(this.#title, this.#state, this.#id)
  }
}
