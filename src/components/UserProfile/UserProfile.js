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

        <VictoryChart width={800} height={400}
          domainPadding={{x: 15}}
          // padding={{top: 10, bottom: 10, left: 50, right: 50}}
          containerComponent={
            <VictoryZoomContainer/>
          }
        >
          <VictoryLabel text={`Difficulty (yellow) and fun (red) rating of ${username}`} x={425} y={0} textAnchor="middle"/>
          <VictoryAxis  
            style={{ tickLabels: { angle: -40, fontSize: 10, padding: 30} }} 
            tickValues={[exercises]} 
            
            />
          <VictoryAxis dependentAxis tickFormat={(tick) => `${Math.round(tick)}`}/>
          <VictoryGroup>
          {formData.difficulty &&
            <VictoryBar 
              style={{ data: { fill: "tomato"} }} 
              data={data.slice(0,25)} 
              x='exercise' 
              y='difficulty'
              alignment="start"
              barRatio={1}  
              // animate 
              />
          }
          {formData.funFactor &&
            <VictoryBar 
              style={{ data: { fill: "gold"} }} 
              data={data.slice(0,25)} 
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