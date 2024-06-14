
import React from 'react';
import "./doctorcss/doctorsprofile.css";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
const Doctorcompletedschedule = () => {
    const items = [
        {
            id: 1,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM',
            alt: 'image'
        },
        {
            id: 2,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 3,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 4,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 5,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 6,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Das',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        }
    ];
    const comp = {
        background:'hsla(120, 100%, 25%, 1)',
        color:"white",

    }

    return (
        <div className='doctors-profile'>
            {/* doctors typo */}
            <div className='doctors-name'>
                <span>Hello</span><br />
                <span><b>Dr. Imran Syahir</b></span>
            </div>
            {/* doctors typo */}

            {/* doctor's banner */}
            <div className='doctors-banner'>
                <div className='doctors-img'>
                    <img src="https://i.pinimg.com/originals/d3/7b/02/d37b020e87945ad7f245e48df752ed03.jpg" alt="doctor's image" height="60px" width="60px" />
                </div>
                <div className='doctors-details'>
                    <b>Dr. Imran Syahir</b><br />
                    <span>General physician</span><br />
                    <span>Regd No: 123ABC</span>
                </div>
            </div>
            {/* doctor's banner */}

            {/* doctors button */}
            <div className='doctors-btngroup'>
                <button style={{background:"hsla(0, 0%, 100%, 1)", color:"black"}}>Upcoming Schedule</button>
                <button style={{background:"hsla(239, 83%, 66%, 1)", color:"white"}}>Completed Schedule</button>
            </div>
            {/* doctors button */}

            {/* user list  */}
            <div>
                {items.map((v, i) => {
                    return (
                        <div className='singleuser' key={v.id}>
                            {/* first */}
                            <div className='singlediv1'>
                                <div className='singleimage'>
                                    <img src={v.image} height="30px" width="30px" />
                                </div>
                                <div className='singlecontent'>
                                    <b><span>{v.name}</span></b><br/>
                                    <span className="small">Claim ID - {v.id}</span>
                                </div>
                            </div>

                            {/* second */}
                            <div className='week' >
                                <CiCalendarDate /> &ensp;{v.date}
                            </div>

                            {/* third */}
                            <div className='time'>
                                <IoTimeOutline /> &ensp;{v.time}
                            </div>
                            <div className="singlebtn">
                                <button style={comp}>Completed</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* user list */}
        </div>
    );
}

export default Doctorcompletedschedule;
