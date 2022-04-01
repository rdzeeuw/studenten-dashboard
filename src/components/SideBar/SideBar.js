import React from 'react';
import './sidebar.css'
import {Link} from 'react-router-dom'
import { GoPerson as Person } from "react-icons/go";
import { BsFillPeopleFill as People } from "react-icons/bs";
import { nanoid } from 'nanoid'

function SideBar({students, filterByName}) {
  return (
    <section className="side-bar">
        <h3>Select a user Profile</h3>
        <div className="student-btns">
          <Link to='/'>
            <button 
              className="student-btn"
              name="allStudents"
              onClick={filterByName}><People className="person people" />All students</button>
          </Link>
          {students.map(student => {
            return (
              <Link to={`/${student}`} key={nanoid()}>
                <button 
                  className="student-btn"
                  name={student}
                  onClick={filterByName}><Person className="person" />{student}</button>
              </Link>
              )
            })}
        </div>    
         
    </section>
  )
}

export default SideBar;
