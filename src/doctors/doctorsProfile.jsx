import React from 'react'
import "./doctorcss/doctorsprofile.css";
import { CiCalendarDate } from "react-icons/ci";
const DoctorsProfile = () => {
    const items = [
        {
          id: 1,
          image: 'https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'John Doe',
          date: 'Monday, 12 june',
          time: '10:00 AM',
          alt: 'image'
        },
        {
          id: 2,
          image: 'https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'Jane Smith',
          date: 'Monday, 12 june',
          time: '11:00 AM'
        },
        {
          id: 3,
          image: 'https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'Emily Johnson',
          date: 'Monday, 12 june',
          time: '12:00 PM'
        },
        {
          id: 4,
          image: 'https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'Michael Brown',
          date: 'Monday, 12 june',
          time: '01:00 PM'
        },
        {
          id: 5,
          image: 'https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'Sarah Davis',
          date: 'Monday, 12 june',
          time: '02:00 PM'
        },
        {
          id: 6,
          image: 'ihttps://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg"',
          name: 'David Wilson',
          date: 'Monday, 12 june',
          time: '03:00 PM'
        }
      ];
      
  return (
    <div className='doctors-profile'>
        {/* doctors typo */}
        <div className='doctors-name'>
            <span>Hello</span><br/>
            <span><b>Dr. Imran Syahir</b></span>

        </div>
        {/* doctors typo */}
        
        {/* doctor's banner */}
        <div className='doctors-banner'>
            <div className='doctors-img'>
                <img src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg" alt="doctor's image" height="60px" width="60px"/>

            </div>
            <div className='doctors-details'>
                <b>
                    Dr. Imran Syahir
                </b><br/>
                <span>
                    General physician
                </span><br/>
                <span>
                    Regd No: 123ABC
                </span>

            </div>

        </div>
        {/* doctor's banner */}


        {/* doctors button */}
        <div className='doctors-btngroup'>
            <button>Upcoming Schedule</button>
            <button>Completed Schedule</button>

        </div>

        {/* doctors button */}

        {/* user list  */}
        <div>
            {
                items.map((v, i)=>{
                    return(
                        <>
                         <div className='singleuser' key={v.id}>

                           {/* first     */}
                            <div className='singlediv1'>
                              <div className='singleimage'>
                                <img src={v.image} alt={v.alt} height="50px" width="50px"/>

                              </div>
                              <div className='singlecontent'>
                                <span>{v.name}</span><br/>
                                <span>Claim ID - {v.id}</span>

                              </div>
                            </div>

                            {/* second */}
                            <div className='week' >
                            <CiCalendarDate />{v.date}
                            </div>

                            {/* third */}
                            <div className='time' >
                            <CiCalendarDate />{v.time}
                            </div>
                            <div className="singlebtn">
                                <button>See details</button>
                            </div>



                         </div>

                        </>
                    )
                })
            }
        </div>


        {/* user list  */}

    </div>
  )
}

export default DoctorsProfile;