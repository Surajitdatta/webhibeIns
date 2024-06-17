import React from 'react';
import { useState, useEffect } from 'react';
import './patientcss/subsequentinjury.css';
import { useNavigate } from 'react-router-dom';

const SubsequentInjury = () => {
  // Initialize the state from localStorage directly
  const [when, setWhen] = useState(localStorage.getItem('when') || '');
  const [body, setBody] = useState(localStorage.getItem('body') || '');
  const [treatment, setTreatment] = useState(localStorage.getItem('treatment') || '');
  const navigate = useNavigate();
  const imp = { color: 'red' };
  const Font = { fontSize: "16px"}

  useEffect(() => {
    localStorage.setItem('when', when);
    localStorage.setItem('body', body);
    localStorage.setItem('treatment', treatment);
  }, [when, body, treatment]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='subsecuent'>
      <div className='subsecuent-injury'>
        <div className='subsequent-header'>
          <span>SUBSEQUENT INJURY</span>
        </div>
        <div className='subsecuent-form'>
          <div className='injury-form-first'>
            <label style={Font}>Have you suffered any injury after the accident</label>
            <div className='subsecuent-btn'>
              <button>Yes</button>
              <button>No</button>
            </div>
          </div>
          <div className='injury-form-second'>
            <label htmlFor='when'>
              If yes, When?<i style={imp}>*</i>
            </label>
            <div>
              <input
                type='text'
                id='when'
                value={when}
                required
                onChange={(e) => setWhen(e.target.value)}
              />
            </div>
          </div>
          <div className='injury-form-third'>
            <label htmlFor='body'>
              Injured body part<i style={imp}>*</i>
            </label>
            <div>
              <input
                type='text'
                id='body'
                value={body}
                required
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          </div>
          <div className='injury-form-forth'>
            <label htmlFor='treatment'>
              Treatment<i style={imp}>*</i>
            </label>
            <div>
              <input
                type='text'
                id='treatment'
                value={treatment}
                required
                onChange={(e) => setTreatment(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className='subsequentBtnGroup'>
          <button onClick={() => handleNavigate("/pastmedical-history")}>Previous</button>
          <button onClick={() => handleNavigate('/activities-daily')}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default SubsequentInjury;
