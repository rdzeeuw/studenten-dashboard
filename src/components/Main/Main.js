import React from 'react';
import './main.css'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryZoomContainer} from 'victory'

function Main({data, student, exercises, formData, avgData}) {

  console.log(data)
  return (
    <main className="main">
        <h3 className="main-title">Welcome students!</h3>

        <VictoryChart width={800} height={300}
          domainPadding={{x: 15}}
          padding={{top: 30, bottom: 100, left: 70, right: 70}}
          // containerComponent={
          //   <VictoryZoomContainer/>
          // }
        >
          <VictoryLabel text="Difficulty (yellow) and fun (red) rating of all students" x={425} y={0} textAnchor="middle"/>
          <VictoryAxis  
            // style={{ tickLabels: { angle: -40, fontSize: 7, padding: 20} }} 
            tickValues={[exercises]} 
            tickLabelComponent={
              <VictoryLabel 
                dy={-6} 
                style={{ angle: -40, fontSize: 10, padding: 30, textAnchor: "end"}} />}
            />
          <VictoryAxis dependentAxis tickFormat={(tick) => `${Math.round(tick)}`}/>
          <VictoryGroup offset={-5}>
          {formData.difficulty &&
            <VictoryBar 
              style={{ data: { fill: "tomato"} }} 
              data={data} 
              x='exercise' 
              y='avgDifficulty'
              // alignment="start"
              barRatio={1}  
              // animate 
              />
            }
          {formData.funFactor &&
            <VictoryBar 
              style={{ data: { fill: "gold"} }} 
              data={data} 
              x='exercise' 
              y='avgFun' 
              barRatio={2}
            />
          }
            </VictoryGroup>
        </VictoryChart>
    </main>
    )
}

export default Main;
