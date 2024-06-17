import React from 'react'
import "./patientcss/patientsubmit.css"
const Patientsubmit = () => {

  return (
    <div className='patient-submit'>
        <div className='patient-submit-img'>
            <img src="https://cdn.pixabay.com/photo/2023/09/04/22/35/boy-8233868_1280.png" width="202px" height="200px"/>
        </div>
        <div className='patient-submit-content'>
            <span>Submitted Successfully</span>
            <button>Track your claim</button>
            <p>Please hand over to the receptionist</p>
            
        </div>
        
    </div>
  )
}

export default Patientsubmit