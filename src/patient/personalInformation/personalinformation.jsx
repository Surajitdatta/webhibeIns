import React from 'react';
import { useEffect, useState } from "react";
import HttpClient, { IMAGE_URL } from "../../utils/HttpClient";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CustomLoader from "../../CustomComponents/loader/CustomLoader";
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "15px",
    fontWeight: "bold"

}
const Personalinformation = () => {
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
                            PERSONAL INFORMATION
                        </div>
                        <form class="row g-3 m-2">

                            {/*Date*/}
                            <div class="col-md-6 mt-2">
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
                            {/*  Name */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Name :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className='row '>
                                    <input
                                        type="text"
                                        className="form-control col-md-4  "
                                        placeholder="firstName"
                                        name="firsttname"
                                    />
                                    <input
                                        type="text"
                                        className="form-control col-md-4  "
                                        placeholder="lastName"
                                        name="lastname"
                                    />
                                </div>


                            </div>
                            {/* do you need interpreter */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Do you need interpreter? :
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

                            {/* Gender */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Gender:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Male

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                            />Female
                                        </label>
                                    </div>
                                </div>

                            </div>
                            {/*Date*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Date of Birth:
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
                            {/* hand dominance */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Hand Dominance :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="ishighlighted"
                                            />Right handed
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="ishighlighted"
                                            />Left handed
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/*how did you arrive at your today's exam?   */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>How did you arrive at your today's exam?</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"

                                    >
                                        <option disabled>Select Type</option>
                                        <option value="">Drove myself</option>
                                        <option value="">Someone Drove</option>
                                        <option value="">Bus</option>
                                        <option value="">Train/Taxi</option>
                                    </select>
                                </div>
                            </div>
                            {/*  height */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Height:
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "
                                    placeholder="height"
                                    name="firsttname"
                                />

                            </div>
                            {/*  Weight */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Weight:
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control   "
                                    placeholder="Weight"
                                    name="firsttname"
                                />

                            </div>
                            {/*  eyecolr*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Eyecolor:
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control   "
                                    placeholder="Eyecolor"
                                    name="firsttname"
                                />

                            </div>
                            {/*  haircolor */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Hair Color:
                                </label>
                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control  "
                                    placeholder="Haircolor"
                                    name="firsttname"
                                />

                            </div>
                            {/*which doctor you are going to see today?   */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Which Doctor you are going to see today?</label>
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
                                        Next
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


                    {/* datatable */}
                    {/* <section>
                <div
                    style={headLineStyle}
                    className="page-headline"
                >
                    View Events
                </div>

                <div>
                    <DataTable
                        columns={columns}
                        data={tableData}
                        pagination
                        striped
                        className="rounded"
                        customStyles={customStyles}
                    />
                </div>
            </section> */}
                </div>


            </div>

        </div>
    )
}

export default Personalinformation