import React from 'react'
import './data-form.css'

function dataForm({formData, handleFormData}) {
  return (
    <form>
      <label htmlFor="checkboxes">Select data output</label>
      <div className="checkboxes">
        <label htmlFor="difficulty">
          <input 
            type="checkbox" 
            id="difficulty" 
            name="difficulty"
            checked={formData.difficulty}
            onChange={handleFormData}>  
          </input>
          Difficulty
        </label>
        <label htmlFor="funFactor">
          <input 
            type="checkbox" 
            name="funFactor"
            id="funFactor" 
            checked={formData.funFactor}
            onChange={handleFormData}>
          </input>
          Fun Factor
        </label>
        <label htmlFor="lineGraph">
          <input 
            type="checkbox" 
            name="lineGraph"
            id="lineGraph" 
            checked={formData.lineGraph}
            onChange={handleFormData}>
          </input>
          Show as line graph
        </label>
      </div>
      <div className="legenda">
        <div className="red"></div> = Fun Factor
        <div className="blue"></div> = Difficulty
      </div>
    </form>
  )
}

export default dataForm