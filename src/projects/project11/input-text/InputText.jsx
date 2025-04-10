import React from 'react'
import './style.css';
const InputText = ({value, onChange}) => {

    function handleChange (e){
        onChange(e.target.value)
    }

  return (
    <input type="text" value={value} onChange={handleChange} placeholder='Search Here ' />
  )
}

export default InputText