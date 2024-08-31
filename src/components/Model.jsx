import React from 'react'

const Model = () => {

    const [showModel, setShowModel] = React.useState(false);

    function handleClick() {
        setShowModel(!showModel);
    }
    return (
        <div className='flex items-center justify-center border flex-col p-5'>
            <h1 className='text-green-500 mb-5'>Toggle Model</h1>
            <button className='mb-5' onClick={handleClick}>{showModel ? 'On' : 'Off'}</button>
            {showModel && <p className='p-2 bg-slate-100 rounded-full text-slate-950 font-bold'>This is a Model</p>}
        </div>
    )
}

export default Model
