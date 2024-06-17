import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import "../src/Component/Modal/Modal.css";
import Home from "../src/View/Home/Index";
import Login from "./Athentication/Login";

import MainLayout from "./Layout/MainLayout";
import PrivateRouter from "./privateRouter/PrivateRouter";

import { Toaster } from "react-hot-toast";
import AddEvent from "./NewPages/events/AddEvent";

import Initiativetype from "./NewPages/initiative/Initiativetype";
import Initiativet from "./NewPages/initiative/Initiativet";
import TrainingCreatePhysical from "./NewPages/Training/Training"
import AddHallofFame from "./NewPages/halloffame/addHallOfFame";
import AddUser from "./NewPages/user/addUser";

import Addrewards from "./NewPages/Rewards/addrewards";
import Addrewardcard from "./NewPages/Rewards/addrewardcard";
import ManageDocumentCategory from "./NewPages/documents/documentCategory";
import Getdocuments from "./NewPages/documents/getdocuments";
import Addeventtype from "./NewPages/events/Addeventtype";
import Department from "./NewPages/Department/department";
import Profile from "./NewPages/profile/profile";
import Initiativetypes from "./NewPages/initiative/Initiativet";
import Personalinformation from "./patient/personalInformation/personalinformation";
import Accidentdetails from "./patient/accidentdetails";
import HospitalVisit from "./patient/hospitalvisit";
import InitialCare from "./patient/initialcare";
import CurrentCare from "./patient/currentcare";
import PainScale from "./patient/painscale";
import OccupationalHistory from "./patient/occupationalhistory";
import PastMedical from "./patient/pastmedical";
import Subsequentinjury from "./patient/subsequentinjury";
import Activitiesdaily from "./patient/activitiesdaily";
import Patientsubmit from "./patient/patientsubmit";
import DoctorsProfile from "./doctors/doctorsProfile";
import Doctorcompletedschedule from "./doctors/doctorcompletedschedule";
import Userlist from "./doctors/userslist";
import Roomsheet from "./doctors/roomsheet";
import Romsheet from "./doctors/Romsheet";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />



              {/* Hall of Fame routes */}
              <Route path="/add-hall_of_fame" element={<AddHallofFame />} />
              {/* Users route */}
              <Route path="/add-user" element={<AddUser />} />
              {/* Department routes */}
              <Route path="/add-Department" element={<Department />} />
              {/* personalinformation */}
              <Route path="/personal-details" element={<Personalinformation />} />
              {/* accident details */}
              <Route path="/accident-details" element={<Accidentdetails />} />
              {/* hospitalvisit */}
              <Route path="/hospital-visit" element={<HospitalVisit />} />
              {/* initialcare */}
              <Route path="/initial-care" element={<InitialCare />} />
              {/* currentcare */}
              <Route path="/current-care" element={<CurrentCare />} />
              {/* painscale */}
              <Route path="/pain-scale" element={<PainScale />} />
              {/* occupationalhistory */}
              <Route path="/occupational-history" element={<OccupationalHistory />} />
              {/* pastmedhistory */}
              <Route path="/pastmedical-history" element={<PastMedical />} />
              {/* subsequentinjury */}
              <Route path="/subsequent-injury" element={<Subsequentinjury />} />
              {/* activities of daily living */}
              <Route path="/activities-daily" element={<Activitiesdaily />} />
              {/* patient form submitted */}
              <Route path="/form-submitted" element={<Patientsubmit />} />



              {/* {doctorsProfile} */}
              {/* <Route path="/user-profile" element={< UserProfile/>} /> */}
              <Route path="/doctors-profile" element={<DoctorsProfile />} />
              {/* completed schredule */}
              <Route path="/completed-schedule" element={<Doctorcompletedschedule />} />
              {/* userlist  */}
              <Route path="/user-list" element={<Userlist />} />
              {/* roomsheet */}
              <Route path="/room-sheet" element={<Roomsheet />} />
              {/* rom-sheet */}/
              <Route path="/rom-sheet" element={<Romsheet />} />

              
            </Route>


          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter >
    </>
  );
};

export default App;
