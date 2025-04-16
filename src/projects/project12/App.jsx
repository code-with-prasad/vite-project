import React, { Component } from 'react'
import TabList from './tab-list'
// import { tabs } from './constants'

export const tabs = [
    {
        id: 'a',
        label: 'Component A',
        Component: ComponentA
    },
    {
        id: 'b',
        label: 'Component B',
        Component: ComponentB
    },
    {
        id: 'c',
        label: 'Component C',
        Component: ComponentC
    },
    {
        id: 'd',
        label: 'Component D',
        Component: ComponentD
    },
]

const TabListComponent = () => {
  return (
    <>
    <TabList tabs={tabs} />
    </>
  )
}

function ComponentA(){
    return <h1 className='text-white'>Component A</h1>
}

function ComponentB(){
    return <h1 className='text-white'>Component B</h1>
}

function ComponentC(){
    return <h1 className='text-white'>Component C</h1>
}

function ComponentD(){
    return <h1 className='text-white'>Component D</h1>
}



export default TabListComponent;

