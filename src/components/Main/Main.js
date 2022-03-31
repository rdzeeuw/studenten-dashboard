import React from 'react';
import './main.css'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryLine} from 'victory'

function Main({data, exercises, handleFormData, formData}) {
  // console.log('data in main: ', data)
  
  return (
    <main className="main">
        <h3 className="welcome">Welcome students!</h3>

        <form>
          <label htmlFor="checkboxes">Select data output</label>
          <div className="checkboxes">
            <label htmlFor="difficulty">
              <input 
                type="checkbox" 
                id="difficulty" 
                name="difficulty"
                checked={formData.difficulty}
                onChange={handleFormData}>  
              </input>
              Difficulty
            </label>
            <label htmlFor="funFactor">
              <input 
                type="checkbox" 
                name="funFactor"
                id="funFactor" 
                checked={formData.funFactor}
                onChange={handleFormData}>
              </input>
              Fun Factor
            </label>
            <label htmlFor="lineGraph">
              <input 
                type="checkbox" 
                name="lineGraph"
                id="lineGraph" 
                checked={formData.lineGraph}
                onChange={handleFormData}>
              </input>
              Show line graph
            </label>
          </div>
        </form>

        {formData.lineGraph ? 
        <VictoryChart 
          width={800} 
          height={300}
          domainPadding={{x: 5}}
          padding={{top: 30, bottom: 100, left: 70, right: 70}} >
        <VictoryLabel 
          text="Difficulty (red) and fun (blue) rating of all students" 
          x={425} 
          y={0} 
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
            y='avgDifficulty'
            // alignment="start" 
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
            y='avgFun' 
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 }
            }} 
          />
        }
          </VictoryGroup>
      </VictoryChart> :

      <VictoryChart 
        width={800} 
        height={300}
        domainPadding={{x: 5}}
        padding={{top: 30, bottom: 100, left: 40, right: 40}} >
        <VictoryLabel 
          text="Difficulty (red) and fun (blue) rating of all students" 
          x={425} 
          y={0} 
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
          y='avgDifficulty'
          // alignment="start"
          barRatio={.5}  
          animate 
        />
      }
      {formData.funFactor &&
        <VictoryBar 
          style={{ data: { fill: "#ec1840"} }} 
          data={data} 
          x='exercise' 
          y='avgFun' 
          barRatio={.5}
          animate
        />
      }
      </VictoryGroup>
    </VictoryChart>

      }
 
    </main>
    )
}

export default Main;
