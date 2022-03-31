import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryLabel, VictoryLine} from 'victory'
import './user-profile.css'

function UserProfile({data, mockData, exercises, handleFormData, formData}) {
    let navigate = useNavigate()
    let { username } = useParams()

   
    const randomNum = Math.floor(Math.random() * mockData.length);
    const randomUser = mockData[randomNum]
    console.log('randomUser: ', randomUser)
    

  return (
    <div className="user-content">
      <div className="welcome">
        <h2>Welcome {username}!</h2>
        <button className="back-btn" onClick={() => navigate('/')}>Go back</button>
      </div>
      <div className="student-info">
        <div classname="student-avatar">
          <img src={randomUser.avatar} alt={username} className="avatar"/>
        </div>
        <div className="student-details">
        <p><strong>Phone: </strong>{randomUser.phone}</p>
        <p><strong>Email: </strong>{randomUser.email}</p>
        <p><strong>Country: </strong>{randomUser.country}</p>
        </div>
      </div>

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
          text={`Difficulty (red) and fun (blue) rating of ${username}`} 
          x={425} 
          y={0} 
          textAnchor="middle"
          style={{fontFamily: "Poppins, sans-serif", fontSize: 8}}/>
        <VictoryAxis  
          tickValues={[exercises]} 
          tickLabelComponent={
            <VictoryLabel 
              dy={-6} 
              style={{ angle: -40, fontSize: 9, padding: 30, textAnchor: "end"}} />}
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
            y='difficulty'
            // alignment="start"
            barRatio={1}  
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
            y='funFactor' 
            barRatio={2}
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
        style={{ angle: -40, fontSize: 8, padding: 30, textAnchor: "end"}} />}
    />
    <VictoryAxis dependentAxis />
    <VictoryGroup offset={-5}>
    {formData.difficulty &&
      <VictoryBar 
        style={{ data: { fill: "#5B6AE9"} }} 
        data={data} 
        x='exercise' 
        y='difficulty'
        barRatio={1}  
        animate 
      />
    }
    {formData.funFactor &&
      <VictoryBar 
        style={{ data: { fill: "#ec1840"} }} 
        data={data} 
        x='exercise' 
        y='funFactor' 
        barRatio={1}
        animate
      />
    }
    </VictoryGroup>
  </VictoryChart>}
  </div>
  )
}

export default UserProfile