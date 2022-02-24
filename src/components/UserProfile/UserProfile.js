import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryZoomContainer} from 'victory'
import './user-profile.css'

function UserProfile({data, student, exercises, formData}) {
    let navigate = useNavigate()
    let { username } = useParams()

  return (
    <div className="user-content">
        <h1 className="welcome">Welcome {username}!</h1>
        <button onClick={() => navigate('/')}>Go back</button>

        <VictoryChart width={800} height={300}
          domainPadding={{x: 5}}
          padding={{top: 30, bottom: 100, left: 70, right: 70}}
          // containerComponent={
          //   <VictoryZoomContainer/>
          // }
        >
          <VictoryLabel text={`Difficulty (yellow) and fun (red) rating of ${username}`} x={425} y={0} textAnchor="middle"/>
          <VictoryAxis  
          //   style={{ 
          //     tickLabels: { angle: -40, fontSize: 10, padding: 30},
             
          //  }} 
            tickValues={[exercises]} 
            tickLabelComponent={
              <VictoryLabel 
                dy={-6} 
                style={{ angle: -40, fontSize: 10, padding: 30, textAnchor: "end"}} />}
            />
          <VictoryAxis dependentAxis 
            tickFormat={(tick) => `${Math.round(tick)}`}
            style={{
              ticks: {size: 5}
            }}/>
          <VictoryGroup offset={-5}>
          {formData.difficulty &&
            <VictoryBar 
              style={{ data: { fill: "tomato"} }} 
              data={data} 
              
              x='exercise' 
              y='difficulty'
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
              y='funFactor' 
              barRatio={1}
            />
          }
            </VictoryGroup>
           
        </VictoryChart>
    </div>
  )
}

export default UserProfile