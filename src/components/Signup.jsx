import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { signupPush } from "../ApiCalls/signupApi";

const Signup = () => {
  const [signupDeatails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    Signemail: "",
    mobileNumber: "",
    Signpassword: "",
    Signcpassword: "",
  });
  const handleChange = (e) => {
    setSignupDetails({ ...signupDeatails, [e.target.name]: e.target.value });
  };
  let regex_expression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})/;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      signupDeatails?.firstName === "" ||
      signupDeatails?.Signemail === "" ||
      signupDeatails?.mobileNumber === "" ||
      signupDeatails?.Signpassword === "" ||
      signupDeatails?.Signcpassword === ""
    ) {
      toast("Feilds can not be Empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      signupDeatails?.Signpassword.length < 8 ||
      !regex_expression.test(signupDeatails.Signpassword)
    ) {
      toast(
        "Password should be AlphaNumeric with Min 8 characters one speacial character and one Uppercase Letter",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "😅",
        }
      );
    } else if (signupDeatails?.Signpassword !== signupDeatails?.Signcpassword) {
      toast("Password does not match", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      signupDeatails?.mobileNumber.length !== 10 ||
      isNaN(signupDeatails?.mobileNumber) ||
      !parseInt(signupDeatails?.mobileNumber) > 0
    ) {
      toast("Please Enter A valid Mobile Number", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else {
      localStorage.setItem(
        "nameData",
        `${signupDeatails?.firstName} ${signupDeatails?.lastName}`
      );
      signupPush(signupDeatails);
    }
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <h2 style={{ justifyContent: "center", display: "flex" }}>
          <i>SignUp</i>
        </h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            >
              <div style={{ width: "100%", marginRight: "5px" }}>
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNameFirst"
                  aria-describedby="emailHelp"
                  name="firstName"
                  value={signupDeatails?.firstName}
                  onChange={handleChange}
                />
              </div>
              <div style={{ width: "100%" }}>
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputNameLast"
                  aria-describedby="emailHelp"
                  name="lastName"
                  value={signupDeatails?.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="Signemail"
              value={signupDeatails?.Signemail}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="mobileNumber"
              value={signupDeatails?.mobileNumber}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your Mobile Number with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="Signpassword"
              value={signupDeatails?.Signpassword}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword2"
              name="Signcpassword"
              value={signupDeatails?.Signcpassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <Link to="/login">Already Registered click Here</Link>
          </div>
          <button
            style={{ marginTop: "20px", width: "100%" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
