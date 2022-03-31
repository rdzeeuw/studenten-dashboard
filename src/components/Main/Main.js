import React from 'react';
import './main.css'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryZoomContainer} from 'victory'

function Main({data, student, exercises, formData, avgData}) {

  console.log(data)
  return (
    <main className="main">
        <h3 className="welcome">Welcome students!</h3>

        <VictoryChart width={800} height={300}
          domainPadding={{x: 5}}
          padding={{top: 30, bottom: 100, left: 70, right: 70}} >
          <VictoryLabel text="Difficulty (red) and fun (blue) rating of all students" x={425} y={0} textAnchor="middle"/>
          <VictoryAxis  
            tickValues={[exercises]} 
            tickLabelComponent={
          <VictoryLabel 
            dy={-6} 
            style={{ angle: -40, fontSize: 8, padding: 30, textAnchor: "end"}} />}
          />
          <VictoryAxis dependentAxis />
          <VictoryGroup offset={-5}>
          {formData.difficulty &&
            <VictoryBar 
              style={{ data: { fill: "#5B6AE9"} }} 
              data={data} 
              x='exercise' 
              y='avgDifficulty'
              // alignment="start"
              barRatio={1}  
              animate 
              />
            }
          {formData.funFactor &&
            <VictoryBar 
              style={{ data: { fill: "#ec1840"} }} 
              data={data} 
              x='exercise' 
              y='avgFun' 
              barRatio={2}
              animate
            />
          }
            </VictoryGroup>
        </VictoryChart>
    </main>
    )
}

export default Main;
