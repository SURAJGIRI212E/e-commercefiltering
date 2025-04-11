import React from 'react'

const Buttons = ({handleClick,value,title,active}) => {
  return (
    <button className={`btns ${active ? 'active' : ''}`} onClick={handleClick} value={value}>{title}</button>
  )
}

export default Buttons
