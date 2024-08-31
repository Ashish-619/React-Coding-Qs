import { useState } from 'react'
import Todo from './components/Todo'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todo />
    </>
  )
}

export default App
