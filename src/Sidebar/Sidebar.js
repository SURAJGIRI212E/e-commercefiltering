import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import { useState } from 'react'

const Sidebar = ({handleChange}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className="menu-button" onClick={toggleSidebar}>
        {isOpen ? 'X' : 'Filter'}
      </button>
      <section className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="logo-container">
          <h1 style={{position:"sticky", top:"20px"}}>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price  handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  )
}

export default Sidebar
