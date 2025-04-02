import React, { useState } from 'react'

const Pratic = () => {

    const [todo, setTodo] = useState([
        {
            date: '',
            text: '',
            status: false
        }
    ]);
    const [data, setData] = useState('');

    const handleClick = () => {
        if(data.trim()==="") return;
        setTodo([
            ...todo,
            {
                date : Date.now(),
                text : data,
                status : false
            }
        ]);
        
        setData('');
        console.log(todo);
    }

    return (
        <section className='h-screen'>
            <div className='h-full container flex justify-center items-center'>
                <div className='w-xl'>
                    <p>{data}</p>
                    <h1 className='text-center text-2xl'>Todo List</h1>
                    <div className='text-center p-5'>
                        <input onChange={(e) => setData(e.target.value)} type="text" value={data} className='border px-4 py-2' placeholder='Enter Todo ' />
                        <button onClick={handleClick} className='border border-gray-800 px-4 py-2' >Add Todo </button>
                        <div>
                            <ul>
                                {
                                    todo.map((item) => (
                                        <li key={item.date}>
                                            {item.text}
                                            <button>ok</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pratic;

// date, text, status 
