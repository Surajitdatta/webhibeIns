import React, { useEffect, useState } from 'react'
import { ImCross } from 'react-icons/im'
import CustomLoader from '../../CustomComponents/loader/CustomLoader'
import toast from 'react-hot-toast'
import DataTable from 'react-data-table-component'
import PieChartsBox from '../../View/Home/PieChartsBox'
import Select from 'react-select';
import EditDeleteIcon from '../../CustomComponents/EditDeleteIcon'
import { DeleteConfirmModal } from '../../CustomComponents/DeleteConfirmModal'
import HttpClient, { IMAGE_URL } from '../../utils/HttpClient'
import { computeHeadingLevel } from '@testing-library/react'
import moment from 'moment'

const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "35px",
    fontWeight: "bold"

}
const customStyles = {

    headCells: {
        style: {
            // paddingLeft: '8px', // override the cell padding for head cells
            // paddingRight: '8px',
            backgroundColor: '#cee0eb', // set the background color for head cells
        },
    },

};


const AddEvent = () => {
    const [AllData, setAllData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [employeeslist, setemployeelist] = useState([])
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [imageFile, setimageFile] = useState("");
    const [editData, setEditData] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [formValue, setFormValue] = useState();
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDelete, setIsDelete] = useState(true);
    const initValue = {
        Eventname: "",
        Date: "",
        Image: "",
        Eventtype: "",
        notes: "",
        addEmploee: [],
        time: "",
        posttype: "",
        ishighlighted: ""
    }

    const [data, setdata] = useState(initValue)
    console.log('first22', data)
    const [userData, setuserdata] = useState([]);
    const [eventData, setEventData] = useState([])
    const [tableData, setTableData] = useState([]);
    const [showpubliclist, setShowpubliclist] = useState(false);
    const [showprivatelist, setShowprivatelist] = useState(false);

    const columns = [
        {
            name: 'SL',
            selector: row => row.sl,
            // width: "3.4rem"
        },
        {
            name: 'Event Name',
            selector: row => row.Eventname,
            // width: "35.7rem"
        },
        {
            name: 'Hosted By',
            selector: row => row.HostedBy,
            // width: "20rem"
        },
        {
            name: 'Date',
            selector: row => row.Date,
            // width: "8rem"
        },
        {
            name: 'Image',
            selector: (row) => (
                <img
                    src={row.image}
                    alt="thumbnail"
                    style={{ width: "50px", height: "50px", padding: "10px" }}
                />
            ),

            // width: "8rem"
        },
        {
            name: 'Action',
            selector: row => row.action,
            // width: "8rem"
        }

    ];
    // fetch employeelist
    const getemployeedata = async () => {
        const res3 = await HttpClient.requestData("view-all-employees", "GET", {});
        console.log('user', res3)
        if (res3 && res3?.status) {
            setemployeelist(res3?.data);
            // const arr2 = res2?.data?.map((obj, j) => ({
            //     useroption: obj._id
            // }));
        }
    }
    // fetch event-type
    const getUserdata = async () => {
        const res2 = await HttpClient.requestData("fetch-event-type", "GET", {});
        console.log('user', res2)
        if (res2 && res2?.status) {
            setuserdata(res2?.data);
            // const arr2 = res2?.data?.map((obj, j) => ({
            //     useroption: obj._id
            // }));
        }
    }

    //Form Event to Get Form Data
    const handleChange = (e) => {
        e.target.value
        console.log(e.target.value)
        setdata({ ...data, [e.target.name]: e.target.value })

    }
    // image change
    const handleImageChange = async (e) => {
        let image = e.target.files[0];
        setUploading(true);
        const form = new FormData();
        form.append("image", image);
        let res = await HttpClient.fileUplode("image-upload", "POST", form);
        if (res.status) {
            toast.success("Image uploaded successfully");
            setImageURL(res?.image);
            let url = res?.image;

            setdata(prev => ({ ...prev, Image: url }));
            console.log('imageurl', url);
        } else {
            toast.error("Error uploading image");
        }
        setUploading(false);
    };

    // validation
    const validate = () => {
        if (!data?.Eventname) {
            toast.error("EventName   is required");
            return true
        }
        // if (!data?.HostedBy) {
        //     toast.error("Hosted By required");
        //     return true
        // }
        if (!data?.Date) {
            toast.error("Date required");
            return true
        }
        // if (!data?.Image) {
        //     toast.error("Image is  required");
        //     return true
        // }
        return false
    }

    // handle submit
    const handleSubmit = async () => {

        if (validate()) {
            return
        }

        const SubmitData = {
            eventName: data?.Eventname,
            eventTypeId: data?.Eventtype,
            eventDate: data?.Date,
            isHighLighted: data?.ishighlighted,
            postType: data?.posttype,
            notes: data?.notes,
            eventTime: data?.time,//24hrs,
            addEmploee: [data?.addEmploee],
            image: data?.Image
        }
        console.log("semit", SubmitData);
        const res = await HttpClient.requestData("add-event", "POST", SubmitData)
        // console.log("resff", res)
        if (res && res?.status) {
            toast.success("Event Added Successfully")
            getEventData();
        } else {
            toast.error(res.message || "Something Wrong")
        }

    }
    // fetch event data
    const getEventData = async () => {
        const res = await HttpClient.requestData("view-event", "GET", {})
        // console.log("resdaa", res?.data);
        if (res && res?.status) {
            setEventData(res?.data);
            const arr = res?.data?.map((item, i) => ({
                id: i + 1,
                sl: i + 1,
                Eventname: item?.eventName,
                HostedBy: item?.hostedBy,
                Date: moment(item?.eventDate).format("LL"),
                image: item?.image,
                action: <EditDeleteIcon
                    onClickEdit={(e) => handleEdit(item)}
                    onClickDelete={(e) => handleDelete(item?._id)}
                />

            }))
            console.log("arrsadfd", arr)
            setTableData(arr)
        }
    }
    // click on edit
    const handleEdit = (item) => {
        window.scrollTo(0, 0)
        setEditData(item);
        console.log("itemsd", item)
        setIsEdit(true);
        // setFormValue({
        //     eventName: item?.Eventname,
        //     hostedBy: item?.HostedBy,
        //     eventDate: item?.EventDate,
        //     image: item?.Image,
        // })
        // setimageFile(item?.image)
        setdata(
            {
                Eventname: item?.eventName,
                Date: item?.eventDate,
                Image: item?.image,
                Eventtype: item?.Eventtype,
                notes: item?.docType,
                addEmploee: [item?.addEmploee],
                time: item?.time,
                posttype: item?.posttype,
                ishighlighted: item?.ishighlighted
            }
        )
    }
    const handleEditSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            return
        }

        const data1 = {
            eventName: data?.Eventname,
            eventTypeId: data?.Eventtype,
            eventDate: data?.Date,
            isHighLighted: data?.ishighlighted,
            postType: data?.posttype,
            notes: data?.notes,
            eventTime: data?.time,//24hrs,
            addEmploee: [data?.addEmploee],

        }
        setIsLoading(true);
        const res = await HttpClient.requestData(" edit-event/" + editData?._id, "PUT", data1);
        if (res && res?.status) {
            toast.success("Event  Added Successfully");
            // setFormValue(initValue);
            // setimageFile("")
            // setimageFile(null)
            setdata(initValue)
            setIsLoading(false);
            getEventData();
        } else {
            toast.error(res?.message || "Something Wrong");
            setIsLoading(false);
        }
    }
    //cancel edit
    const handleisCancelSubmit = (e) => {
        setIsEdit(false)
        setFormValue(initValue)
        // setimageFile("")
        setdata(initValue)
    }
    // delete
    const handleDelete = (id) => {
        const del = async () => {
            setIsLoading(true);
            const res = await HttpClient.requestData("delete-event/" + id, "PUT", {})
            if (res && res?.status) {
                setIsDelete(false);
                setIsLoading(false);
                toast.success(" Deleted Successfully");
                getEventData();
            } else {
                toast.error(res?.message || "Something Wrong");
            }
        }

        DeleteConfirmModal(del);
    }

    useEffect(() => {
        getEventData();
        getUserdata();
        getemployeedata();
    }, [])

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
                            {isEdit ? "Edit Question & Answer" : "Add Events"}
                        </div>
                        <form class="row g-3 m-2">
                            {/* Event Name */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Event Name :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="EventName"
                                    onChange={handleChange}
                                    value={data.Eventname}
                                    name="Eventname"
                                />

                            </div>
                            {/*Date*/}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Date :
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder=''
                                        // onChange={(e) => handleChange(e, index)}
                                        onChange={handleChange}
                                        value={data.Date}
                                        name="Date"
                                    />
                                </div>

                            </div>
                            {/* time */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Event Time :
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="time"
                                        className="form-control"
                                        placeholder=''
                                        // onChange={(e) => handleChange(e)}
                                        onChange={handleChange}
                                        value={data.time}
                                        name="time"
                                    />
                                </div>

                            </div>
                            {/*Event type  */}
                            <div class="col-md-6 mt-2">
                                <label for="number" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>Types of Event :</label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=" d-flex ">
                                    <select
                                        class="form-control"
                                        aria-label="Default select example"
                                        name="Eventtype"
                                        value={data.Eventtype}
                                        onChange={handleChange}
                                    >
                                        <option disabled>Select Type</option>
                                        {userData?.map((obj, i) => {
                                            return (
                                                <option value={obj?._id} key={i}>{obj?.typeName}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>
                            {/* Post type */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Share your Event:
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                                onChange={handleChange}
                                                value="public"
                                                onClick={() => {
                                                    setShowpubliclist(true);
                                                    setShowprivatelist(false);
                                                }} />Public

                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="posttype"
                                                onChange={handleChange}
                                                onClick={() => {
                                                    setShowprivatelist(true);
                                                    setShowpubliclist(false)
                                                }

                                                }
                                                value="private" />Private
                                        </label>
                                    </div>
                                </div>

                            </div>
                            {/* employeeslist */}
                            {showpubliclist &&
                                <div class="col-md-4 mt-2">
                                    <label for="number">Employee list</label>
                                    <span style={{ color: "red" }}>*</span>
                                    <div className=" d-flex ">
                                        {/* <select
                                            class="form-control"
                                            aria-label="Default select example"
                                            multiple={true}
                                            name="addEmploee"
                                            value={data.addEmploee}
                                            onChange={handleChange
                                            }
                                        >
                                            <option disabled>Select Type</option>
                                            {employeeslist?.map((obj, i) => {
                                                return (
                                                    <option value={obj?._id} key={i}>{obj?.firstName} {obj?.lastName}</option>
                                                )
                                            })}
                                        </select> */}
                                        <Select
                                            options={employeeslist?.map(ele => ({ value: ele?._id, label: ele?.userName }))}
                                            defaultValue={selectedOption}
                                            class="form-control"
                                            onChange={(selectedOptions) => {
                                                const employeeIds = selectedOptions.map(option => option.value);
                                                setSelectedOption(selectedOptions);
                                                setdata({ ...data, addEmploee: employeeIds });
                                            }}
                                            isMulti
                                            placeholder={"select employess"}
                                            closeMenuOnSelect={false}
                                        />
                                    </div>
                                </div>
                            }
                            {/* hostedBy */}
                            {/* <div class="col-md-6">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    hostedBy-
                                </label>

                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder=''
                                        onChange={handleChange}
                                        value={data.HostedBy}
                                        name="HostedBy"
                                    />
                                </div>

                            </div> */}

                            {/* ishighligted */}
                            <div class="col-md-6 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    IsHighlighted :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="ishighlighted"
                                                onChange={handleChange}
                                                value="yes" />YES
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input type="radio"
                                                class="form-check-input"
                                                name="ishighlighted"
                                                onChange={handleChange}
                                                value="no" />NO
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* notes */}
                            <div class="col-12 mt-2">
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}   >
                                    Event Description :
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        placeholder=''
                                        // onChange={(e) => handleChange(e)}
                                        onChange={handleChange}
                                        value={data.notes}
                                        name="notes"
                                        style={{
                                            rows: "5",
                                            cols: "5"
                                        }}
                                    />
                                </div>
                            </div>



                            {/*Image*/}
                            <div class="col-md-6 mt-2 ">
                                {/* <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}> */}
                                <label for="inputEmail4" className={`form-label ${isEdit ? 'edit-tag' : ''}`}>
                                    Image
                                </label>
                                <span style={{ color: "red" }}>*</span>
                                <div className=' d-flex '>
                                    <input
                                        type="file"
                                        id="hostedBy"
                                        placeholder="Choose a photo"
                                        // className="form-control"
                                        // value={data?.Image}
                                        onChange={handleImageChange}
                                    // className="upldimagediv"
                                    />
                                </div>
                                {imageURL !== "" && (
                                    <div className="upldimgdivbulletin" >
                                        <img
                                            src={imageURL}
                                            style={{ height: "100px", width: "100px" }}
                                            alt="" />
                                        <div className="clsoedivmainrd"
                                            onClick={() => {
                                                setImageURL("");
                                                setImage("");
                                            }}>
                                            <i className="fa-solid fa-xmark"></i>
                                        </div>
                                    </div>
                                )}

                                {uploading ? <p>image uploading......</p> : null}

                            </div>
                        </form>

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
                                        Add Event
                                    </button>
                                    :
                                    <div className="d-flex ">
                                        <button
                                            type="submit"
                                            onClick={(e) => handleEditSubmit(e)}
                                            className="btn  mt-3 btn-grad"
                                        //style={{ background: "linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))", color: "#fff" }}
                                        >
                                            Update Event
                                        </button>
                                        <ImCross onClick={(e) => handleisCancelSubmit(e)} style={{ fontSize: "26px", cursor: "pointer" }} className=" mx-3 mt-4 text-danger " />
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
                    </section>
                </div>


            </div>

        </div>
    )
}


export default AddEvent











{/* button */ }

{/* <div class="col-12 d-flex justify-content-between  ">
                            <div>
                                <button
                                    onClick={() => handleSubmit()}

                                    class="btn btn-primaryb mt-3"
                                    style={{ background: "linear-gradient(195deg, rgb(150, 86, 44), rgb(25, 25, 25))", color: "#fff" }}
                                >
                                    Add Event
                                </button>
                            </div>

                        </div> */}