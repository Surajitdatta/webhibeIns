import React from 'react'
import "./doctorcss/roomsheet.css"
import "./doctorcss/romsheet.css"
const Romsheet = () => {
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
        fontWeght:"700",
        width:"fit-content",
        padding:"5px"
    
      }
  return (
    <div className='roomsheet'>
        {/* romsheet b  */}
        <div className="room-sheet-header">
           <b>ROM Sheet</b>
        </div>
        {/* romsheet b  */}
        {/* left shoulder examination */}
        <div className='room-forth-card'>
          <b>Left Shoulder Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left1" value="left1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left1" value="left1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left2" value="left2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left2" value="left2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left3" value="left3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left3" value="left3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left4" value="left4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left4" value="left4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Neer's Impingement Test</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left5" value="left5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left5" value="left5"/>
                   &emsp;Neg
                 </label>

                </div>

            </div>
          </div>

        </div>
       
        {/* left shoulder examination */}
        {/* Range of motion divission */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>180</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>180</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Adduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Internal Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>External Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>90</button>
               <input type="number" />
            </div>
          </div>
        </div>
        
        {/* Range of motion divission */}
        {/* Right shoulder examination */}
        <div className='room-forth-card'>
          <b>Right Shoulder Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right1" value="right1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right1" value="right1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right2" value="right2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right2" value="right2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right3" value="right3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right3" value="right3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right4" value="right4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right4" value="right4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Neer's Impingement Test</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right5" value="right5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right5" value="right5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
          </div>

        </div>
        
        {/* Right shoulder examination */}
        {/* range of motion */}
        {/* Range of motion divission */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>180</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>180</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Adduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Internal Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>External Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>90</button>
               <input type="number" />
            </div>
          </div>
        </div>
        
        {/* Range of motion divission */}

        {/* left elbow examination  */}
        <div className='room-forth-card'>
          <b>Left Elbow Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-elbow1" value="left-elbow1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-elbow1" value="left-elbow1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-elbow2" value="left-elbow2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-elbow2" value="left-elbow2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-elbow3" value="left-elbow3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-elbow3" value="left-elbow3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-elbow4" value="left-elbow4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-elbow4" value="left-elbow4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tinel</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-elbow5" value="left-elbow5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-elbow5" value="left-elbow5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* left elbow examination  */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>150</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range of motion */}
        {/* right elbow examination */}
        <div className='room-forth-card'>
          <b>Right Elbow Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-elbow1" value="right-elbow1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-elbow1" value="right-elbow1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-elbow2" value="right-elbow2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-elbow2" value="right-elbow2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-elbow3" value="right-elbow3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-elbow3" value="right-elbow3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-elbow4" value="right-elbow4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-elbow4" value="right-elbow4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tinel</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-elbow5" value="right-elbow5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-elbow5" value="right-elbow5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* right elbow examination */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>150</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range of motion */}
        {/* left wrist examination */}
        <div className='room-forth-card'>
          <b>Left Wrist Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-wrist1" value="left-wrist1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-wrist1" value="left-wrist1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-wrist2" value="left-wrist2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-wrist2" value="left-wrist2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-wrist3" value="left-wrist3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-wrist3" value="left-wrist3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-wrist4" value="left-wrist4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-wrist4" value="left-wrist4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Phalen's</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-wrist5" value="left-wrist5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-wrist5" value="left-wrist5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* left wrist examination */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Pronation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Supination</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Dorsiflexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Palmar Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Radial deviaton</b></div>
            <div className='table-btn'>
               <button style={allBtn}>20</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Ulnar deviaton</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range fo motion */}
        {/* right wrist examination */}
        <div className='room-forth-card'>
          <b>Right Wrist Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-wrist1" value="right-wrist1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-wrist1" value="right-wrist1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-wrist2" value="right-wrist2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-wrist2" value="right-wrist2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-wrist3" value="right-wrist3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-wrist3" value="right-wrist3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-wrist4" value="right-wrist4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-wrist4" value="right-wrist4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Phalen's</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-wrist5" value="right-wrist5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-wrist5" value="right-wrist5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
          </div>

        </div>
        {/* right wrist examination */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Pronation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Supination</b></div>
            <div className='table-btn'>
               <button style={allBtn}>80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Dorsiflexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Palmar Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Radial Deviaton</b></div>
            <div className='table-btn'>
               <button style={allBtn}>20</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Ulnar Deviaton</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range of motion */}
        {/* left thumb examination  */}
        <div className='room-forth-card'>
          <b>Left Thumb Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-thumb1" value="left-thumb1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-thumb1" value="left-thumb1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-thumb2" value="left-thumb2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-thumb2" value="left-thumb2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-thumb3" value="left-thumb3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-thumb3" value="left-thumb3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-thumb4" value="left-thumb4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-thumb4" value="left-thumb4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Ampulation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-thumb5" value="left-thumb5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-thumb5" value="left-thumb5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* left thumb examination  */}
        {/* Range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>IP</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0-80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>MCP</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0-60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>CMC Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>Upto 4 Finger</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* Range of motion */}
        {/* right thumb examination */}
        <div className='room-forth-card'>
          <b>Right Thumb Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-thumb1" value="right-thumb1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-thumb1" value="right-thumb1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-thumb2" value="right-thumb2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-thumb2" value="right-thumb2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-thumb3" value="right-thumb3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-thumb3" value="right-thumb3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-thumb4" value="right-thumb4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-thumb4" value="right-thumb4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Ampulation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-thumb5" value="right-thumb5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-thumb5" value="right-thumb5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* right thumb examination */}
        {/* range of motion  */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>IP</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0-80</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>MCP</b></div>
            <div className='table-btn'>
               <button style={allBtn}>0-60</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>CMC Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>Upto 4 Finger</button>
               <input type="number" />
            </div>
          </div>
        </div>

        {/* range of motion  */}
        {/* left finger examination */}
        <div className='room-forth-card'>
          <b>Left Finger Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger1" value="left-finger1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger1" value="left-finger1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger2" value="left-finger2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger2" value="left-finger2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger3" value="left-finger3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger3" value="left-finger3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger4" value="left-finger4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger4" value="left-finger4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Ampulation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger5" value="left-finger5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger5" value="left-finger5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
            <div className='exam-children'>
               <b>DeQuervain's</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-finger6" value="left-finger5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-finger6" value="left-finger5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* left finger examination */}
        {/* right finger examination */}
        <div className='room-forth-card'>
          <b>Right Finger Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger1" value="right-finger1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger1" value="right-finger1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger2" value="right-finger2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger2" value="right-finger2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger3" value="right-finger3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger3" value="right-finger3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger4" value="right-finger4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger4" value="right-finger4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Ampulation</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger5" value="right-finger5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger5" value="right-finger5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
            <div className='exam-children'>
               <b>DeQuervain's</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-finger6" value="right-finger5"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-finger6" value="right-finger5"/>
                   &emsp;No
                 </label>
                </div>
            </div>
          </div>

        </div>

        {/* right finger examination */}
        {/* range of motion */}
        <div className='range-of-motion'>
          {/* firstone */}
          <div className='range-of-motion-insight'>
            <div className='insight1'>
              <div><b>Range of motion</b></div>
              <div><button>Index finger</button></div>

            </div>
            <div className='insight-left-right'>
              <div><button>Left</button></div>
              <div><button>Right</button></div>

            </div>
            <div className='insight1'>
              <div><b>Dip(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>Pip(0-100)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>MCP(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            

          </div>
          {/* firstone */}
          {/* second */}
          <div className='range-of-motion-insight'>
            <div className='insight1'>
              <div><b>Range of motion</b></div>
              <div><button>Index finger</button></div>

            </div>
            <div className='insight-left-right'>
              <div><button>Left</button></div>
              <div><button>Right</button></div>

            </div>
            <div className='insight1'>
              <div><b>Dip(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>Pip(0-100)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>MCP(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            

          </div>
          {/* second */}
          {/* third */}
          <div className='range-of-motion-insight'>
            <div className='insight1'>
              <div><b>Range of motion</b></div>
              <div><button>Index finger</button></div>

            </div>
            <div className='insight-left-right'>
              <div><button>Left</button></div>
              <div><button>Right</button></div>

            </div>
            <div className='insight1'>
              <div><b>Dip(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>Pip(0-100)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>MCP(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            

          </div>
          {/* third */}
          {/* forth */}
          <div className='range-of-motion-insight'>
            <div className='insight1'>
              <div><b>Range of motion</b></div>
              <div><button>Index finger</button></div>

            </div>
            <div className='insight-left-right'>
              <div><button>Left</button></div>
              <div><button>Right</button></div>

            </div>
            <div className='insight1'>
              <div><b>Dip(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>Pip(0-100)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />

              </div>

            </div>
            <div className='insight1'>
              <div><b>MCP(0-90)</b></div>
              <div className='insight-left-right-input'>
                <input type="text" />
                <input type="text" />
              </div>
            </div>
          </div>
          {/* forth */}

        </div>
        {/* range of motion */}
        {/* left hip examination  */}
        <div className='room-forth-card'>
          <b>Left Hip Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-hip1" value="left-hip1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-hip1" value="left-hip1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-hip2" value="left-hip2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-hip2" value="left-hip2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-hip3" value="left-hip3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-hip3" value="left-hip3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-hip4" value="left-hip4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-hip4" value="left-hip4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
                <b>FADIR</b><br/>
                <div>
                  <label>
                   <input type="radio" name="left-hip5" value="left-hip5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="left-hip5" value="left-hip5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
            
          </div>

        </div>

        {/* left hip examination  */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>100</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>20</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>External Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>50</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Internal Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range of motion */}
        {/* right hip examination */}
        <div className='room-forth-card'>
          <b>Right Hip Examination</b>
          <div className='examination'>
            <div className='exam-children'>
              <b>Scar</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-hip1" value="right-hip1"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-hip1" value="right-hip1"/>
                   &emsp;No
                 </label>

                </div>
              

            </div>
            <div className='exam-children'>
               <b>Swelling</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-hip2" value="right-hip2"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-hip2" value="right-hip2"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Atrophy</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-hip3" value="right-hip3"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-hip3" value="right-hip3"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
               <b>Tenderness</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-hip4" value="right-hip4"/>
                    &emsp;Yes
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-hip4" value="right-hip4"/>
                   &emsp;No
                 </label>

                </div>

            </div>
            <div className='exam-children'>
                <b>FADIR</b><br/>
                <div>
                  <label>
                   <input type="radio" name="right-hip5" value="right-hip5"/>
                    &emsp;Pos
                  </label>&emsp;
                 <label>
                   <input type="radio" name="right-hip5" value="right-hip5"/>
                   &emsp;Neg
                 </label>
                </div>
            </div>
            
          </div>

        </div>

        {/* right hip examination */}
        {/* range of motion */}
        <div className='table'>
          <div className='table-head'>
            <div><b style={move}>Range of Motion</b></div>
            <div className='table-btn'>
               <button>Normal</button>
               <button>Claimant</button>
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Flexion</b></div>
            <div className='table-btn'>
               <button style={allBtn}>100</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Extension</b></div>
            <div className='table-btn'>
               <button style={allBtn}>30</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Abduction</b></div>
            <div className='table-btn'>
               <button style={allBtn}>20</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>External Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>50</button>
               <input type="number" />
            </div>
          </div>

          <div className='table-head'>
            <div><b style={all}>Internal Rotation</b></div>
            <div className='table-btn'>
               <button style={allBtn}>40</button>
               <input type="number" />
            </div>
          </div>
        </div>
        {/* range of motion */}
        {/* button */}
        <div className='rom-next-button'>
          <button >Next</button>
          
        </div>
        
        {/* button */}
        

    </div>
  )
}

export default Romsheet;