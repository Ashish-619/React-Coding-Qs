import { useState } from 'react';
import './index.css';
import Todo from './components/Todo';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import Model from './components/Model';
import FormHandling from './components/FormHandling';
import FetchData from './components/FetchData';
import DynamicDropDown from './components/DynamicDropDown';
import useCustomHook from './components/CustomHook';
import ResponsiveNavBar from './components/ResponsiveNavBar';

function App() {
  const [count, setCount] = useState(0);

  const { data, loading, error } = useCustomHook(`https://jsonplaceholder.typicode.com/posts`);

  return (
    <div className='p-4'>
      <ResponsiveNavBar />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Uncomment this section if you want to display the fetched data */}
        {/* {loading && (<p>Loading...</p>)}
        {error && (<p>Error: {error}</p>)}
        {data && data.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))} */}

        <Todo />
        <Counter />
        <SearchFilter />
        <Model />
        <FormHandling />
        <DynamicDropDown />
      </div>
      <FetchData />
    </div>
  );
}

export default App;
