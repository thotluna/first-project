import React from 'react'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// import ComponentA from './components/ComponentA'
// import ContactList from './components/ContactList'
// import Clock from './components/Exercise456'
// import Exercise4562 from './components/Exercise456-2'

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
