import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './user-profile.css'
import DataForm from '../DataForm/DataForm'
import BarChart from '../BarChart'
import LineChart from '../LineChart'

function UserProfile({data, mockData, exercises, handleFormData, formData}) {
    let navigate = useNavigate()
    let { username } = useParams()

    const randomNum = Math.floor(Math.random() * mockData.length);
    const randomUser = mockData[randomNum]


  return (
    <div className="user-content">
      <div className="welcome">
        <h2>Welcome {username}!</h2>
        <button className="back-btn" onClick={() => navigate('/')}>Go back</button>
      </div>
      <div className="student-info">
        <div className="profile-pic">
          <img src={randomUser.picture.large} alt={username}/>
        </div>
        <div className="student-details">
        <p><strong>Phone: </strong>{randomUser.phone}</p>
        <p><strong>Email: </strong>{randomUser.email}</p>
        <p><strong>Country: </strong>{randomUser.location.country}</p>
        </div>
      </div>

      <DataForm formData={formData} handleFormData={handleFormData}/>

      {formData.lineGraph ?
      <LineChart 
        data={data} 
        exercises={exercises} 
        formData={formData} 
        difficulty="difficulty" 
        funFactor="funFactor"
      /> :
      <BarChart 
        data={data} 
        exercises={exercises} 
        formData={formData} 
        difficulty="difficulty" 
        funFactor="funFactor"
      />
      }
    </div>
  )
}

export default UserProfile