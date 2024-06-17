import React from 'react'
import { useEffect, useState } from "react";
import HttpClient, { IMAGE_URL } from "../../utils/HttpClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../CustomComponents/loader/CustomLoader";
import DataTable from 'react-data-table-component';
import EditDeleteIcon from '../../CustomComponents/EditDeleteIcon';
import { DeleteConfirmModal } from '../../CustomComponents/DeleteConfirmModal';
import { ImCross } from 'react-icons/im';
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "35px",
    fontWeight: "bold"

}
const customStyles = {
    // rows: {
    //     style: {
    //         minHeight: '48px', // override the row height
    //     },
    // },
    headCells: {
        style: {
            // paddingLeft: '8px', // override the cell padding for head cells
            // paddingRight: '8px',
            backgroundColor: '#cee0eb', // set the background color for head cells
        },
    },
    // cells: {
    //     style: {
    //         paddingLeft: '8px', // override the cell padding for data cells
    //         paddingRight: '8px',
    //     },
    // },
};
const Department = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [AllData, setAllData] = useState([]);
    const [deptname, setDeptname] = useState("");
    const [isDelete, setIsDelete] = useState(true);
    const [editData, setEditData] = useState({})
    // column
    const columns = [
        {
            name: 'SL',
            selector: row => row.sl,
            width: "6rem"
        },
        {
            name: 'category Name',
            selector: row => row.name,
            width: "40rem"
        },

        {
            name: 'Action',
            selector: row => row.action,
        }
    ];
    // get Department data
    const getDepartmentData = async () => {
        setIsLoading(true);
        const res = await HttpClient.requestData("view-department", "GET", {});
        let apiData = []
        if (res && res?.status) {
            setIsLoading(false);
            apiData = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                name: item?.departmentName,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
        } else {
            setIsLoading(false);
        }
        setAllData(apiData);

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!deptname) {
            toast.error("Enter department name");
        }

        // if (validate()) {
        //     return
        // }
        const SubmitData =
        {
            departmentName: deptname,
        }
        const res = await HttpClient.requestData("add-department", "POST", SubmitData);
        console.log("resCat", res);
        if (res && res?.status) {
            toast.success("category Added Successfully");
            setIsLoading(false);
            setDeptname("");
            getDepartmentData();

        } else {
            toast.error(res.message || "Something Wrong");
        }
    };

    // click on edit
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        console.log("itemsd", item)
        setDeptname(item?.departmentName)
        setEditData(item);
        setIsEdit(true);
    }

    // handle edit button
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        // if (validate()) {
        //     return
        // }
        const data1 = { departmentName: deptname };
        console.log('update', editData?._id)
        setIsLoading(true);
        const res = await HttpClient.requestData("update-department/" + editData._id, "PUT", data1);
        if (res && res?.status) {
            toast.success("Event  Added Successfully");
            setIsLoading(false);
            setDeptname("");
            getDepartmentData();
            setIsEdit(false);
        } else {
            toast.error(res?.message || "Something Wrong");
            setIsLoading(false);
        }
    }


    //cancel edit
    const handleisCancelSubmit = (e) => {
        setIsEdit(false)
    }
    // delete
    const handleDelete = (id) => {
        const del = async () => {
            setIsLoading(true);
            const res = await HttpClient.requestData("delete-department/" + id, "PUT", {})
            if (res && res?.status) {
                setIsDelete(false);
                setIsLoading(false);
                toast.success("document category Deleted Successfully");
                getDepartmentData();
            } else {
                toast.error(res?.message || "Something Wrong");
            }
        }

        DeleteConfirmModal(del);
    }


    useEffect(() => {
        getDepartmentData();
    }, [])

    return (
        <div> Department
            <div className="d-flex justify-content-end">
                <div className="form-header">

                    {/* <CustomLoader loading={isLoading} /> */}

                    <div
                        style={headLineStyle}
                        className="page-headline"
                    >
                        Add Department Data
                        {/* {isEdit ? "Edit Question & Answer" : "Add Events"} */}
                    </div>
                    <section className="piechartsBox_area">

                        <form>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="formGroupExampleInput">Enter Department</label>


                                    <input
                                        className="form-control "
                                        type="text"

                                        value={deptname}
                                        onChange={(e) => setDeptname(e.target.value)}
                                    />

                                    {/* Button */}
                                    <div class="col-12 d-flex justify-content-end ">
                                        {
                                            !isEdit
                                                ?
                                                <button
                                                    type="submit"
                                                    onClick={(e) => handleSubmit(e)}
                                                    class="btn btn-primaryb mt-3"
                                                    style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                                >
                                                    Add Department
                                                </button>
                                                :
                                                <div className="d-flex ">
                                                    <button
                                                        type="submit"
                                                        onClick={(e) => handleEditSubmit(e)}
                                                        className="btn  mt-3 btn-grad"
                                                    >
                                                        Update Department
                                                    </button>
                                                    <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
                                                </div>
                                        }
                                    </div>


                                </div>

                            </div>

                        </form>
                    </section>
                    <section>
                        <div
                            style={headLineStyle}
                            className="page-headline"
                        >
                            Manage Department Data
                            {/* {isEdit ? "Edit Question & Answer" : "Add Events"} */}
                        </div>
                        <div>
                            <DataTable
                                columns={columns}
                                data={AllData}
                                pagination
                                striped
                                className=" rounded "
                                customStyles={customStyles}
                            />
                        </div>

                    </section>
                </div>
            </div>


            {/* eod */}
        </div>
    )
}

export default Department;