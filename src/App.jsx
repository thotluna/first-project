import React from 'react'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App" >
      {/* <ComponentA />
      {/* <Clock /> */}
      {/* <Exercise4562 />
      <ContactList /> */}
      <h2>Sign Up</h2>
      <SignUp />

      <h2>Sign In</h2>
      <SignIn />
    </div>
  )
}

export default App
