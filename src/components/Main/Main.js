import React from 'react';
import './main.css'
import DataForm from '../DataForm/DataForm'
import BarChart from '../BarChart'
import LineChart from '../LineChart';

function Main({data, exercises, handleFormData, formData}) {
  // console.log('data in main: ', data)
  
  return (
    <main className="main">
        <h3 className="welcome">Welcome students!</h3>
        <DataForm formData={formData} handleFormData={handleFormData}/>
        
        {formData.lineGraph ? 
        <LineChart 
          data={data} 
          exercises={exercises} 
          formData={formData} 
          difficulty="avgDifficulty" 
          funFactor="avgFun"
        /> :
        <BarChart 
          data={data} 
          exercises={exercises} 
          formData={formData} 
          difficulty="avgDifficulty" 
          funFactor="avgFun"
        />
    }
    </main>
  )
}

export default Main;
