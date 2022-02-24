import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/base.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import {csv} from 'd3'
import csvData from './data/data.csv'
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const [studentData, setStudentData] = useState([])
  const [filteredData, setFilteredData] = useState(studentData)
  const [formData, setFormData] = useState(
    {
      difficulty: true,
      funFactor: true
    })
  const [avgData, setAvgData] = useState([])
  
  const exercises = studentData.map(item => item.exercise).slice(0,56)
  const studentArray = studentData.map(item => item.name)
  const students = [...new Set(studentArray)]

  // fetching data and setting state --------------------------
  useEffect(() => { 
    csv(csvData).then((response) => {
      const cleanedData = response.map(row => {
        return {
            ...row,
            difficulty :  +row.difficulty,
            funFactor : +row.enjoyment
        }
    }) 
    setStudentData(cleanedData)
    setFilteredData(getAverageScore())
    
  }) 
  },[])

  useEffect(() => {
    // getAverageScore()
  },[])

  // handl checkboxes en setting formData state ----------------
function handleFormData(event) {
  const {name, value, type, checked} = event.target
  setFormData(prevData => {
    return {
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }
  })
}

// handle button clicks en filtering data ------------------
function filterByName(event) {
  const name = event.target.name
  if(name === 'allStudents'){
    const filtered = avgData
    console.log(filtered)
    setFilteredData(filtered)
  } else {
    const filtered = studentData.filter((item) => {
      if(item.name === name) {
        return item
      } else {
        return ''
      }
    })

    console.log(filtered)
    setFilteredData(filtered)
} 
}

// calculating average scores ---------------------------
function getAverageScore() {
  let avgArray = []

  exercises.map(exerciseItem => {
    let filteredData = studentData.filter(({ exercise }) => exercise === exerciseItem)
    // console.log(filteredData)
    const avgDiff = filteredData.reduce((r, c) => r + c.difficulty, 0) / filteredData.length;
    const avgFun = filteredData.reduce((r, c) => r + c.funFactor, 0) / filteredData.length;
    avgArray.push({
      avgDifficulty: avgDiff,
      avgFun: avgFun,
      exercise: exerciseItem
    })
    
  })
 console.log(avgArray);
 setAvgData(avgArray)
}




  return (
    <div className="App">
      <Router>
        <Header />  
        <div className="container">
          <SideBar 
            students={students} 
            exercises={exercises} 
            filterByName={filterByName}
            handleFormData={handleFormData}
            formData={formData}/>
          <Routes>
            <Route 
              path="/" 
              element={<Main 
                        data={filteredData} 
                        students={students} 
                        exercises={exercises}
                        formData={formData}
                        avgData={avgData}
                      />} 
            />
            <Route 
              path="/:username" 
              element={<UserProfile 
                        data={filteredData} 
                        students={students} 
                        exercises={exercises}
                        formData={formData}
                      />} 
            />
          </Routes>
        </div> 
      </Router> 
    </div>
  )
}

export default App;