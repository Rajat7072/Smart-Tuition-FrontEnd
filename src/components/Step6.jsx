import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useState, useContext, useEffect } from "react";
import Notecontext from "../contextApi/Notecontext";
import { toast } from "react-toastify";

const Step6 = () => {
  const regexExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
  const [student_details, setStudent_details] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "Boy",
  });
  const step6context = useContext(Notecontext);
  useEffect(() => {
    if (
      ApiDetail.subject === "" ||
      ApiDetail.class_val === "" ||
      ApiDetail.board === "" ||
      ApiDetail.zip_address === "" ||
      ApiDetail.school === ""
    ) {
      navigate("/");
    } // eslint-disable-next-line
  }, []);
  const { ApiDetail, setApiDetail } = step6context;
  const handleChange = (e) => {
    setStudent_details({
      ...student_details,
      [e.target.name]: e.target.value,
    });
  };
  const step6 = true;
  const navigate = useNavigate();
  const handleClick = (e) => {
    if (
      student_details.name === "" ||
      student_details.email === "" ||
      student_details.gender === "" ||
      student_details.phone === ""
    ) {
      toast("Please Fill the details to Proceed forward! 🤔", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (
      student_details.phone.length !== 10 ||
      !Number.isInteger(Number(student_details.phone))
    ) {
      toast.warn(" Please Enter a valid 10 digit Mobile number 📱", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!regexExp.test(student_details.email)) {
      toast.warn(" Please Enter a valid Email Id 📧", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setApiDetail({
        ...ApiDetail,
        student_name: student_details.name,
        mobile_number: student_details.phone,
        email: student_details.email,
        gender: student_details.gender,
      });
      navigate("/step7");
    }
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step6={step6} />
        </div>
        <div className="div_desired_loc_head">
          <h4 className="desired_loc_head">Please Enter your details ?</h4>
        </div>
        <div style={{ marginTop: "60px" }}>
          <input
            style={{ width: "100%", border: "none" }}
            type="text"
            placeholder="Enter student's name"
            name="name"
            onChange={handleChange}
            value={student_details?.name}
            required="email"
          />
          <hr style={{ color: "blue", marginTop: "0px" }} />
          <input
            style={{
              width: "100%",
              marginTop: "15px",
              border: "none",
              // outline: "none",
            }}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your Watsapp/Phone Number"
            value={student_details?.phone}
            onChange={handleChange}
            required
          />
          <hr style={{ color: "blue", marginTop: "0px" }} />
          <input
            aria-describedby="emailHelp"
            style={{ width: "100%", marginTop: "15px", border: "none" }}
            type="email"
            placeholder="Enter your Email Address"
            name="email"
            value={student_details?.email}
            onChange={handleChange}
            required
          />
          <hr style={{ color: "blue", marginTop: "0px" }} />
        </div>
        <div
          className="Student_is_radio"
          style={{
            display: "flex",
            alignContent: "center",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          <h5>Student Is</h5>
          <div
            className="form-check"
            style={{ marginRight: "10px", marginLeft: "15px" }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              value="Boy"
              onChange={handleChange}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Boy
            </label>
          </div>
          <div className="form-check" style={{ marginRight: "15px" }}>
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              onChange={handleChange}
              value="Girl"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Girl
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault3"
              onChange={handleChange}
              value="Do not want to disclose"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Do not want to disclose
            </label>
          </div>
        </div>

        <button
          type="button"
          className="btn btn-primary"
          style={{ marginTop: "12%" }}
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step6;
