import React, { useState, useEffect } from 'react'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel} from 'victory'

function BarChart({data, exercises, formData, difficulty, funFactor}) {

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
            // animate 
          />
          }
          {formData.funFactor &&
          <VictoryBar 
            style={{ data: { fill: "#ec1840"} }} 
            data={data} 
            x='exercise' 
            y={funFactor} 
            barRatio={.5}
            // animate
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
          />
          
          }
          {formData.funFactor &&
          <VictoryBar 
            style={{ data: { fill: "#ec1840"} }} 
            data={data} 
            x='exercise' 
            y={funFactor} 
            barRatio={.5}
          />
          }
        </VictoryGroup>
      </VictoryChart>
    </div>
  </>
  )
}

export default BarChart