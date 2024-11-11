import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Brancgh1 from './Brancgh1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <Hello/>
 <Brancgh1/>
    </>
  )
}

export default App
