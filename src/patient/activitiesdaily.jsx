import React from 'react'
import "./patientcss/activitiesdaily.css"
import { useNavigate } from 'react-router-dom';


const Activitiesdaily = () => {
  const imp = { color: 'red' };
  const navigate = useNavigate()
  const handleSubmit=()=>{
    navigate('/form-submitted')

  }

  return (
    <>
      <div className='activities-form'>
        {/* typo header */}
        <div className='activities-typo'>
          <span>
            ACTIVITIES OF DAILY LIVING
          </span>
        </div>
        {/* typo header finish*/}
        {/* how far can u walk */}
        <div className='walk-div'>
          <span>
            How far can you walk?<i style={imp}>*</i>
          </span>
          <div className="walk-btn-group">
            <button>No limit</button>
            <button>Half mile</button>
            <button>One mile</button>
            <button>One block</button>
            <button>Two blocks</button>
          </div>
        </div>
        {/* how far can u walk finished*/}

        {/* how long can u stand continiously? */}
        <div className='walk-div'>
          <span>
            How long can you stand continiously?<i style={imp}>*</i>
          </span>
          <div className="walk-btn-group">
            <button>No limit</button>
            <button>Two hours</button>
            <button>One hours</button>
            <button>30 min</button>
            <button>10 min</button>
          </div>
        </div>
        {/* how long can u stand continiously? finished*/}

        {/* How long can u sit */}
        <div className='walk-div'>
          <span>
            How long can you sit before you have to change position because of pain?<i style={imp}>*</i>
          </span>
          <div className="walk-btn-group">
            <button>No limit</button>
            <button>Two hours</button>
            <button>One hours</button>
            <button>30 min</button>
            <button>10 min</button>
          </div>
        </div>
        {/* How long can u sit finish*/}

        {/* does anyone help you? */}
        <div className='walk-div'>
          <span>
           Does anyone help you with daily activitie ( like bathing, dressing, toileting)<i style={imp}>*</i>
          </span>
          <div className="walk-btn-group">
            <button>Yes</button>
            <button>No</button>
          </div>
          <div className='daily-activities-name'>
              If yes: who? <input type="text"   />
          </div>
        </div>
        {/* does anyone help you? finished*/}

        {/* what activities you not able to do? */}
        <div className='activities-div-5'>
           <div className='injury-input'>
            <span>
              What activities are you not able to do because of your injury?<i style={imp}>*</i>
            </span><br/>
            <input type="text"   />

           </div>
           <div className='day-input'>
            <span>
              What activities are you not able to do because of your injury?<i style={imp}>*</i>
            </span><br/>
            <input type="text"   />

           </div>
        </div>
        {/* what activities you not able to do? finish*/}

        {/* submit button */}
        <div className='activities-btn'>
         <button onClick={handleSubmit}>
            Submit
         </button>
          
        </div>
        
        {/* submit button finished */}




      </div>
    </>
  )
}
export default Activitiesdaily;