import React from 'react';
import './sidebar.css'
import {Link} from 'react-router-dom'

function SideBar({students, exercises, handleFormData, formData, filterByName}) {
  return (
    <section className="side-bar">
        <h3>sidebar</h3>
        <div className="student-btns">
          <Link to='/'>
            <button 
              className="student-btn"
              name="allStudents"
              onClick={filterByName}>All students</button>
          </Link>
          {students.map(student => {
            return (
              <Link to={`/${student}`} key={student.name}>
                <button 
                  className="student-btn"
                  name={student}
                  onClick={filterByName}>{student}</button>
                  </Link>
              )
            })}
        </div>    

          <br></br>
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
          </div>
        </form>
    </section>
  )
}

export default SideBar;
