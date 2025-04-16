import React from 'react';
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import ProjectList from './projectList.json';
import Counter from './projects/project1/App';
import TodoList from './projects/project2/App';
import FormValidation from './projects/project3/App';
import StarReating from './projects/project4/App';
import Accordion from './projects/project5/App';
import Pratic from './projects/pratic/Pratic';
import ModalComponent from './projects/project6/App';
import StopWatch from './projects/project7/App';
import SearchBar from './projects/project8/App';
import ImageCarousel from './projects/project9/App';
import TabsComponent from './projects/project10/App';
import AutoCompleteComponent from './projects/project11/App';
import TabListComponent from './projects/project12/App';

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

        {/* <Pratic/> */}

        {/* <Counter/> */}
        {/* <TodoList/> */}
        {/* <FormValidation/> */}
        {/* <StarReating/> */}
        {/* <Accordion/> */}
        {/* <ModalComponent/> */}
        {/* <StopWatch/> */}
        {/* <SearchBar/> */}
        {/* <ImageCarousel/> */}
        {/* <TabsComponent/> */}
        {/* <AutoCompleteComponent/> */}
        <TabListComponent/>
      </div>
    </> 
  )
}

export default App
