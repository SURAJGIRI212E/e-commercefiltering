
const Input = ({handleChange,value,title,name}) => {
  return (
    <>
    <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={value} name={name}/>
          <span className="checkmark" style={{backgroundColor:value}}></span>{title}
        </label>
    </>
  )
}

export default Input
