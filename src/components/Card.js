// src/components/Card.js
import { BsFillBagHeartFill } from 'react-icons/bs';
import { useContext } from 'react';
import { CartContext } from '../CartContext'; // Import CartContext

const Card = ({ img, title, star, reviews, price }) => {
  const { addToCart } = useContext(CartContext); // Use the CartContext

  const handleAddToCart = () => {
    const item = { img, title, price }; // Create an item object
    addToCart(item); // Use addToCart from context
  };

  return (
    <div>
      <section className='card'>
        <img className='card-img' src={img} alt="shoe" />
        <div className='card-details'>
          <h3 className='card-title'>{title}</h3>
          <section className='card-reviews'>
            {star}{star}{star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              ${price}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className='bag-icon' />
            </div>
          </section>
          <button onClick={handleAddToCart} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;