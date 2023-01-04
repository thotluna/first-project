export class Contact {
  #id = ''
  #firstname = ''
  #lastname = ''
  #email = ''
  #connected = false

  constructor(firstname, lastname, email, connected, id) {
    this.#firstname = firstname
    this.#lastname = lastname
    this.#email = email
    this.#connected = connected
    this.#id = id || self.crypto.randomUUID()
  }

  toggledConect() {
    this.#connected = !this.#connected
    return this.#connected
  }

  getFirstname() {
    return this.#firstname
  }

  getLastname() {
    return this.#lastname
  }

  getEmail() {
    return this.#email
  }

  getConnected() {
    return this.#connected
  }

  getId() {
    return this.#id
  }

  clone(id = null) {
    return new Contact(this.#firstname, this.#lastname, this.#email, this.#connected, id)
  }
}
