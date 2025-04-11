import Buttons from '../components/Buttons'
import './Recommended.css'

const Recommended = ({handleClick, currentcompany}) => {
 
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended {currentcompany}</h2>
        <div className="recommended-flex">
          
          <Buttons handleClick={handleClick} title="All products" value="" active={currentcompany === ''} />
          <Buttons handleClick={handleClick} title="Nike" value="Nike" active={currentcompany === 'Nike'} />
          <Buttons handleClick={handleClick} title="Puma" value="Puma" active={currentcompany === 'Puma'} />
          <Buttons handleClick={handleClick} title="Adidas" value="Adidas" active={currentcompany === 'Adidas'} />
          <Buttons handleClick={handleClick} title="Vans" value="Vans" active={currentcompany === 'Vans'} />
        </div>
      </div>
    </>

  )
}

export default Recommended
