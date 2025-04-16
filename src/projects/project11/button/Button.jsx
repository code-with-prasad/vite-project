
import React from 'react'
import './style.css';

const Button = ({lable, onClick = ()=>{}, ...rest}) => {
  return (
    <button onClick={onClick} {...rest} className='text-white' >{lable}</button>
  )
}

export default Button;

