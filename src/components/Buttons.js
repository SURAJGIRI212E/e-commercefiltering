import React from 'react'

const Buttons = ({handleClick,value,title}) => {
  return (
    <button className="btns" onClick={handleClick} value={value}>{title}</button>
  )
}

export default Buttons
