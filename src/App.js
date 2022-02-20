import React, {useState, useEffect} from 'react'
import './styles/base.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import {csv} from 'd3'
import csvData from './data/data.csv'

function App() {
  const [studentData, setStudentData] = useState([])
  const [filteredData, setFilteredData] = useState(studentData)
  
  const exercises = studentData.map(item => item.exercise).slice(0,56)
  const studentArray = studentData.map(item => item.name)
  const students = [...new Set(studentArray)]
  
  // const difficultyAverage = difficultyArray.reduce((acc,v,i,a)=>(acc+v/a.length),0)
  console.log('student data: ', studentData)
  


  // fetching data and setting state --------------------------
  useEffect(() => { 
    csv(csvData).then((response) => {
      // console.log('response: ',response)
      const cleanedData = response.map(row => {
        return {
            ...row,
            difficulty :  +row.difficulty,
            funFactor : +row.enjoyment
        }
    }) 
    setStudentData(cleanedData)
    setFilteredData(cleanedData)
  }) 
  },[])



function getAverageScore(exercise) {
  let exerciseArray = []
  studentData.map(item => {
    if(item.exercise === exercise){
      exerciseArray.push(item.difficulty)
    } 
  })

  const averages = exerciseArray.reduce((a,b) => a + b / exerciseArray.length)
  console.log(averages)
  return averages
  
}


exercises.map(exercise => {
 getAverageScore(exercise)
})


function filterByName(event) {
  const value = event.target.value

  const filtered = studentData.filter((item) => {
    if(item.name === value) {
      return item
    } else if(value === "allStudents"){
      return item
    } 

  })
  console.log(filtered)
  setFilteredData(filtered)
}


  return (
    <div className="App">
      <Header />  
      <div className="container">
        <SideBar students={students} exercises={exercises} filterByName={filterByName}/>
        <Main data={filteredData} students={students} exercises={exercises}/>
      </div> 
    </div>
  )
}

export default App;