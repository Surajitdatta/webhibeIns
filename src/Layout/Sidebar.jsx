import React from "react";
// import { toast } from "react-hot-toast";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import logo from "../../src/Images/logo.png";
import { RiUserSearchFill } from "react-icons/ri";
import Subsequentinjury from "../patient/subsequentinjury";

function Sidebar() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (document.querySelector("#DarkSwitch").checked) {
      document.body.classList.add("drakmode");
    } else {
      document.body.classList.remove("drakmode");
    }
  };

  const handlClick = () => {
    if (document.querySelector("#backbtnsidebar").click) {
      document.querySelector(".sidebarwrap").classList.remove("show");
    } else {
      document.querySelector(".sidebarwrap").classList.remove("show");
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
    // window.location.reload();
    // toast.success("Logout SuccessFull");
  };

  return (
    <>
      <section className="sidebarwrap">
        <div className="top_area">
          <button id="backbtnsidebar" onClick={handlClick}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>

          <div className="logo_area">
            <div className="logo">
              {/* <img src={logo} className="img-fluid" alt="logo" /> */}
              <h1 style={{ color: "#fff" }}>Logo</h1>
            </div>
          </div>
        </div>

        <div className="sidebar_menu">
          <ul className="nav Menu_Nav accordion" id="sidemenu">
            {/***DASHBOARD 1***/}
            <li className="menuline">
              <Link to="/" className="icon" onClick={handlClick}>
                <i class="fa-solid fa-house icon-1"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            {/* start departments 10 */}
            <li className="menuline">
              <div className="menu-head" id="sidemenuhead10">
                <Link
                  to="#"
                  className="btn btn-header-link icon"
                  data-toggle="collapse"
                  data-target="#sidemenu10"
                  aria-expanded="true"
                  aria-controls="sidemenu10"
                >
                  <i className="fa-solid fa-building-user icon-1"></i>
                  <span>Patients</span>
                </Link>
              </div>

              <div
                id="sidemenu10"
                className="collapse"
                aria-labelledby="sidemenuhead10"
                data-parent="#sidemenu"
              >
                <ul className="Submenu">
                  {/* <li>
                    <Link to="/add-Department" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Add Departments
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/personal-details" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      fill details
                    </Link>
                  </li>
                  {/* accidentdetails */}
                  <li>
                    <Link to="/accident-details" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      fill Accident details
                    </Link>
                  </li>
                  {/* hospitalvisit */}
                  <li>
                    <Link to="/hospital-visit" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      hospital visit
                    </Link>
                  </li>
                  {/* initialcare */}
                  <li>
                    <Link to="/initial-care" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      initial care
                    </Link>
                  </li>
                  {/* current care */}
                  <li>
                    <Link to="/current-care" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      current care
                    </Link>
                  </li>
                  {/* PainScale */}
                  <li>
                    <Link to="/pain-scale" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Pain-scale
                    </Link>
                  </li>
                  {/* occupational history */}
                  <li>
                    <Link to="/occupational-history" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      occupational history
                    </Link>
                  </li>
                  {/* PastMedical */}
                  <li>
                    <Link to="/pastmedical-history" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Past medical history
                    </Link>
                  </li>
                   {/* {Subsequentinjury} */}
                  <li>
                    <Link to="/subsequent-injury" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Subsequent injury
                    </Link>
                  </li>
                  {/* Activitiesdaily */}
                  <li>
                    <Link to="/activities-daily" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Activies of daily living
                    </Link>
                  </li>
                  {/* patient form submitted */}
                  
                </ul>
              </div>
            </li>
            {/* end derpartments */}




            {/* {doctors department} */}
            <li className="menuline">
              <div className="menu-head" id="sidemenuhead10">
                <Link
                  to="#"
                  className="btn btn-header-link icon"
                  data-toggle="collapse"
                  data-target="#sidemenu11"
                  aria-expanded="true"
                  aria-controls="sidemenu11"
                >
                  <i className="fa-solid fa-building-user icon-1"></i>
                  <span>Doctors</span>
                </Link>
              </div>

              <div
                id="sidemenu11"
                className="collapse"
                aria-labelledby="sidemenuhead10"
                data-parent="#sidemenu"
              >
                <ul className="Submenu">
                  {/* <li>
                    <Link to="/add-Department" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Add Departments
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/doctors-profile" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Doctor's profile
                    </Link>
                  </li>
                  {/* accidentdetails */}

                  {/* completed-schedule */}
                  <li>
                    <Link to="/completed-schedule" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Completed schedule
                    </Link>
                  </li>

                  {/* completed-schedule */}

                  {/* Userlist */}
                  <li>
                    <Link to="/user-list" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      User list
                    </Link>
                  </li>


                  {/* Userlist */}
                  {/* room sheet */}
                  <li>
                    <Link to="/room-sheet" onClick={handlClick}>
                      <i className="fa-solid fa-angles-right mr-2"></i>
                      Room sheet
                    </Link>
                  </li>
                  {/* room sheet */}
                  
                  
                </ul>
              </div>
            </li>
            {/* { end doctors department} */}

          </ul>

          {/* doctors */}
          















        </div>
      </section>



      {/* patient */}
      
    </>
  );
}

export default Sidebar;
