import './Products.css'
// import Card from '../components/Card'
const Products = ({result}) => {
  return (
    <>
    <section className='card-container'>
    {result.length>0?result:"not found "}
      
    </section>
    </>
  )
}

export default Products
