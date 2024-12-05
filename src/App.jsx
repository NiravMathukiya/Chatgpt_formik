import { useState } from 'react'

import './App.css'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <LoginForm />
    {/* <SignupForm /> */}
   </div>
  )
}

export default App
