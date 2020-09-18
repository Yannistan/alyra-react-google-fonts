import React from "react"

const FontSizeMod = ({size, setSize}) => {
 
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  return (
    
    <div>
      <label htmlFor="range" className="form-label font-weight-bold mb-3">
        La taille de police
      </label>
      <input
        type="range"
        className="form-range"
        id="range"
        min="8"
        max="48"
        step="2"
        defaultValue="20"
        value={size}
        onChange={handleSizeChange}
      />
      </div>

  )
}

export default FontSizeMod