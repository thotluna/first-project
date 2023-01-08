export function localLogin({ username, password }) {
  localStorage.setItem('user', username)
}

export function localLogout() {
  localStorage.removeItem('user')
}

export function isLocalLoggedIn() {
  return !!localStorage.getItem('user')
}
