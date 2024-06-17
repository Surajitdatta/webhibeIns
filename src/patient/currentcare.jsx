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
const CurrentCare = () => {
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
                            CURRENT CARE
                        </div>
                        <form class="row g-3 m-2">
                            {/* Are you receiving any of the below at present ?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Are you receiving any of the below at present ?:
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
                            {/*Physical therapy (Per Week)*/}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Physical therapy (Per Week)</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option >1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            {/*Psychotherapy (Per Week)*/}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Psychotherapy (Per Week)</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option >1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            {/*Acupuncture(Per Week)*/}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Acupuncture (Per Week)</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option >1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            {/*Chiropractic (Per Week)*/}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Chiropractic (Per Week)</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option >1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            {/*Vestibular therapy (Per Week)*/}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Vestibular therapy (Per Week)</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option >1</option>
                                        <option value="">2</option>
                                        <option value="">3</option>
                                        <option value="">4</option>
                                        <option value="">5</option>
                                    </select>
                                </div>
                            </div>
                            {/* Is treatment helping ?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Is treatment helping ?:
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
                            {/*Are you taking any medications Releted to Injury? */}
                            <div class="col-md-6 mt-2">
                                <div className='row'>
                                    <div class="col-md-8 mt-2">
                                        <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                            Are you taking any medications Releted to Injury?:
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
                                    <div class="col-md-4">
                                        {/* If yes, please list*/}
                                        <div >
                                            <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                                If yes, please list :
                                            </label>
                                            <span style={{ color: "red" }}>*</span>

                                            <input
                                                type="text"
                                                className="form-control  "
                                                name="firsttname"
                                            />

                                        </div>
                                    </div>
                                </div>


                            </div>
                            {/*  Did you take any medications today?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Did you take any medications today? :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Are you using any durable medical equipment?
(Cane, crutches, bandages, braces, etc)? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Are you using any durable medical equipment?<br />
                                    (Cane, crutches, bandages, braces, etc)? :
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
                            {/*Were you explained how to use it?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Were you explained how to use it?:
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
                            {/* What is the equipment?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    What is the equipment? :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/*  Where did you receive it?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Where did you receive it?:
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Are you scheduled to undergo any procedures?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Are you scheduled to undergo any procedures? :
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
                        <div class="col-12 d-flex justify-content-end " style={{gap:'10px'}}>
                          <button 
                              onClick={()=>navigate("/initial-care")}
                              class="btn btn-primaryb mt-3"
                              style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}>
                                Previous
                            </button>
                            <button 
                              onClick={()=>navigate("/pain-scale")}
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

export default CurrentCare