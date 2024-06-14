
import React from 'react';
import "./doctorcss/doctorsprofile.css";
import { CiCalendarDate } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
const Userlist = () => {
    const items = [
        {
            id: 1,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM',
            alt: 'image'
        },
        {
            id: 2,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 3,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 4,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 5,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 6,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 7,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 8,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 9,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        },
        {
            id: 10,
            image: 'https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_1280.png',
            name: 'Abhi Datta',
            date: 'Monday, 12 june',
            time: '10:00 - 11:00 AM'
        }
    ];

    const seeDetails = {
        background:"hsla(234, 100%, 53%, 1)",
        color:"white"
    }
   

    return (
        <div className='doctors-profile'>
            
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
                            <div className='week'>
                                <CiCalendarDate />{v.date}
                            </div>

                            {/* third */}
                            <div className='time'>
                                <IoTimeOutline />{v.time}
                            </div>
                            <div className="singlebtn">
                                <button style={seeDetails}>See details</button>
                            </div>
                        </div>
                    );
                })}
            </div>
            {/* user list */}
        </div>
    );
}

export default Userlist;
