import React, { useState, useEffect } from 'react'
import {VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryLine} from 'victory'

function LineChart({data, exercises, formData, difficulty, funFactor}) {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  return (
    <>
      <div className="graph-big">
        <VictoryChart 
          width={width - 50} 
          height={height / 1.5}
          domainPadding={{x: 5}}
          padding={{top: 50, bottom: 150, left: 30, right: 30}} >
        <VictoryAxis  
          tickValues={exercises} 
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
            />
          }
          </VictoryGroup>
        </VictoryChart>
      </div>
      <div className="graph-small">
        <VictoryChart 
          horizontal
          width={width} 
          height={height + 50}
          domainPadding={{x: 5}}
          padding={{top: 30, bottom: 30, left: 110, right: 0}} >
        <VictoryAxis  
          tickValues={exercises} 
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
            />
          }
          </VictoryGroup>
        </VictoryChart>
      </div>
    </>
  )
}

export default LineChart