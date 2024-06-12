import React from 'react';
import { useEffect, useState } from "react";
import HttpClient, { IMAGE_URL } from "../../utils/HttpClient";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import CustomLoader from "../../CustomComponents/loader/CustomLoader";
import DataTable from 'react-data-table-component';
import EditDeleteIcon from '../../CustomComponents/EditDeleteIcon';
import { DeleteConfirmModal } from '../../CustomComponents/DeleteConfirmModal';
import { ImCross } from 'react-icons/im';
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


const Getdocuments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [AllData, setAllData] = useState([]);
    const [isDelete, setIsDelete] = useState(true);
    const [editdata, seteditdata] = useState();
    const [userData, setuserdata] = useState([]);
    const [image, setimage] = useState(null);
    const [showimage, setshowimage] = useState(false)
    const initialdata = {
        title: "",
        docCatId: "",
        docImage: "",
        details: "",
        version: "",
        docUrl: "",
    }
    const [data, setdata] = useState(initialdata);

    console.log("formdata", data)
    // get document data
    const getdocumentData = async () => {
        setIsLoading(true);
        const res = await HttpClient.requestData("get-documents", "GET", {});
        let apiData = []
        if (res && res?.status) {
            setIsLoading(false);
            apiData = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                title: item?.title,
                docCatId: item?._id,
                docImage: item?.docImage,
                details: item?.details,
                version: item?.version,
                docUrl: item?.docUrl,
                action: <EditDeleteIcon
                    // onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />
            }));
        } else {
            setIsLoading(false);
        }
        setAllData(apiData);

    }

    // column
    const columns = [
        {
            name: 'SL',
            selector: row => row.sl,
            width: "6rem"
        },
        {
            name: ' Title',
            selector: row => row.title,
            // width: "17rem"
        },
        {
            name: ' details',
            selector: row => row.details,
            // width: "17rem"
        },
        {
            name: ' Version',
            selector: row => row.version,
            // width: "17rem"
        },
        {
            name: ' document',
            selector: (row) => (
                // <object data={row.docImage} style={{ width: "50px", height: "50px", padding: "10px" }} />
                <a href={row.docImage} ><img
                    src={row.docImage}
                    alt="thumbnail"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                /></a>
            ),

            // (row) => (row.docImage[0].type === "image/*" ?
            //     <img
            //         src={row.docImage}
            //         alt="thumbnail"
            //         style={{ width: "50px", height: "50px", padding: "10px" }}
            //     /> : 
            // )
            // selector: row => row.docImage,
            // width: "17rem"
        },
        {
            name: 'category URL',
            selector: row => row.docUrl,
            // width: "17rem"
        },

        {
            name: 'Action',
            selector: row => row.action,
        }
    ];

    // fetch categorydata
    const getUserdata = async () => {
        const res2 = await HttpClient.requestData("get-document-category", "GET", {});
        if (res2 && res2?.status) {
            setuserdata(res2?.data);
        }
    }
    console.log('categorydata', userData)
    //handle change
    const handleChange = (e) => {
        e.target.value;
        setdata({ ...data, [e.target.name]: e.target.value });
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
            setdata(prev => ({ ...prev, docImage: url }));
            setimage(url);
            setshowimage(true)
            // imgArr = [...imgArr, url]
            // setFormValue(prev => ({ ...prev, image: imgArr }))
        } else {
            // setImgLoader(false)
            toast?.error(res?.message || "something wrong")
        }

    }

    // handle submit

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (validate()) {
        //     return
        // }
        const SubmitData =
        {
            docCatId: data.docCatId,
            title: data.title,
            docImage: data.docImage,
            details: data.details,
            version: data.version,
            docUrl: data.docUrl

        }
        console.log("datatosubmit", SubmitData)
        const res = await HttpClient.requestData("add-document", "POST", SubmitData);
        console.log("resCat", res);
        if (res && res?.status) {
            toast.success("document Added Successfully");
            setIsLoading(false);
            getdocumentData();
            setdata(initialdata);
            setdata(prev => ({ ...prev, docImage: "" }));
            setimage("");
            setshowimage(false)
        } else {
            toast.error(res.message || "Something Wrong");
        }
    };


    // click on edit
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        console.log("itemsd", item)
        setdata(item);
        seteditdata(data);
        setimage(item.docImage);
        setshowimage(true);
        console.log('edititem11', editdata);
        setIsEdit(true);
    }


    // handle edit button
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const data1 = {
            title: data.title
            // docCatId: data.docCatId,
            // docImage: data.docImage,
            // details: data.details,
            // version: data.version,
            // docUrl: data.docUrl

        };
        setIsLoading(true);
        const res = await HttpClient.requestData("update-documents/" + data?._id, "PUT", data1);
        if (res && res?.status) {
            toast.success("document updated  Added Successfully");
            setIsLoading(false);
            setdata(initialdata);
            getdocumentData();
            setIsEdit(false);
            setimage("")
            setshowimage(false);
            seteditdata({});
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
            const res = await HttpClient.requestData("delete-documents/" + id, "PUT", {})
            if (res && res?.status) {
                setIsDelete(false);
                setIsLoading(false);
                toast.success("document category Deleted Successfully");
                getdocumentData();
            } else {
                toast.error(res?.message || "Something Wrong");
            }
        }

        DeleteConfirmModal(del);
    }

    useEffect(() => {
        getdocumentData();
        getUserdata();
    }, [])


    return (
        <div>

            <div className="d-flex justify-content-end">
                <div className="form-header">

                    <CustomLoader loading={isLoading} />
                    <div
                        style={headLineStyle}
                        className="page-headline"
                    >
                        Add Documents
                        {/* {isEdit ? "Edit Question & Answer" : "Add Events"} */}
                    </div>
                    <section className="piechartsBox_area">
                        <div className="row">
                            <div class="col-md-6">
                                <label for="number">Documents Category</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">

                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="docCatId"
                                        value={data.docCatId}
                                        onChange={handleChange}
                                    >
                                        <option disabled>Select Category</option>

                                        {userData?.map((obj, i) => {
                                            return (
                                                <option value={obj?._id} key={i}>{obj?.catName}</option>
                                            )


                                        })}

                                    </select>


                                    {/* end */}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="number">Title</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <input
                                        type="text"
                                        onChange={handleChange}
                                        name="title"
                                        value={data.title}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="number">Version</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <input
                                        type="number"
                                        onChange={handleChange}
                                        name="version"
                                        value={data.version}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="number">Doc URL</label>
                                {/* <span style={{ color: "red" }}>*</span> */}
                                <div className=" d-flex ">
                                    <input
                                        type="url"
                                        onChange={handleChange}
                                        name="docUrl"
                                        value={data.docUrl}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="number">Details</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <textarea
                                        type="text"
                                        onChange={handleChange}
                                        name="details"
                                        value={data.details}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div class="col-md-6 mt-2">
                                <label for="number">Documents</label>
                                {/* <span style={{ color: "red" }}>*</span> */}
                                <div className=" d-flex ">
                                    <input
                                        type="file"
                                        onChange={handledocChange}
                                    // name="docImage"
                                    // value={image}
                                    // className="form-control"
                                    />
                                </div>
                                {showimage && <div>
                                    <img src={image} style={{ width: "50px", height: "50px", padding: "10px" }} alt='documentimage' />
                                    <button onClick={() => setshowimage(!showimage)} ><i className="fa-solid fa-trash"></i></button></div>}

                            </div>



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
                                            Add document
                                        </button>
                                        :
                                        <div className="d-flex ">
                                            <button
                                                type="submit"
                                                onClick={(e) => handleEditSubmit(e)}
                                                className="btn  mt-3 btn-grad"
                                            >
                                                Update document
                                            </button>
                                            <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
                                        </div>
                                }
                            </div>




                        </div>

                        <br />


                    </section>
                    <section>
                        <div
                            style={headLineStyle}
                            className="page-headline"
                        >
                            View & Manage Documents
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





            {/* end */}
        </div>
    )
}

export default Getdocuments