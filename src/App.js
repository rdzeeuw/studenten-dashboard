import React, {useState, useEffect} from 'react'
import './styles/base.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import {csv} from 'd3'
import {VictoryBar, VictoryChart} from 'victory'
// const studentData = require('./data/data.json')

// const data = [
//   {quarter: 'a', earnings: '13000'},
//   {quarter: 'b', earnings: '16500'},
//   {quarter: 'c', earnings: '14250'},
//   {quarter: 'd', earnings: '19000'}
// ]

function App() {
  const [data, setData] = useState([])

  const row = d => {
    d.difficulty = +d.difficulty
    return d
}

  useEffect(() => { 
    csv('./data/data.csv', row).then(setData)
  },[])
  

console.log('data: ',data)  

  return (
    <div className="App">
      <Header />  
      <div className="container">
        <SideBar />
        {/* <Main data={data}/> */}
        <VictoryChart
          style={{tickLabels: {fontSize: 120}}}
          width='860'
          height='300'
          domainPadding={50}
          padding={{top: 10, bottom: 40, left: 80, right: 100}}
        >
          <VictoryBar data={data} x='exercise' y='difficulty' />
        </VictoryChart>
        
      </div>
      
    </div>
  );
}

export default App;