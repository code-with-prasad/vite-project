
import React from 'react'
import './style.css';

const Button = ({lable, onClick = ()=>{}}) => {
  return (
    <button onClick={onClick}>{lable}</button>
  )
}

export default Button