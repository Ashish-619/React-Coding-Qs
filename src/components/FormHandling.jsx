import React from 'react'

const FormHandling = () => {



  return (
    <div>
      <form className='flex p-5 flex-col justify-center items-center border '>
        <h1 className='text-green-500 mb-5'>Form Handling</h1>
        <div className='flex flex-col gap-3'>
          <input type="text" placeholder='Name' className='p-2 w-full rounded-full'/>
          <input type="email" placeholder='Email' className='p-2 w-full rounded-full'/>
          <input type="password" placeholder='Password' className='p-2 w-full rounded-full'/>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormHandling
