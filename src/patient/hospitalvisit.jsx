import React from 'react';
import { useEffect, useState } from "react";
import HttpClient, { IMAGE_URL } from "../utils/HttpClient";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import CustomLoader from "../../CustomComponents/loader/CustomLoader";
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "15px",
    fontWeight: "bold"
}
const HospitalVisit = () => {
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate()
    return (
        <div>
            <div className="d-flex justify-content-end">
                {/* <CustomLoader loading={isLoading} /> */}
                <div className="form-header">
                    {/* input fields */}
                    <section className="piechartsBox_area">
                        <div
                            style={headLineStyle}
                            className="page-headline"
                        >
                            HOSPITAL VISIT
                        </div>
                        <form class="row g-3 m-2">

                            {/* Date */}
                            {/* <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Today's Date :
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=''
                                        // onChange={handleChange}
                                        // value={data.Date}
                                        name="Date"
                                    />
                                </div>

                            </div> */}
                            {/* Did you go to the hospital after injury */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Did you go to the Hospital after injury :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />YES

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />NO

                                        </label>
                                    </div>

                                </div>

                            </div>
                            {/* when? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    when? :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Immediately

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />After

                                        </label>
                                    </div>
                                    <div class="form-check">

                                        <input type="text"
                                            // className="form-control  "
                                            name="posttype"
                                        />
                                        <label className={`form-label ${isEdit ? 'edit-tag' : ''}`} > <span> days</span>
                                        </label >

                                    </div>

                                </div>

                            </div>
                            {/*how*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    How?:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Ambulance

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />With Someone

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />By Myself

                                        </label>
                                    </div>

                                </div>

                            </div>
                            {/*were you admitted*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Were you Admitted:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Yes

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />No

                                        </label>
                                    </div>

                                </div>

                            </div>
                            {/* when were you discharcged */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    When were you Discharged:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Same day

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />After

                                        </label>
                                    </div>
                                    <div class="form-check">

                                        <input type="text"
                                            // className="form-control  "
                                            name="posttype"
                                        />
                                        <label className={`form-label ${isEdit ? 'edit-tag' : ''}`} > <span> days</span>
                                        </label >

                                    </div>

                                </div>

                            </div>
                            {/* describe the test performed */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Describe the test performed:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />X-Ray

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />CT-Scan

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />MRI

                                        </label>
                                    </div>

                                </div>

                            </div>
                            {/* which body part ? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>which body part ?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Neck</option>
                                        <option value="">Head</option>
                                        <option value="">Mid back</option>
                                        <option value="">Lower back</option>
                                        <option value="">Right Shoulder</option>
                                    </select>
                                </div>

                                {/* other */}
                                <div >
                                    <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                        Other:
                                    </label>
                                    {/* <span style={{ color: "red" }}>*</span> */}

                                    <input
                                        type="text"
                                        className="form-control   "
                                        placeholder=""
                                        name="others"
                                    />

                                </div>

                            </div>
                            {/* which treatment didi you get ? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>which treatment didi you get at the Hospital ?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>cane</option>
                                        <option value="">crutches</option>
                                        <option value="">sling</option>
                                        <option value="">neck collar</option>
                                        <option value="">Right Shoulder</option>
                                    </select>
                                </div>

                                {/* other */}
                                <div >
                                    <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                        Other:
                                    </label>
                                    {/* <span style={{ color: "red" }}>*</span> */}

                                    <input
                                        type="text"
                                        className="form-control   "
                                        placeholder=""
                                        name="others"
                                    />

                                </div>

                            </div>
                            {/*Are you still using it  */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Are you still using it :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />YES

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />NO

                                        </label>
                                    </div>

                                </div>

                            </div>


                        </form>
                        {/* Button */}
                        <div class="col-12 d-flex justify-content-end " style={{gap:"10px"}}>
                          <button 
                              onClick={()=>navigate("/accident-details")}
                              class="btn btn-primaryb mt-3"
                              style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}>
                                Previous
                            </button>
                            <button 
                              onClick={()=>navigate("/initial-care")}
                              class="btn btn-primaryb mt-3"
                              style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}>
                                Next
                          </button>
                            {/* {
                                !isEdit
                                    ?
                                    <button
                                        type="submit"
                                        // onClick={(e) => handleSubmit(e)}
                                        class="btn btn-primaryb mt-3"
                                        style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    >
                                        Submit
                                    </button>
                                    :
                                    <div className="d-flex ">
                                        <button
                                            type="submit"
                                            // onClick={(e) => handleEditSubmit(e)}
                                            className="btn  mt-3 btn-grad"
                                        //style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                        >
                                            Update Information
                                        </button>
                                        <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
                                    </div>
                            } */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default HospitalVisit