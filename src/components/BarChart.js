import React from 'react'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel} from 'victory'


function BarChart({data, exercises, formData, difficulty, funFactor}) {

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
            style={{ angle: -40, fontSize: 8, padding: 30, textAnchor: "end", fontFamily: "Poppins, sans-serif"}} />}
        />
        <VictoryAxis dependentAxis />
        <VictoryGroup offset={-5}>
        {formData.difficulty &&
          <VictoryBar 
            style={{ data: { fill: "#5B6AE9"} }} 
            data={data} 
            x='exercise' 
            y={difficulty}
            barRatio={.5}  
            animate 
          />
        }
        {formData.funFactor &&
          <VictoryBar 
            style={{ data: { fill: "#ec1840"} }} 
            data={data} 
            x='exercise' 
            y={funFactor} 
            barRatio={.5}
            animate
          />
        }
        </VictoryGroup>
     </VictoryChart>
  )
}

export default BarChart