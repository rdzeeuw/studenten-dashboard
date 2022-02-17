import React from 'react';
import './main.css'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryZoomContainer} from 'victory'

function Main({data, student, exercises}) {


  return (
    <main className="main">
        <h3 className="main-title">Main</h3>

        <VictoryChart width={800} height={400}
          domainPadding={{x: 15}}
          // padding={{top: 10, bottom: 10, left: 50, right: 50}}
          containerComponent={
            <VictoryZoomContainer/>
          }
        >
          <VictoryLabel text="hier het soort data..." x={425} y={0} textAnchor="middle"/>
          <VictoryAxis  
            style={{ tickLabels: { angle: -40, fontSize: 10, padding: 30} }} 
            tickValues={[exercises]} 
            
            />
          <VictoryAxis dependentAxis tickFormat={(tick) => `${Math.round(tick)}`}/>
          <VictoryGroup>
          
            <VictoryBar 
              style={{ data: { fill: "tomato"} }} 
              data={data.slice(0,15)} 
              x='exercise' 
              y='difficulty'
              alignment="start"
              barRatio={1}  
              // animate 
              />
 
            <VictoryBar 
              style={{ data: { fill: "gold"} }} 
              data={data.slice(0,15)} 
              x='exercise' 
              y='funFactor' 
              barRatio={1}
            />
 
            </VictoryGroup>
           
        </VictoryChart>
        
    </main>
    )
}

export default Main;
