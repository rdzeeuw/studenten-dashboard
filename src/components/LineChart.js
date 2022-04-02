import React from 'react'
import {VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryLine} from 'victory'


function LineChart({data, exercises, formData, difficulty, funFactor}) {

  return (
    <VictoryChart 
          width={800} 
          height={400}
          domainPadding={{x: 5}}
          padding={{top: 0, bottom: 150, left: 30, right: 30}} >
        <VictoryLabel 
          text="Difficulty (red) and fun (blue) rating of all students" 
          x={425} 
          y={-20} 
          textAnchor="middle"
          style={{fontFamily: "Poppins, sans-serif", fontSize: 8}}/>
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
          <VictoryLine 
          style={{
            data: { stroke: "#5B6AE9" }
          }} 
            data={data} 
            x='exercise' 
            y={difficulty}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }} 
            />
          }
        {formData.funFactor &&
          <VictoryLine 
            style={{
              data: { stroke: "#ec1840" }
            }} 
            data={data} 
            x='exercise' 
            y={funFactor} 
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }} 
          />
        }
          </VictoryGroup>
        </VictoryChart>
  )
}

export default LineChart