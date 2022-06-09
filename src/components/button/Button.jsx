import React from 'react'

const Button = ({children, type, onClick}) => {
  return (
    <button className='btn' onclick={onClick} type={type}>{children}</button>
  )
}

export default Button