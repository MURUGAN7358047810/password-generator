import { useState } from 'react'

import './App.css'
import PassGen from './PassGen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PassGen />
    </>
  )
}

export default App
