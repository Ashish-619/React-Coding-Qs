import { useState } from 'react'
import './index.css'
import Todo from './components/Todo'
import Counter from './components/Counter'
import SearchFilter from './components/SearchFilter'
import Model from './components/Model'
import FormHandling from './components/FormHandling'
import FetchData from './components/FetchData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      <Todo />
      <Counter />
      <SearchFilter />
      <Model />
      <FormHandling />
      <FetchData />
    </div>
  )
}

export default App
