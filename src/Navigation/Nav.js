// src/Navigation/Nav.js
import './Nav.css';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { useContext } from 'react';
import { CartContext } from '../CartContext';


const Nav = ({ handleInputChange,toggleCart,showCart }) => {
   const {cartLength} = useContext(CartContext)
  
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input" placeholder="search shoes" onChange={handleInputChange} />
      </div>
      <div className="profile-container">
        <a href="/">
          <FiHeart className="nav-icons" />
        </a>
        <div onClick={toggleCart} className={`${showCart ? 'showing' : 'notshowing'}`}> {/* Toggle Cart */}
          <AiOutlineShoppingCart className="nav-icons" />
<span>{cartLength}</span>
        </div>
        <a href="/">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Nav;