
// Add Initiative
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import CustomLoader from "../../CustomComponents/loader/CustomLoader";
import toast from "react-hot-toast";
import DataTable from "react-data-table-component";
import PieChartsBox from "../../View/Home/PieChartsBox";

import EditDeleteIcon from "../../CustomComponents/EditDeleteIcon";
import { DeleteConfirmModal } from "../../CustomComponents/DeleteConfirmModal";
import HttpClient, { IMAGE_URL } from "../../utils/HttpClient";
import { computeHeadingLevel } from "@testing-library/react";
import moment from "moment";

const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "35px",
    fontWeight: "bold",
};

const customStyles = {
    headCells: {
        style: {
            // paddingLeft: '8px', // override the cell padding for head cells
            // paddingRight: '8px',
            backgroundColor: "#cee0eb", // set the background color for head cells
        },
    },
};


const Initiativetypes = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [AllData, setAllData] = useState([]);

    const [data, setdata] = useState({
        nameOfInitaitive: "",
        description: "",
        duration: "",
        rewardPoints: "",
        startDate: "",
        endDate: "",
        initiativeTypeID: ""
    });

    console.log("dataddd", data)

    const [eventData, setEventData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [err, setNewError] = useState();

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState("")
    const [Delete, SetDelete] = useState("")
    const [typeId, setTypeId] = useState([]);



    const columns = [
        {
            name: "SL",
            selector: (row) => row.sl,
            // width: "3.4rem"
        },
        {
            name: "nameOfInitaitive",
            selector: (row) => row.nameOfInitaitive,

        },
        {
            name: "description",
            selector: (row) => row.description,

        },
        // {
        //     name: "duration",
        //     selector: (row) => row.duration,
        //     // width: "20rem"
        // },

        {
            name: "rewardPoints",
            selector: (row) => row.rewardPoints,

        },
        {
            name: "startDate",
            selector: (row) => row.startDate,

        },
        {
            name: "endDate",
            selector: (row) => row.endDate,

        },


        // {
        //     name: "initiativeTypeID",
        //     selector: (row) => row.initiativeTypeID,
        //     // width: "20rem"
        // },
        {
            name: "Action",
            selector: (row) => row.action,

        },



    ];

    //Form Event to Get Initiative  Data
    const handleChange = (e) => {
        e.target.value;
        setdata({ ...data, [e.target.name]: e.target.value });
    };


    // Validation
    const validate = () => {
        const startDate = new Date(data.startDate);
        const endDate = new Date(data.endDate);

        if (!data?.initiativeTypeID) {
            toast.error("initiativeTypeID  is required");
            return true
        }
        if (!data?.nameOfInitaitive) {
            toast.error("name of initiative is required");
            return true
        }
        if (!data?.description) {
            toast.error("description required");
            return true
        }
        // if (!data?.duration) {
        //     toast.error("duration required");
        //     return true
        // }
        if (!data?.rewardPoints) {
            toast.error("Reward point required");
            return true
        }

        if (!data?.startDate) {
            toast.error("Start date required");
            return true
        }
        if (!data?.endDate) {
            toast.error("End date required");
            return true
        }
        if (startDate > endDate) {
            toast.error("End date cannot be before the start date");
            return true;
        }


        return false
    }

    // handle submit
    const handleSubmit = async () => {

        if (validate()) {
            return
        }

        const SubmitData =
        {
            "nameOfInitaitive": data?.nameOfInitaitive,
            "description": data?.description,
            "duration": data?.duration,
            "rewardPoints": data?.rewardPoints,
            "startDate": data?.startDate,
            "endDate": data?.endDate,
            "initiativeTypeID": data?.initiativeTypeID,
        }

        const res = await HttpClient.requestData("add-initiative/", "POST", SubmitData);
        if (res && res?.status) {
            toast.success("Inititive Added Successfully");
            getEventData()
        } else {
            toast.error(res.message || "Something Wrong");
        }
    };

    // edit click
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        setEditId(item?._id)
        setIsEdit(true)
        setdata({
            nameOfInitaitive: item?.nameOfInitaitive,
            description: item.description,
            duration: item?.duration,
            rewardPoints: item.rewardPoints,
            startDate: item?.startDate,
            endDate: item.endDate,
            initiativeTypeID: item?.initiativeTypeID,

        })
    }


    //Delete Click
    const handleDelete = (id) => {
        const del = async () => {
            const res = await HttpClient.requestData("delete-initiative/" + id, "DELETE");
            if (res && res?.status) {
                toast.success("Inititive Deleted Successfully");
                getEventData()
            }

            // else {
            //     toast.error(res.message || "Something Wrong");
            // }
        }

        DeleteConfirmModal(del);
    }

    // edit submit
    const editInitiativeSubmit = async () => {
        if (validate()) {
            return
        }

        const SubmitData = {
            nameOfInitaitive: data?.nameOfInitaitive,
            description: data?.description,
            duration: data?.duration,
            rewardPoints: data?.rewardPoints,
            startDate: data?.startDate,
            endDate: data?.endDate,
            initiativeTypeID: data?.initiativeTypeID,


        };

        const res = await HttpClient.requestData("update-initiative/" + editId, "PUT", SubmitData);
        if (res && res?.status) {
            toast.success("Inititive Updated Successfully");
            getEventData()
            setdata({
                nameOfInitaitive: "",
                description: "",
                duration: "",
                rewardPoints: "",
                startDate: "",
                endDate: "",
                initiativeTypeID: ""
            });
            setIsEdit(false)

        }

        else {
            toast.error(res.message || "Something Wrong");
        }
    }

    // fetch Initiative  data
    const getEventData = async () => {
        const res = await HttpClient.requestData("view-initiative", "GET", {});
        console.log("resdaainn", res?.data);
        if (res && res?.status) {
            setIsLoading(false)
            setEventData(res?.data);
            const arr = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                // InitiativeType: item?.initiativetype,
                // InitiativeFor: item?.initiativeFor,
                nameOfInitaitive: item?.nameOfInitaitive,
                description: item?.description,
                // duration: item?.duration,
                rewardPoints: item?.rewardPoints,
                startDate: item?.startDate,
                endDate: item?.endDate,
                initiativeTypeID: item?.initiativeTypeID,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
            console.log("arrInitiativeData", arr);
            setTableData(arr);
        }
    };

    // get initiative type
    const getTypeId = async () => {
        const res = await HttpClient.requestData("view-initiative-type", "GET", {});
        if (res && res?.data) {
            setTypeId(res?.data)
        }
    }

    useEffect(() => {
        getEventData();
        getTypeId();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-end">
                <CustomLoader loading={isLoading} />
                <div className="form-header">
                    {/* input fields */}
                    {
                        isEdit
                        &&
                        <section className="piechartsBox_area">
                            <div style={headLineStyle} className="page-headline">
                                {isEdit ? "Edit Initiative" : "Add Initiative"}
                            </div>
                            <form class="row g-3 m-2">
                                {/* {initiativeTypeID} */}
                                <div class="col-md-6">
                                    <label for="inputEmail4" className="form-label  edit-tag">
                                        Select ID
                                    </label>

                                    <span style={{ color: "red" }}>*</span>

                                    <select onChange={handleChange}
                                        value={data?.initiativeTypeID}
                                        className="form-control"
                                        name="initiativeTypeID">

                                        {/* <option>Select ID</option> */}

                                        {typeId?.map((item, i) =>
                                            <option key={i} value={item?._id}>
                                                {item?.initiativetype}
                                            </option>
                                        )
                                        }
                                    </select>

                                </div>
                                {/* {NameOfInitative} */}
                                <div class="col-md-6">
                                    <label for="Name of initative" className="form-label edit-tag">
                                        Name Of Initaitive
                                    </label>

                                    <span style={{ color: "red" }}>*</span>

                                    <input type="text"
                                        className="form-control"
                                        name="nameOfInitaitive"
                                        onChange={handleChange}
                                        value={data.nameOfInitaitive}>
                                    </input>
                                </div>

                                {/* Description*/}
                                <div class="col-md-12">
                                    <label for="description">Description</label>


                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        <textarea name="description"
                                            className="form-control"

                                            placeholder="description"
                                            onChange={handleChange}
                                            value={data.description}>

                                        </textarea>
                                    </div>

                                </div>
                                {/*duration*/}
                                {/* <div class="col-md-6">
                                    <label for="number">Duration</label>
                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        <input
                                            type="number"
                                            onChange={handleChange}
                                            name="duration"
                                            value={data.duration}
                                            className="form-control"
                                        />
                                    </div>
                                </div> */}

                                {/*rewardPoints*/}
                                <div class="col-md-6">
                                    <label for="number">RewardPoints</label>

                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        <input
                                            type="number"
                                            onChange={handleChange}
                                            name="rewardPoints"
                                            value={data.rewardPoints}
                                            className="form-control"
                                        />
                                    </div>

                                </div>


                                {/* Start date */}
                                <div class="col-md-6">
                                    <label for="Startdate">Start Date</label>


                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        <input
                                            type="date"
                                            onChange={handleChange}
                                            name="startDate"
                                            value={data.startDate}
                                            className="form-control"
                                        />
                                    </div>

                                </div>


                                {/* End date */}
                                <div class="col-md-6">
                                    <label for="Enddate">End Date</label>
                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        <input
                                            type="date"
                                            onChange={handleChange}
                                            name="endDate"
                                            value={data.endDate}
                                            className="form-control"
                                        />


                                    </div>
                                </div>




                            </form>



                            {/* Button */}

                            <div class="col-12 d-flex justify-content-between  ">
                                <div>
                                    {
                                        isEdit
                                            ?
                                            <button
                                                onClick={editInitiativeSubmit}
                                                class="btn btn-primaryb mt-3"
                                                style={{
                                                    background:
                                                        "linear-gradient(195deg, rgb(150, 86, 44), rgb(25, 25, 25))",
                                                    color: "#fff",
                                                }}
                                            >
                                                Update Initiative
                                            </button>
                                            :
                                            <button
                                                onClick={handleSubmit}
                                                class="btn btn-primaryb mt-3"
                                                style={{
                                                    background:
                                                        "linear-gradient(195deg, rgb(150, 86, 44), rgb(25, 25, 25))",
                                                    color: "#fff",
                                                }}
                                            >
                                                Add Initiative
                                            </button>
                                    }
                                </div>
                            </div>


                        </section>
                    }


                    {/* datatable */}
                    <section>
                        <div style={headLineStyle} className="page-headline">
                            View Initiative
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
                    </section>
                </div>
            </div>
        </div>
    );
};


export default Initiativetypes;
