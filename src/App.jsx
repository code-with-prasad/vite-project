import React from 'react';
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import ProjectList from './projectList.json';
import Counter from './projects/project1/App';
import TodoList from './projects/project2/App';
import FormValidation from './projects/project3/App';

function App() {

  return (
    <>
      <div>
        {/* {
          ProjectList.map((item)=>{
           return(
            <span>{item.name}</span>
           )
          })
        } */}

        {/* <Counter/> */}
        {/* <TodoList/> */}
        <FormValidation/>
      </div>
    </> 
  )
}

export default App
