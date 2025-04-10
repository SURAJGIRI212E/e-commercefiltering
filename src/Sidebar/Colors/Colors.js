import './Colors.css'
import Input from '../../components/Input'

const Colors = ({handleChange}) => {
  return (
    <>
      
        <h3 className="sidebar-title">Colors</h3>
        <div className="sidebar-items">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1"/>
          <span className="checkmark all"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
        />

        <Input
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
        />
        
<label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span id="white-check"
            className="checkmark"
            style={{ background: "white", border: "1px solid black" }}
          ></span>
          White
        </label>
      </div>
    </>
  )
}

export default Colors
