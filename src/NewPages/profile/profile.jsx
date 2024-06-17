import React from 'react'
const headLineStyle = {
    textAlign: "center",
    fontSize: "30px",
    color: "#868e96",
    margin: "35px",
    fontWeight: "bold",
};
const Profile = () => {

    return (
        <div>
            <div className="d-flex justify-content-end">
                <div className="form-header">
                    <div className="LoginBtm">
                        <form action="">
                            <div className="form-group">
                                <input
                                    name="confirm pass"
                                    id="exampleEmail"
                                    placeholder="password here..."
                                    type="password"

                                    className="form-control"
                                />
                            </div>
                            <div className="form-group pass_input">
                                <input


                                    name="password"
                                    id="examplePassword"
                                    placeholder="confirm Password here..."
                                    type="password"
                                    className="form-control"
                                />
                                {/* toggle password */}

                                <div className="eye_icon">
                                    {/* {togglePassword ? (
                                    <i
                                        className="fa-regular fa-eye"
                                    //   onClick={() => passtrue()}
                                    ></i>
                                ) : ( */}
                                    <i
                                        class="fa-regular fa-eye-slash"
                                    //   onClick={() => passfalse()}
                                    ></i>
                                    {/* )} */}
                                </div>
                            </div>
                            {/* <div className="form-group">
                <input type="Checkbox" />
                <span className="LoginRem">Remember Me</span>
              </div> */}

                        </form>
                        <div className="buttons">
                            <button
                                className="LoginBtn btn-hover color-9"
                                type="button"
                            // onClick={(e) => handleSubmit(e)}
                            >
                                change password
                            </button>
                        </div>
                    </div>
                </div>
                Profile
            </div>

        </div>
    )
}

export default Profile;