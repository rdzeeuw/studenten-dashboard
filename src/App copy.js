import React, {useState, useEffect} from 'react'
import './styles/base.css';
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import BarChart from './components/BarChart'
// import Main from './components/Main/Main'
// import {csv} from 'd3'
import {VictoryBar, VictoryChart, VictoryAxis} from 'victory'
const studentData = require('./data/data.json')

console.log(studentData[0])

const data = [
  {quarter: 'a', earnings: '13000'},
  {quarter: 'b', earnings: '16500'},
  {quarter: 'c', earnings: '14250'},
  {quarter: 'd', earnings: '19000'}
]

function App() {
  



  // const [data, setData] = useState([])

//   const row = d => {
//     d.difficulty = +d.difficulty
//     return d
// }


  // useEffect(() => { 
  //   csv('./data/data.csv').then((response) => {
  //     console.log('response: ',response)
  //     const cleanedData = response.map(row => {
  //       return {
  //           ...row,
  //           difficulty :  +row.difficulty,
  //           funFactor : +row.funFactor
  //       }
        
  //   })
  // })
  // },[])
  

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
          <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => (`$${x / 1000}k`)}
        />
          <VictoryBar data={data} x='quarter' y='earnings' />
          
        </VictoryChart>
        
      </div>
      
    </div>
  );
}

export default App;