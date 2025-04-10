import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'

const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className="sidebar">
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
