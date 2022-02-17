import React from 'react';
import './sidebar.css'

function SideBar({students, exercises, filterByName}) {
  return (
    <section className="side-bar">
        <h3>sidebar</h3>
        <form>
          
          <label htmlFor="student">Select a student</label>
          <select onChange={filterByName} name="name">
            <option name="student" value=''>-- Select a name --</option>
            <option name="allStudents" value="allStudents">All Students</option>
            {students.map(student => {
              return (
                <option name={student} value={student} key={student}>{student}</option>
              )
            })}
          </select>
         
          <label htmlFor="exercise">Select an exercise</label>
          <select>
            <option name="exercise" value="">-- Select an exercise --</option>
            {exercises.map(exercise => {
              return (
                <option name={exercise} value={exercise} key={exercise}>{exercise}</option>
              )
            })}
          </select>

          <label htmlFor="checkboxes">Select data output</label>
          <div className="checkboxes">
            <label htmlFor="difficulty">
              <input type="checkbox" value="" name="funFactor"></input>
              Difficulty
            </label>
            <label htmlFor="funFactor">
              <input type="checkbox" value="" name="funFactor"></input>
              Fun Factor
            </label>
          </div>
        </form>
    </section>
  )
}

export default SideBar;
