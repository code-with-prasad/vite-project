import React from 'react'
import './style.css';

const Button = ({label, onClick = ()=> {}, ...rest}) => {
  return (
    <button onClick={onClick} {...rest} className='text-white ms-3'>{label}</button>
  )
}

export default Button