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

const AddUser = () => {
    const inituser = {
        userfirstName: "",
        userlastName: "",
        userType: "",
        useremail: "",
        userpassword: "",
        usercontact: "",
        userimage: ""
    }
    const [data, setdata] = useState(inituser);
    const [eventData, setEventData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tableData, setTableData] = useState([]);
    // colum

    const columns = [
        {
            name: "SL",
            selector: (row) => row?.sl,
            // width: "3.4rem"
        },
        {
            name: "Firstname",
            selector: (row) => row.userfirstName,
            // width: "35.7rem"
        },
        {
            name: "lastname",
            selector: (row) => row.userlastName,
            // width: "35.7rem"
        },
        {
            name: "email",
            selector: (row) => row.useremail,
            // width: "20rem"
        },
        {
            name: "image",
            selector: (row) => row.userimage,
            // width: "20rem"
        },
        {
            name: "Contact",
            selector: (row) => row.usercontact,
            // width: "20rem"
        },
        {
            name: 'Action',
            selector: row => row.action,
        }
    ];
    //  function for taking inputs from input field(handle change function)
    const handleChange = (e) => {

        setdata({
            ...data,
            [e.target.name]: e.target.value
            // ,
            // userimage: URL.createObjectURL(e.target.files[0])
        });
    };
    // handle document change
    const handledocChange = async (e) => {
        let file = e.target.files[0]
        console.log('imagefile', file)
        let imgArr = [];

        let data = new FormData();
        data.append("image", file);
        // console.log(data, "daaaaa");
        // setImgLoader(true)
        let res = await HttpClient.fileUplode("image-upload", "POST", data);
        console.log("resultImg", res);
        if (res && res?.status) {
            // setImgLoader(false)
            let url = res?.image;
            imgArr = [...imgArr, url];
            setdata(prev => ({ ...prev, userimage: url }));
        } else {
            // setImgLoader(false)
            toast?.error(res?.message || "something wrong")
        }

    }
    console.log('data22werecieve', data)
    // function for validation
    const validate = () => {
        if (!data?.userfirstName) {
            toast.error("Firstname is required");
            return true
        }
        if (!data?.userlastName) {
            toast.error(" lastName is required");
            return true
        }
        if (!data?.userType) {
            toast.error(" usertype is required");
            return true
        }
        if (!data?.usercontact) {
            toast.error("contact is required");
            return true
        }
        if (!data?.useremail) {
            toast.error("email is required");
            return true
        }
        if (!data?.userimage) {
            toast.error("image is required");
            return true
        }
        if (!data?.userpassword) {
            toast.error("password is required");
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
            firstName: data?.userfirstName,
            lastName: data?.userlastName,
            userType: data?.userType,
            email: data?.useremail,
            password: data?.userpassword,
            contact: data?.usercontact,
            image: data?.userimage
        }


        const res = await HttpClient.requestData("user-register", "POST", SubmitData);
        console.log('response1clg', res)
        if (res && res?.status) {
            toast.success("user Added Successfully");
            getEventData()
            setdata(inituser)

        } else {
            toast.error(res?.message || "Something Wrong");
        }
    };
    // fetch Initiative  data
    const getEventData = async () => {
        const res = await HttpClient.requestData("view-all-employees", "GET", {});
        console.log("res22daainn", res?.data);
        if (res && res?.status) {
            setEventData(res?.data);
            const arr = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                userfirstName: item?.firstName,
                userlastName: item?.lastName,
                userType: item?.userType,
                useremail: item?.email,
                userpassword: item?.password,
                usercontact: item?.contact,
                userimage: item?.image,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
            console.log("arrInitiativeData", arr);
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

        console.log('handle edit called');
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
    }, []);



    return (
        // <div>AddUser</div>

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
                            {isEdit ? "Edit user information" : "Add User Details"}
                        </div>



                        <form class="row g-3 m-2">

                            {/* User Name */}
                            {/* first Name  */}
                            <div class="col-md-6">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    First Name
                                </label>

                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="FirstName"
                                    // onChange={(e) => setQuestion(e.target.value)}
                                    onChange={handleChange}
                                    value={data?.userfirstName}
                                    name="userfirstName"
                                />

                            </div>
                            {/* last Name  */}
                            <div class="col-md-6">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Last Name
                                </label>

                                <span style={{ color: "red" }}>*</span>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="LastName"
                                    // onChange={(e) => setQuestion(e.target.value)}
                                    onChange={handleChange}
                                    value={data?.userlastName}
                                    name="userlastName"
                                />
                            </div>

                            {/* User type */}
                            <div class="col-md-6">
                                <label for="inputEmail4"
                                    className={`form-label ${isEdit ? 'edit-tag' : ''}`}
                                >
                                    User Type
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>

                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="userType"
                                        value={data?.userType}
                                        onChange={handleChange}


                                    >
                                        <option disabled>Select Category</option>
                                        <option value={'HR'}>HR</option>
                                        <option value={'Employee'}>Employee</option>

                                    </select>
                                </div>
                            </div>

                            {/*email*/}
                            <div class="col-md-6">
                                <label for="inputEmail4"
                                    className={`form-label ${isEdit ? 'edit-tag' : ''}`}
                                >
                                    Email
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder='enter your email '
                                        // onChange={(e) => handleChange(e, index)}
                                        onChange={handleChange}
                                        value={data?.useremail}
                                        name="useremail"
                                    />
                                </div>
                            </div>
                            {/* cotact */}
                            <div class="col-md-6">
                                <label for="inputEmail4"
                                    className={`form-label ${isEdit ? 'edit-tag' : ''}`}
                                >
                                    Contact
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder='enter your numebr'
                                        // onChange={(e) => handleChange(e, index)}
                                        onChange={handleChange}
                                        value={data?.usercontact}
                                        name="usercontact"
                                    />
                                </div>
                            </div>
                            {/* password */}
                            <div class="col-md-6">
                                <label for="inputEmail4"
                                    className={`form-label ${isEdit ? 'edit-tag' : ''}`}
                                >
                                    Password
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder='enter pssword'
                                        onChange={handleChange}
                                        value={data?.userpassword}
                                        name="userpassword"
                                    />
                                </div>
                            </div>

                            {/*Image*/}
                            <div class="col-md-6 mt-3">
                                {/* <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}> */}
                                <label for="inputEmail4" className={`form-label`}>
                                    Image
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <input
                                    type="file"
                                    placeholder="Choose a photo"
                                    name="userimage"
                                    accept="image/*"
                                    // value={data?.userimage}
                                    onChange={handledocChange}

                                />
                            </div>
                        </form>

                        {/* Button */}
                        <div class="col-12 d-flex justify-content-between ">
                            {
                                !isEdit
                                    ?
                                    <button
                                        type="submit"
                                        onClick={handleSubmit}
                                        class="btn btn-primaryb mt-3"
                                        style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                    >
                                        Add User
                                    </button>
                                    :
                                    <div className="d-flex ">
                                        <button
                                            type="submit"
                                            // onClick={(e) => handleEditSubmit(e)}
                                            className="btn  mt-3 btn-grad"
                                        //style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                        >
                                            Update User
                                        </button>
                                        {/* <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " /> */}
                                    </div>
                            }
                        </div>
                    </section>


                    {/* datatable */}
                    <section>
                        <div
                            style={headLineStyle}
                            className="page-headline"
                        >
                            View Users
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
    )
}

export default AddUser