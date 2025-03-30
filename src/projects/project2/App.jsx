import React, { useEffect, useRef, useState } from "react";

const TodoList = () => {
    const[input, setInput] = useState("");
    const[tasks, setTasks] = useState([]);

    // get the todo in local storage 
    useEffect(()=>{
        const savedTask = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(savedTask);
    },[])

    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);

    const AddTodo = ()=>{
        if(input.trim()==="") return;
        setTasks([...tasks, {
            id : Date.now(),
            text : input,
            completed : false,
            date: new Date().toLocaleString()
        }])
        setInput("");
    }

    const handleKeyDown = (event)=>{
        if(event.key === "Enter"){
            AddTodo();
        }
    }

    const toggleTask = (id)=>{
        setTasks(
            tasks.map((task)=>(
                task.id === id ? { ...task, completed: !task.completed } : task
            ))
        )
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
      };

    return (
        <section className="bg-[#D1D1D1] h-screen">
            <div className="container h-full w-full flex justify-center items-center">
                <div className="w-lg bg-white p-5">
                    <h5 className="text-center ">TO-DO-LIST</h5>
                    <div className="flex">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            // when user click enter button on keybord
                            onKeyDown={handleKeyDown}
                            className="block border-b-1 border-gray-300 min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                            placeholder="Enter Todo"
                        />
                        <button
                            onClick={AddTodo}
                            className="bg-[#030712] text-white px-4 py-2 rounded hover:bg-[#1E2939] cursor-pointer"
                        >
                            Add
                        </button>
                    </div>

                    <div>
                        <ul>
                            {
                                tasks.map((task)=>(
                                    <li key={task.id} className="flex gap-4" style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                                        {task.text}
                                        <p>{task.date}</p>
                                        <button onClick={()=>toggleTask(task.id)}>✔</button>
                                        <button onClick={()=>deleteTask(task.id)}>❌</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodoList;
