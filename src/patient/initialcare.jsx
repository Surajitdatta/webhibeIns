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
const InitialCare = () => {
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
                            INITIAL CARE
                        </div>
                        <form class="row g-3 m-2">
                            {/*  when didi yopu first go to doctor */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    When did you first go to the doctor? (After the hospital  visit) :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/*to whom? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>To whom?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Name of the  Doctor</option>
                                        {/* <option value="">Drove myself</option>
                                        <option value="">Someone Drove</option>
                                        <option value="">Bus</option>
                                        <option value="">Train/Taxi</option> */}
                                    </select>
                                </div>
                            </div>
                            {/*What was the treatment started?? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Any What was the treatment started?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Name of the  Doctor</option>
                                        {/* <option value="">Drove myself</option>
                                        <option value="">Someone Drove</option>
                                        <option value="">Bus</option>
                                        <option value="">Train/Taxi</option> */}
                                    </select>
                                </div>
                            </div>
                            {/*Any other speciality/doctor have you seen since the accident? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Any other speciality/doctor have you seen since the accident??</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Name of the  Doctor</option>
                                        {/* <option value="">Drove myself</option>
                                        <option value="">Someone Drove</option>
                                        <option value="">Bus</option>
                                        <option value="">Train/Taxi</option> */}
                                    </select>
                                </div>
                            </div>
                            {/* test */}
                            {/* x-ray */}
                            <div className='col-12'>
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    X-Ray:
                                </label>
                                <div className='row'>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                head:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                shoulder:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Hips:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Neck:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Elbow:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                knee:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Lower Back:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Wrist/hand:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label  ${isEdit ? 'edit-tag' : ''}`}   >
                                                Ankle/foot:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
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
                            <hr style={{ color: "red", height: '2px' }} />
                            {/* ct-scan */}
                            <div className='col-12'>
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    MRI:
                                </label>
                                <div className='row'>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                head:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                shoulder:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Hips:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Neck:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Elbow:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                knee:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Lower Back:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Wrist/hand:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label  ${isEdit ? 'edit-tag' : ''}`}   >
                                                Ankle/foot:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
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
                            <hr />
                            {/* mri */}
                            <div className='col-12'>
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    CT-Scan:
                                </label>
                                <div className='row'>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                head:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                shoulder:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Hips:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Neck:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Elbow:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                knee:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-4'>
                                        {/* 0 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Lower Back:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />Full

                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 1 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                                Wrist/hand:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>
                                        {/* 2 */}
                                        <div>
                                            <label for="inputEmail4" className={`form-label  ${isEdit ? 'edit-tag' : ''}`}   >
                                                Ankle/foot:
                                            </label>
                                            <span style={{ color: "red" }}>*</span>
                                            <div className=' d-flex '>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />R

                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label">
                                                        <input type="radio"
                                                            class="form-check-input"
                                                            name="posttype"
                                                        />L

                                                    </label>
                                                </div>


                                            </div>
                                        </div>

                                    </div>
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


                            {/*  EMG/MCV*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    EMG/MCV:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Upper Limbs

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Lower Limbs

                                        </label>
                                    </div>


                                </div>

                            </div>
                            {/* have you recieved any injection */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Have you recieved any Injections:
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
                            {/* what type of injection? */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>what type of injection ?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Trigger-point</option>
                                        <option value="">Epidural</option>
                                        <option value="">face joint MBB</option>
                                        <option value="">joint injection</option>
                                        <option value="">Gel shots</option>
                                    </select>
                                </div>

                                {/* which body part */}
                                <div >
                                    <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                        which body part:
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
                            {/* have you recievec any surgery ? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Have you recieved any surgery?:
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

                                {/* other */}
                                <div >
                                    <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                        which body part?:
                                    </label>
                                    {/* <span style={{ color: "red" }}>*</span> */}

                                    <input
                                        type="text"
                                        className="form-control   "
                                        placeholder=""
                                        name="others"
                                    />

                                </div>
                                {/* Date */}
                                <div >
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

                                </div>

                            </div>
                            {/*has injection surgery helped you  */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    has injection surgery helped you?:
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
                              onClick={()=>navigate("/hospital-visit")}
                              class="btn btn-primaryb mt-3"
                              style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}>
                                Previous
                            </button>
                            <button 
                              onClick={()=>navigate("/current-care")}
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
                            } */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default InitialCare