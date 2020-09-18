import React from 'react'


const Text = ({text, setText}) => {
//const [text, setText] = useState("Portez ce vieux whisky au juge blond qui fume !? 0123456789")

const handleClick = (event) => {
        setText(event.target.value);
    }

return (
    <div>
    <label htmlFor="text" className="form-label font-weight-bold mb-3">
        Tapez votre text
      </label>
    <input
    id="text"
    className="btn btn-white"
    value={text}
    onClick={handleClick}/>
    </div>
);
}

export default Text