import React, { useState } from 'react'
import './style.css';

const Counter = () => {
    const[counter, setCounter] = useState(0);
    const[theme, setTheme] = useState(false);
  return (
    // <div className={ theme?'bg-white' : 'bg-[#030712] ' `h-screen flex justify-center items-center`}>
    <div className={`${theme ? 'bg-white' : 'bg-[#030712]'} h-screen flex justify-center items-center`}>
        <div className='w-lg bg-[#10141E] p-4 rounded-md text-center'>
            <button className='float-right text-white text-2xl cursor-pointer' onClick={()=>setTheme(!theme)} >{theme?<i class="ri-contrast-2-line"></i> : <i class="ri-sun-line"></i>}</button>
            <h1 className='text-white text-2xl'>Counter Application </h1>
            <h1 className='text-white text-4xl mt-2'>{counter}</h1>
            <div className='flex gap-3 items-center justify-center mt-6'>
                <button className='bg-[#030712] text-white px-4 py-2 rounded hover:bg-[#1E2939] cursor-pointer' onClick={()=>setCounter(counter + 1)}>Increment</button>
                <button className='bg-[#030712] text-white px-4 py-2 rounded hover:bg-[#1E2939] cursor-pointer' onClick={()=>setCounter(counter - 1)} >Decrement</button>
                <button className='bg-[#030712] text-white px-4 py-2 rounded hover:bg-[#1E2939] cursor-pointer' onClick={()=>setCounter(0)} >Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter;