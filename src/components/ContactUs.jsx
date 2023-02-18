import React from "react";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { contactuspush } from "../ApiCalls/contactusApi";
const ContactUs = () => {
  //const navigate = useNavigate();
  const [contactusdetail, setContactusdetail] = useState({
    name: "",
    mobileNum: "",
    emailAdd: "",
  });
  const handleChange = (e) => {
    setContactusdetail({ ...contactusdetail, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    window.open(
      "mailto:rajat.gupta.mart@gmail.com?subject=Regarding Home Tuition"
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contactusdetail?.name === "" ||
      contactusdetail?.mobileNum === "" ||
      contactusdetail?.emailAdd === ""
    ) {
      toast("Fields can not be Empty Please Fill All the Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🤔",
      });
    } else if (contactusdetail?.name.length <= 3) {
      toast("Min 3 words allowed for Name", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🤔",
      });
    } else if (contactusdetail?.mobileNum.length !== 10) {
      toast("Please Enter a valid Mobile Number", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🤔",
      });
    } else {
      //console.log(contactusdetail);
      contactuspush(contactusdetail).then((response) => {
        toast(response, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          icon: "🤔",
        });
      });
      // setTimeout(() => {
      //   navigate("/");
      // }, 1000);
    }
  };
  return (
    <>
      <hr style={{ marginTop: "0px", marginBottom: "0px", color: "red" }} />
      <div
        style={{
          backgroundColor: "wheat",
          marginTop: "0px",
          //border: "2px solid green",
          display: "flex",
          padding: "10px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            //justifyContent: "space-between",
          }}
        >
          <i className="fa-sharp fa-solid fa-phone-volume"></i>&nbsp; &nbsp;
          <h5>8707258661</h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            //justifyContent: "space-between",
          }}
        >
          <i className="fa-solid fa-envelope"></i>&nbsp; &nbsp;
          <h5
            className="linkStyle"
            style={{ color: "black", cursor: "pointer" }}
            onClick={handleClick}
          >
            rajat.gupta.mart@gmail.com
          </h5>
        </div>
      </div>
      <hr style={{ marginTop: "0px", marginBottom: "40px", color: "red" }} />
      <div className="step2">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 className="desired_loc_head">
            <i>Contact-Us</i>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              name="name"
              value={contactusdetail?.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputNumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputMobile"
              name="mobileNum"
              value={contactusdetail?.mobileNum}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="emailAdd"
              value={contactusdetail?.emailAdd}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
