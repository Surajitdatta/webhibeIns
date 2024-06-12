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
const OccupationalHistory = () => {
    const [isEdit, setIsEdit] = useState(false);
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
                            Occupational History
                        </div>
                        <form class="row g-3 m-2">
                            {/* On the date of the accident were you employed? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    On the date of the accident were you employed?:
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
                            {/*  Occupation*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Occupation :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/*  Job description */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Job description :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Did you lose any time from work? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Did you lose any time from work?:
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
                            {/* If Yes how long? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    If Yes how long? :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Are you working right now?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Are you working right now?:
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
                            {/* Where */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Where:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Same as before injury

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Different Job

                                        </label>
                                    </div>


                                </div>

                            </div>
                            {/*  If Different job Describe*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    If Different job Describe :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/*Why are you not working  (if not)? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Why are you not working  (if not)?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>pain</option>
                                        <option value="">covid-19</option>
                                        <option value="">retired</option>
                                        <option value="">changed job</option>

                                    </select>
                                </div>
                            </div>
                            {/* If Working */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    If Working:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Fulltime

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Restricted

                                        </label>
                                    </div>


                                </div>

                            </div>
                            {/*  What are the restriction if any? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    What are the restriction if any? :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                        </form>
                        {/* Button */}
                        <div class="col-12 d-flex justify-content-end ">
                            {
                                !isEdit
                                    ?
                                    <button
                                        type="submit"
                                        // onClick={(e) => handleSubmit(e)}
                                        class="btn btn-primaryb mt-3"
                                        style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    >
                                        next
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
                            }
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default OccupationalHistory