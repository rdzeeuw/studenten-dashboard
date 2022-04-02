import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './styles/base.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import {csv} from 'd3'
import csvData from './data/data.csv'
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  const [studentData, setStudentData] = useState([])
  const [filteredData, setFilteredData] = useState(studentData)
  const [formData, setFormData] = useState(
    {
      difficulty: true,
      funFactor: true,
      lineGraph: false
    })
  const [mockData, setMockData] = useState([])
  
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
  }) 
  },[])

  function getMockData() {
    fetch('https://randomuser.me/api/?results=100&noinfo', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setMockData(myJson.results)
      })
  }

  useEffect(()=> {
    getMockData()
  },[])

  // console.log('mockdata: ', mockData)

  // handle checkboxes and setting formData state ----------------
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
    const filtered = getAverageScore()
    // console.log(filtered)
    setFilteredData(filtered)
  } else {
    const filtered = studentData.filter((item) => {
      if(item.name === name) {
        return item
      } else {
        return ''
      }
    })

    // console.log(filtered)
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
    return avgArray
  })
  // console.log(avgArray);
  return avgArray
}

const avgArrayConstant = getAverageScore();
// console.log('app.js avgArray: ', avgArrayConstant)

  return (
    <div className="App">
      <Router>
        <Header />  
        <div className="container">
          <SideBar 
            students={students} 
            filterByName={filterByName}
            />
          <Routes>
            <Route 
              path="/" 
              element={
                <Main 
                  data={avgArrayConstant} 
                  exercises={exercises}
                  formData={formData}
                  handleFormData={handleFormData}
                />} 
            />
            <Route 
              path="/:username" 
              element={
                <UserProfile 
                  data={filteredData} 
                  mockData={mockData}
                  exercises={exercises}
                  formData={formData}
                  handleFormData={handleFormData}
                />} 
            />
          </Routes>
        </div> 
        <Footer />
      </Router> 
    </div>
  )
}

export default App;