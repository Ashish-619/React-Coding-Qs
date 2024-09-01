import { useState } from 'react'
import './index.css'
import Todo from './components/Todo'
import Counter from './components/Counter'
import SearchFilter from './components/SearchFilter'
import Model from './components/Model'
import FormHandling from './components/FormHandling'
import FetchData from './components/FetchData'
import DynamicDropDown from './components/DynamicDropDown'
import useCustomHook from './components/CustomHook'

function App() {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useCustomHook(`https://jsonplaceholder.typicode.com/posts`)

  return (
    <div className='flex flex-col gap-10 items-center justify-center'>
      {loading && (<p>Loading...</p>)}
      {error && (<p>Error:{error}</p>)}
      {data.map((item) => (
        <li key={item.id}>
          {item.title}
        </li>
      ))}
      <Todo />
      <Counter />
      <SearchFilter />
      <Model />
      <FormHandling />
      <FetchData />
      <DynamicDropDown />
    </div>
  )
}

export default App
