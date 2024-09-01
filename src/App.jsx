import { useState } from 'react'
import './index.css'
import Todo from './components/Todo'
import Counter from './components/Counter'
import SearchFilter from './components/SearchFilter'
import Model from './components/Model'
import FormHandling from './components/FormHandling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-10'>
      <Todo />
      <Counter />
      <SearchFilter />
      <Model />
      <FormHandling />
    </div>
  )
}

export default App
