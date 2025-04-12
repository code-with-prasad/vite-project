
import React from 'react'
import './style.css';

const Button = ({lable, onClick = ()=>{}, ...rest}) => {
  return (
    <button onClick={onClick} {...rest} >{lable}</button>
  )
}

export default Button;

