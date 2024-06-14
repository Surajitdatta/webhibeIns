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
const gapping = {
    gap:'20px'
}
const PastMedical = () => {
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate()
    const handleNavigate=()=>{
        navigate('/subsequent-injury')
    }
    const handleNavigatePrev=()=>{
        navigate("/occupational-history")
    }

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
                            Past medical history
                        </div>
                        <form class="row g-3 m-2">
                            {/*Do you have any illness?*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Do you have any illness?:
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
                            {/*  other*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    other :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Did you undergo any surgery unrelated to this accident? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Did you undergo any surgery unrelated to this accident?:
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
                            {/* DEscribe*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Describe :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/* Any other injury? */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Any other injury?:
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
                            {/* If Yes*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    If Yes:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Worker’s comp

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Motor vehicle

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />other

                                        </label>
                                    </div>


                                </div>

                            </div>
                            {/* when*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    When? :
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "

                                    name="firsttname"
                                />

                            </div>
                            {/*  where body parts were injured*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Where body parts Were Injured? :
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
                        <div class="col-12 d-flex justify-content-end " style={gapping}>
                            {/* {
                                !isEdit
                                    ? */}
                                    <button
                                        type="submit"
                                        // onClick={(e) => handleSubmit(e)}
                                        // onClick={handleNavigate}
                                        onClick={()=>navigate("/occupational-history")}
                                        
                                        class="btn btn-primaryb mt-3"
                                        style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    >
                                        Previous
                                    </button> 
                                    <button
                                        type="submit"
                                        // onClick={(e) => handleSubmit(e)}
                                        onClick={()=>navigate("/subsequent-injury")}
                                        class="btn btn-primaryb mt-3"
                                        style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    >
                                        Next
                                    </button> 
                                    
                                    
                                    {/* // :
                                    // <div className="d-flex ">
                                    //     <button */}
                                    {/* //         type="submit"
                                    //         // onClick={(e) => handleEditSubmit(e)}
                                    //         className="btn  mt-3 btn-grad"
                                    //     //style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    //     >
                                    //         Update Information */}
                                    {/* //     </button>
                                    //     <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
                                    // </div> */}
                            {/* } */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default PastMedical