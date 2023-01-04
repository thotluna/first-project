export class Contact {

  #firstname = ""
  #lastname = ""
  #email = ""
  #connected = false

  constructor(firstname, lastname, email, connected) {
    this.#firstname = firstname
    this.#lastname = lastname
    this.#email = email
    this.#connected = connected
  }

  toggledConect(){
    this.#connected = !this.#connected
    return this.#connected
  }

  getFirstname(){
    return this.#firstname
  }

  getLastname(){
    return this.#lastname
  }

  getEmail(){
    return this.#email
  }

  getConnected(){
    return this.#connected
  }

  clone(){
    return new Contact(this.#firstname, this.#lastname, this.#email, this.#connected)
  }


}