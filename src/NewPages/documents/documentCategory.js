
import { useEffect, useState } from "react";
import HttpClient, { IMAGE_URL } from "../../utils/HttpClient";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../CustomComponents/loader/CustomLoader";
import DataTable from 'react-data-table-component';
import EditDeleteIcon from '../../CustomComponents/EditDeleteIcon';
import { DeleteConfirmModal } from '../../CustomComponents/DeleteConfirmModal';
import { ImCross } from 'react-icons/im'
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "15px",
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

const ManageDocumentCategory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [AllData, setAllData] = useState([]);
    const [catname, setCatname] = useState("");
    const [isDelete, setIsDelete] = useState(true);
    const [editData, setEditData] = useState({})

    // get category data
    const getCategoryData = async () => {
        setIsLoading(true);
        const res = await HttpClient.requestData("get-document-category", "GET", {});
        let apiData = []
        if (res && res?.status) {
            setIsLoading(false);
            apiData = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                name: item?.catName,
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

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (validate()) {
        //     return
        // }
        const SubmitData =
        {
            catName: catname
        }
        const res = await HttpClient.requestData("add-document-category", "POST", SubmitData);
        console.log("resCat", res);
        if (res && res?.status) {
            toast.success("category Added Successfully");
            setIsLoading(false);
            setCatname("");
            getCategoryData();

        } else {
            toast.error(res.message || "Something Wrong");
        }
    };



    // click on edit
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        console.log("itemsd", item)
        setCatname(item?.catName)
        setEditData(item);
        setIsEdit(true);
    }


    // handle edit button
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        // if (validate()) {
        //     return
        // }
        const data1 = { catName: catname };
        console.log('update', editData?._id)
        setIsLoading(true);
        const res = await HttpClient.requestData("update-document-category/" + editData._id, "POST", data1);
        if (res && res?.status) {
            toast.success("Event  Added Successfully");
            setIsLoading(false);
            setCatname("");
            getCategoryData();
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
            const res = await HttpClient.requestData("delete-document-category/" + id, "PUT", {})
            if (res && res?.status) {
                setIsDelete(false);
                setIsLoading(false);
                toast.success("document category Deleted Successfully");
                getCategoryData();
            } else {
                toast.error(res?.message || "Something Wrong");
            }
        }

        DeleteConfirmModal(del);
    }

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

    useEffect(() => {
        getCategoryData();
    }, [])






    return (
        <div className="d-flex justify-content-end">
            <div className="form-header">

                {/* <CustomLoader loading={isLoading} /> */}
                <div
                    style={headLineStyle}
                    className="page-headline"
                >
                    Add Document Category

                </div>
                <section className="piechartsBox_area">

                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="formGroupExampleInput">Enter Category</label>


                                <input
                                    className="form-control "
                                    type="text"

                                    value={catname}
                                    onChange={(e) => setCatname(e.target.value)}
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
                                                Add document category
                                            </button>
                                            :
                                            <div className="d-flex ">
                                                <button
                                                    type="submit"
                                                    onClick={(e) => handleEditSubmit(e)}
                                                    className="btn  mt-3 btn-grad"
                                                >
                                                    Update document category
                                                </button>
                                                <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
                                            </div>
                                    }
                                </div>


                            </div>

                        </div>

                        <br />

                    </form>
                </section>
                <section>
                    <div
                        style={headLineStyle}
                        className="page-headline"
                    >
                        View and Manage Document Category

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

    );
};

export default ManageDocumentCategory
