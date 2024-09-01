import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1);
    }

    function subtract() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className='flex justify-center items-center flex-col border p-5'>
            <h1 className='text-green-500'>Counter App</h1>
            <h2 className='p-3 text-xl bg-slate-950 rounded-full m-5'>{count}</h2>
            <div className='flex justify-between gap-3'>
                <button onClick={() => add()} className='hover:bg-green-400 hover:text-slate-950'>Add</button>
                <button className='hover:bg-red-600 hover:text-slate-950' onClick={() => subtract()}>Subtract</button>
                <button onClick={() => reset()} className='hover:bg-white hover:text-slate-950'>Reset</button>
            </div>
        </div>
    )
}

export default Counter;