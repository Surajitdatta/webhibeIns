
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


const Initiativetype = () => {
    const [AllData, setAllData] = useState([]);

    const [data, setdata] = useState({
        InitiativeType: "",
        InitiativeFor: "",
    });

    console.log("dataddd", data)

    const [eventData, setEventData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [err, setNewError] = useState();

    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState("")
    const [Delete, SetDelete] = useState("")

    // const data1 = [
    //     {
    //         id: 2,
    //         sl: 1,
    //         InitiativeType: "Organisation_Specific_Initiative",
    //         InitiativeFor: "Manager"
    //     },
    //     {
    //         id: 2,
    //         sl: 1,
    //         InitiativeType: "Project_Specific_Initiative",
    //         InitiativeFor: "Admin"
    //     },
    // ];


    const columns = [
        {
            name: "SL",
            selector: (row) => row.sl,
            // width: "3.4rem"
        },
        {
            name: "InitiativeType",
            selector: (row) => row.InitiativeType,
            // width: "35.7rem"
        },
        {
            name: "InitiativeFor",
            selector: (row) => row.InitiativeFor,
            // width: "20rem"
        },
        {
            name: "Action",
            selector: (row) => row.action,
            // width: "20rem"
        },
        // {
        //     name: "Delet",
        //     selector: (row) => row.action1,
        //     // width: "20rem"
        // },



    ];

    //Form Event to Get Initiative  Data
    const handleChange = (e) => {
        e.target.value;
        setdata({ ...data, [e.target.name]: e.target.value });
    };


    // Validation
    const validate = () => {
        if (!data?.InitiativeType) {
            toast.error("initiativeType is required");
            return true
        }
        if (!data?.InitiativeFor) {
            toast.error(" InitiativeFor is required");
            return true
        }
    }

    // handle submit
    const handleSubmit = async () => {

        if (validate()) {
            return
        }

        const SubmitData =
        {
            "initiativetype": data?.InitiativeType,
            "initiativeFor": data?.InitiativeFor
        }


        const res = await HttpClient.requestData("add-initiative-type", "POST", SubmitData);
        if (res && res?.status) {
            toast.success("Inititive Added Successfully");
            getEventData()
            setdata({
                InitiativeType: "",
                InitiativeFor: ""
            })

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
            InitiativeType: item?.initiativetype,
            InitiativeFor: item.initiativeFor,
        })
    }


    //Delete Click
    const handleDelete = (id) => {
        const del = async () => {
            const res = await HttpClient.requestData("delete-initiative-type/" + id, "DELETE");
            if (res && res?.status) {
                toast.success("Inititive Deleted Successfully");
                getEventData()
            } else {
                toast.error(res.message || "Something Wrong");
            }
        }

        DeleteConfirmModal(del);
    }

    // edit submit
    const editInitiativeSubmit = async () => {
        if (validate()) {
            return
        }

        const SubmitData = {
            initiativetype: data?.InitiativeType,
            initiativeFor: data?.InitiativeFor,
        };

        const res = await HttpClient.requestData("update-initiative-type/" + editId, "PUT", SubmitData);
        if (res && res?.status) {
            toast.success("Inititive Updated Successfully");
            getEventData()
            setdata({
                InitiativeType: "",
                InitiativeFor: ""
            })
            setIsEdit(false)
        } else {
            toast.error(res.message || "Something Wrong");
        }
    }

    // fetch Initiative  data
    const getEventData = async () => {


        const res = await HttpClient.requestData("view-initiative-type", "GET", {});
        // console.log("resdaainn", res?.data);
        if (res && res?.status) {
            setEventData(res?.data);
            const arr = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                InitiativeType: item?.initiativetype,
                InitiativeFor: item?.initiativeFor,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
            // console.log("arrInitiativeData", arr);
            setTableData(arr);
        }
    };


    useEffect(() => {
        getEventData();
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-end">
                {/* <CustomLoader loading={isLoading} /> */}
                <div className="form-header">

                    {/* input fields */}

                    <section className="piechartsBox_area">
                        <div style={headLineStyle} className="page-headline">
                            {isEdit ? "Edit Initiative & Initiative For" : "Add Initiative"}
                        </div>

                        <form class="row g-3 m-2">




                            {/* Initiative For*/}
                            <div class="col-md-6">
                                <label for="inputEmail4">Select Initiative For</label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        className="form-control" id="exampleFormControlSelect1"
                                        onChange={handleChange}
                                        value={data.InitiativeFor}
                                        name="InitiativeFor"
                                    >
                                        <option>Select</option>
                                        <option value={"Manager"}> Manager </option>
                                        <option value={"Admin"}>Admin</option>
                                    </select>
                                </div>
                            </div>


                            {/* Initiative Type */}
                            <div class="col-md-6">

                                <label for="inputEmail4" className="form-label edit-tag">
                                    Select Initiative Type
                                </label>

                                <span style={{ color: "red" }}>*</span>

                                <input type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={data?.InitiativeType}
                                    name="InitiativeType"
                                />

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



                    {/* datatable */}
                    <section>
                        <div style={headLineStyle} className="page-headline">
                            Viwe Initiative
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


export default Initiativetype;



//  Simran Agarwal Webhibe: Project_Specific_Initiative
//  Simran Agarwal Webhibe: inititivrFor:Manager
