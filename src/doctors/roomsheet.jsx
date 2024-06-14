import React from 'react'
import "./doctorcss/roomsheet.css"
import { IoMdArrowDropdown } from "react-icons/io";
const Roomsheet = () => {
  const move= {
    fontSize:"20px"
  }
  const all = {
    opacity:".7",
  }
  const allBtn = {
    border: "0px solid red",
    color: "hsla(241, 74%, 65%, 1)",
    opacity:"1",
    fontWeght:"700"

  }
  return (
    <div className='roomsheet'>
        <div className="room-sheet-header">
           <b>ROM Sheet</b>
        </div>
        {/* typrs of exam */}
        
        <div className='dropdown-main'>
           <b>Types Of Exam</b>&emsp;
           <select className="dropdown">
             <option>Worker's Comp <IoMdArrowDropdown/></option>
             <option value="a">a</option>
             <option value="b">b</option>
             <option value="c">c</option>
           </select>


        </div>

        {/* typrs of exam */}
        <div className="patient">
            <div className="patientname">
                <label>Patient name</label>
                <input type="text" placeholder="Patient name" className='custom-placeholder' ></input>

            </div>
            <div className="date">
                <label>Date</label>
                <input type="date" placeholder="MM/DD/YY" className='custom-placeholder'/>

            </div>
        </div>

        {/* room sheeet gift dme sign sec row  */}
        <div className='room-sec-card'>
            <div className='gait'>
                <b>Gait</b><br/>
                <div>
                  <label>
                   <input type="radio" name="option-1" value="option-1"/>
                    &emsp;Normal
                  </label>&emsp;
                 <label>
                   <input type="radio" name="option-1" value="option-1"/>
                   &emsp;Antalgic
                 </label>

                </div>
                

            </div>
            <div className='dme'>
                <b>DME Use</b><br/>
                <div>
                  <label>
                   <input type="radio" name="option-2" value="option-2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="option-2" value="option-2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='waddle'>
                <b>Waddel Sign</b><br/>
                <div>
                  <label>
                   <input type="radio" name="option-3" value="option-3"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="option-3" value="option-3"/>
                   &emsp;Neg
                 </label>

                </div>

            </div>

        </div>
        {/* room sheeet gift dme sign sec row  */}
        {/* type div 3rd */}
        <div className='room-third-card' style={{}}>
            <b>Type</b>
              <div>
                  <label>
                   <input type="radio" name="option1" value="option2"/>
                    &emsp;Cane
                  </label>&emsp;
                 <label>
                   <input type="radio" name="option1" value="option2"/>
                   &emsp;Walker
                 </label>&emsp;
                 <label>
                   <input type="radio" name="option1" value="option2"/>
                    &emsp;LCO
                  </label>&emsp;
                 <label>&emsp;
                   <input type="radio" name="option1" value="option2"/>
                   &emsp;KO
                 </label>&emsp;
                 <label>
                   <input type="radio" name="option1" value="option2"/>
                    &emsp;AFO
                  </label>&emsp;
                 <label>
                   <input type="radio" name="option1" value="option2"/>
                   &emsp;OTHERS
                 </label>

              </div>
              

        
        </div>


        {/* type div 3rd */}
        {/* neurology exam */}
        
        <div className='neurology'>
          <b>Neurology exam</b>
          <div className='neuro-main'>
            <div className='memory'>
                <b>Memory</b><br/>
                <label>
                   <input type="radio" name="N" value="N"/>
                   &emsp;Normal
                 </label>
                 <label>&emsp;
                   <input type="radio" name="N" value="N"/>
                   &emsp;Abnormal
                 </label>

            </div>
            <div className='memory'>
                <b>Tone</b><br/>
                <label>
                   <input type="radio" name="T" value="T"/>
                   &emsp;Normal
                 </label>
                 <label>&emsp;
                   <input type="radio" name="T" value="T"/>
                   &emsp;Hypertonic
                 </label>&emsp;
                 <label>
                   <input type="radio" name="T" value="T"/>
                   &emsp;Hypotonic
                 </label>

                
            </div>
            <div className='memory'>
                <b>Atrophy</b><br/>
                <label>
                   <input type="radio" name="A" value="A"/>
                   &emsp;Pos
                 </label>
                 <label>&emsp;
                   <input type="radio" name="A" value="A"/>
                   &emsp;Neg
                 </label>
                
            </div>
            <div className='memory'>
                <b>Cranial Nerve</b><br/>
                <label>
                   <input type="radio" name="C" value="C"/>
                   &emsp;Normal
                 </label>
                 <label>&emsp;
                   <input type="radio" name="C" value="C"/>
                   &emsp;Abnormal
                 </label>
                
            </div>
            <div className='memory'>
                <b>Cerebellum</b><br/>
                <label>
                   <input type="radio" name="Z" value="Z"/>
                   &emsp;Normal
                 </label>
                 <label>&emsp;
                   <input type="radio" name="Z" value="Z"/>
                   &emsp;Abnormal
                 </label>

                
            </div>
            <div className='memory'>
                <b>Ataxia</b><br/>
                <label>
                   <input type="radio" name="Z" value="Z"/>
                   &emsp;Pos
                 </label>
                 <label>&emsp;
                   <input type="radio" name="Z" value="Z"/>
                   &emsp;Neg
                 </label>
                
            </div>
            <div className='memory'>
                <b>Nystagmus</b><br/>
                <label>
                   <input type="radio" name="Y" value="Y"/>
                   &emsp;Pos
                 </label>
                 <label>&emsp;
                   <input type="radio" name="Y" value="Y"/>
                   &emsp;Neg
                 </label>
                
            </div>

          </div>

        </div>

        {/* neurology exam */}


        {/* examination of spine */}
        <div className='room-forth-card'>
          <b>Examination of cervical spine</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="exam" value="exam"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="exam" value="exam"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="scar" value="scar"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="scar" value="scar"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spasm</b><br/>
                <div>
                  <label>
                   <input type="radio" name="spasm" value="spasm"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="spasm" value="spasm"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spurling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="spur" value="spur"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="spur" value="spur"/>
                   &emsp;Neg
                 </label>

                </div>

            </div>
          </div>

        </div>
        {/* examination of spine */}


        {/* Movement divission */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Movement</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>50</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Rotation to Right</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Rotation to Left</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Lateral Flexion to Right</b></div>
            <div className='table-btn'>
               <button style={allBtn}>45</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Lateral Flexion to Left</b></div>
            <div className='table-btn'>
               <button style={allBtn}>45</button>
               <input type="number" />
            </div>
          </div>

        </div>
        
        {/* Movement divission */}
        {/* Examination Thoracic spine */}

        <div className='spine'>
        <b>Examination of Thoracic spine</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="exam" value="exam"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="exam" value="exam"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="scar" value="scar"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="scar" value="scar"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spasm</b><br/>
                <div>
                  <label>
                   <input type="radio" name="spasm" value="spasm"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="spasm" value="spasm"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spurling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="spur" value="spur"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="spur" value="spur"/>
                   &emsp;Neg
                 </label>

                </div>

            </div>
          </div>

        </div>
        {/* Examination Thoracic spine */}
         
        {/* Upper extremities */}
        <div className='upper'>                          
          <b>Upper extremities</b>
          <div className='user-main'>
            <div className='user-div'>
              <b>Muscle Strength</b>
              <div className='muscle-input-grp'>
                <input type="number"  />
                <input type="number" value="5"  />
              </div>

            </div>
            
              <div className='user-div'>
                <b>Grip</b>
                <div className='muscle-input-grp'>
                  <input type="number"  />
                  <input type="number" value="5"  />
                </div>

             
              
            </div>
            <div className='user-div'>
              <b>Sensation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="int" value="int"/>
                    &emsp;Intact
                  </label>&emsp;
                 <label>
                   <input type="radio" name="int" value="int"/>
                   &emsp;Decreased
                 </label>

                </div>
              
            </div>
            
          </div>

        </div>
        {/* Upper extremities */}
        {/* reflexes */}
        <div className='upper'>
          <b>Reflexes</b>
            <div>
                  <label>
                   <input type="radio" name="ref" value="ref"/>
                    &emsp;Normal
                  </label>&emsp;
                 <label>
                   <input type="radio" name="ref" value="ref"/>
                   &emsp;Sluggish
                 </label>&emsp;
                 <label>
                   <input type="radio" name="ref" value="ref"/>
                   &emsp;Sensation
                 </label>

            </div>


        </div>


        {/* reflexes */}

        {/* lower extremities */}
        <div className='lower-ex'>
          <b>Lower extremities</b>
          <div className='lower-children-main'>
            {/* firstone */}
            <div className='user-main'>
            <div className='user-div'>
              <b>Muscle Strength</b>
              <div className='muscle-input-grp'>
                <input type="number"  />
                <input type="number" value="5"  />
              </div>

            </div>
            
            <div className='user-div'>
              <b>EHL function</b><br/>
                <div>
                  <label>
                   <input type="radio" name="lower" value="lower"/>
                    &emsp;Intact
                  </label>&emsp;
                 <label>
                   <input type="radio" name="lower" value="lower"/>
                   &emsp;Decreased
                 </label>

                </div>
              
            </div>
            <div className='user-div'>
              <b>Sensation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="san" value="san"/>
                    &emsp;Intact
                  </label>&emsp;
                 <label>
                   <input type="radio" name="san" value="san"/>
                   &emsp;Decreased
                 </label>

                </div>
              
            </div>
            </div>
            {/* firstone */}
            {/* secondone */}
            
            <div className='exam-children'>
              <b>Reflexes</b><br/>
                <div>
                  <label>
                   <input type="radio" name="exam" value="exam"/>
                    &emsp;Normal
                  </label>&emsp;
                 <label>
                   <input type="radio" name="exam" value="exam"/>
                   &emsp;Sluggish
                 </label>&emsp;
                 <label>
                   <input type="radio" name="exam" value="exam"/>
                   &emsp;Exaggerated
                 </label>
                </div>
              

            </div>
            {/* </div> */}



            {/* secondone */}
            {/* thirdone */}
            <div className='exam-children'>
              <b>Heel Standing</b><br/>
                <div>
                  <label>
                   <input type="radio" name="heel" value="heel"/>
                    &emsp;Normal
                  </label>&emsp;
                 <label>
                   <input type="radio" name="heel" value="heel"/>
                   &emsp;Unable to Perform
                 </label>

                </div>
              

            </div>



            {/* thirdone */}

            {/* forthone */}
            <div className='exam-children'>
              <b>Toe Standing</b><br/>
                <div>
                  <label>
                   <input type="radio" name="toe" value="toe"/>
                    &emsp;Normal
                  </label>&emsp;
                 <label>
                   <input type="radio" name="toe" value="toe"/>
                   &emsp;Unable to Perform
                 </label>
                </div>
              

            </div>


            {/* forthone */}


          </div>


        </div>

        {/* lower extremities */}

        {/* Lumber spine */}
        <div className='spine'>
        <b>Examination of Lumbar spine</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="lumber" value="lumber"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="lumber" value="lumber"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="lumber1" value="lumber1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="lumber1" value="lumber1"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spasm</b><br/>
                <div>
                  <label>
                   <input type="radio" name="lumber3" value="lumber3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="lumber3" value="lumber3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Spurling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="lumber" value="lumber"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="lumber" value="lumber"/>
                   &emsp;Neg
                 </label>

                </div>

            </div>
          </div>

        </div>

        



        {/* Lumber spine */}

        {/* last Movement */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Movement</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>25</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          

          <div className='table-head'>
            <div><b style={all}>Lateral Flexion to Right</b></div>
            <div className='table-btn'>
               <button style={allBtn}>25</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Lateral Flexion to Left</b></div>
            <div className='table-btn'>
               <button style={allBtn}>25</button>
               <input type="number" />
            </div>
          </div>

        </div>



        {/* last Movement */}
        {/* button */}
        <div className='room-submit'>
        <button>Submit</button>

        </div>
        
        {/* button */}
        



    </div>
  )
}

export default Roomsheet;