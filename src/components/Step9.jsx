import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useState, useContext, useEffect } from "react";
import Notecontext from "../contextApi/Notecontext";
import { toast } from "react-toastify";

const Step9 = () => {
  const [time, setTime] = useState("");
  const navigate = useNavigate();
  const step9context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step9context;
  useEffect(() => {
    if (
      ApiDetail.subject === "" ||
      ApiDetail.class_val === "" ||
      ApiDetail.board === "" ||
      ApiDetail.zip_address === "" ||
      ApiDetail.school === "" ||
      ApiDetail.student_name === "" ||
      ApiDetail.mobile_number === "" ||
      ApiDetail.email === "" ||
      ApiDetail.gender === "" ||
      ApiDetail.classes_in_a_weak === "" ||
      ApiDetail.day_preference === ""
    ) {
      navigate("/");
    } // eslint-disable-next-line
  }, []);
  const handleClick = () => {
    if (time === "") {
      toast("Please Enter your Time Preference 🤔", {
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
      setApiDetail({ ...ApiDetail, time_preference: time });
      navigate("/step10");
    }
  };
  const handleChange = (e) => {
    setTime(e.target.value);
  };
  const step9 = true;
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step9={step9} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>Please Enter your Time Preference ?</h4>
        </div>
        <div style={{ marginBottom: "80px", marginTop: "50px" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="1 Hour"
              name="time"
              onChange={handleChange}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <b> 1 Hour</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="1.5 Hour"
              name="time"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> 1.5 Hour</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="2 Hour"
              name="time"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> 2 Hour</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="time"
              value="As Recommended by Tutor"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> As Recommended by Tutor</b>
            </label>
          </div>
        </div>
        <div className="div_desired_loc_head">
          <h5 className="desired_loc_head" style={{ color: "grey" }}>
            More time You give More you Learn !
          </h5>
        </div>
        <button
          style={{ marginTop: "50px" }}
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step9;
