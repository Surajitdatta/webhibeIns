import React, { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";
import EditDeleteIcon from "../../CustomComponents/EditDeleteIcon";
import HttpClient from "../../utils/HttpClient";
import toast from "react-hot-toast";
const customStyles = {
    rows: {
        style: {
            minHeight: '48px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: '#cee0eb', // set the background color for head cells
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "35px",
    fontWeight: "bold",
};
const AddHallofFame = () => {
    const initvalue = {
        "name": "",
        "userId": "6614f184b6a72df4ce06dd7f",
        "reason": ""
    }
    const [userData, setuserdata] = useState([]);
    console.log('userdata', userData)
    const [isEdit, setIsEdit] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [data, setdata] = useState(initvalue);
    const [eventData, setEventData] = useState([]);
    const columns = [
        {
            name: "SL",
            selector: (row) => row.sl,
            // width: "3.4rem"
        },
        {
            name: "name",
            selector: (row) => row.name,
            // width: "35.7rem"
        },
        {
            name: "description",
            selector: (row) => row.description,
            // width: "20rem"
        },
        {
            name: "type",
            selector: (row) => row.id,
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

    //  function for taking inputs from input field(handle change function)
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };
    console.log('datawerecieve', data)

    // function for validation
    const validate = () => {
        if (!data?.name) {
            toast.error("name is required");
            return true
        }
        if (!data?.userId) {
            toast.error(" userid is required");
            return true
        }
        if (!data?.reason) {
            toast.error(" Description is required");
            return true
        }
        return false
    }
    //function for handle submit
    const handleSubmit = async () => {

        if (validate()) {
            return
        }

        const SubmitData =
        {
            "name": data?.name,
            "description": data?.reason,
            "userid": data?.userId
        }


        const res = await HttpClient.requestData("add-to-hallfame", "POST", SubmitData);
        console.log('responseclg', res)
        if (res && res?.status) {
            toast.success("Inititive Added Successfully");
            getEventData()
            setdata(initvalue)

        } else {
            toast.error(res.message || "Something Wrong");
        }
    };
    // fetch userdata
    const getUserdata = async () => {
        const res2 = await HttpClient.requestData("view-all-employees", "GET", {});
        if (res2 && res2?.status) {

            // const arr2 = res2?.data?.map((obj, j) => ({
            //     useroption: obj._id
            // }));



            setuserdata(res2?.data);

        }
    }

    // fetch hall of fame  data
    const getEventData = async () => {
        const res = await HttpClient.requestData("get-hallfame", "GET", {});


        console.log("resdaainn", res?.data);
        if (res && res?.status) {
            setEventData(res?.data);
            const arr = res?.data?.map((item, i) => ({

                sl: i + 1,
                id: item?.userId,
                name: item?.name,
                description: item?.reason,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
            // console.log("arrInitiativeData", arr);
            setTableData(arr);

        }


    };
    // handle edit function
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        // setEditId(item?._id)
        // setIsEdit(true)
        // setdata({
        //     InitiativeType: item?.initiativetype,
        //     InitiativeFor: item.initiativeFor,
        // })

        console.log('handle edit called')
    }

    //Delete Click
    const handleDelete = (id) => {
        // const del = async () => {
        //     const res = await HttpClient.requestData("delete-initiative-type/" + id, "DELETE");
        //     if (res && res?.status) {
        //         toast.success("Inititive Deleted Successfully");
        //         getEventData()
        //     } else {
        //         toast.error(res.message || "Something Wrong");
        //     }
        // }

        // DeleteConfirmModal(del);
        console.log('delete function called', id)
    }

    useEffect(() => {
        getEventData();
        getUserdata();
    }, []);

    return (
        <div>
            <div>
                <div className="d-flex justify-content-end">
                    {/* <CustomLoader loading={isLoading} /> */}
                    <div className="form-header">
                        {/* input fields */}
                        <section className="piechartsBox_area">
                            <div style={headLineStyle} className="page-headline">
                                {/* {isEdit ? "Edit Initiative & Initiative For" : "Add Initiative"} */}
                                Hall of Fame
                            </div>
                            <form class="row g-3 m-2">
                                {/* for name*/}
                                <div class="col-md-6">
                                    <label for="Name" className="form-label edit-tag">Enter your name</label>
                                    <span style={{ color: "red" }}>*</span>
                                    <input type="text"
                                        className="form-control"
                                        onChange={handleChange}
                                        value={data?.name}
                                        name="name"
                                    />
                                </div>


                                {/* for userID */}
                                <div class="col-md-6">

                                    <label for="userID" className="form-label edit-tag">
                                        Select your UserID
                                    </label>

                                    <span style={{ color: "red" }}>*</span>

                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="userId"
                                        value={data?.userId}
                                        onChange={handleChange}


                                    >
                                        <option disabled>Select Category</option>

                                        {userData?.map((obj, i) => {
                                            return (
                                                <option value={obj?._id} key={i}>{obj?.firstName}  {obj?.lastName}</option>
                                            )


                                        })}

                                    </select>

                                </div>
                                {/* for description */}
                                <div class="col-md-6">
                                    <label htmlFor="formGroupExampleInput" className="form-label edit-tag">Description</label>
                                    <span style={{ color: "red" }}>*</span>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        placeholder="Description of Initiative."
                                        name="reason"
                                        value={data?.reason}
                                        onChange={handleChange}
                                        rows="5"
                                        cols="5"
                                    >hello people enter your description</textarea>
                                </div>
                            </form>

                            {/* Button */}

                            <div class="col-12 d-flex justify-content-between  ">
                                <div>
                                    {
                                        isEdit
                                            ?
                                            <button
                                                // onClick={editInitiativeSubmit}
                                                class="btn btn-primaryb mt-3"
                                                style={{
                                                    background:
                                                        "linear-gradient(195deg, rgb(150, 86, 44), rgb(25, 25, 25))",
                                                    color: "#fff",
                                                }}
                                            >
                                                Update hall of fame
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
                                                Add to Hall of fame
                                            </button>
                                    }
                                </div>
                            </div>


                        </section>



                        {/* datatable */}
                        <section>
                            <div style={headLineStyle} className="page-headline">
                                View HAll OF FAME
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

        </div>
    )
}

export default AddHallofFame