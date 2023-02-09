import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import Notecontext from "../contextApi/Notecontext";

const Step8 = () => {
  const [day, setDay] = useState([]);
  const navigate = useNavigate();
  const step8context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step8context;
  const handleClick = () => {
    if (day === "") {
      toast("Please Enter your Days Preference 🤔", {
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
      setApiDetail({ ...ApiDetail, day_preference: day });
      navigate("/step9");
    }
  };
  const handleChange = (e) => {
    //console.log(e.target.value);
    if (day.includes(e.target.value)) {
      setDay(day.filter((item) => item !== e.target.value));
    } else {
      setDay([...day, e.target.value]);
    }
    //console.log(day);
  };
  const step8 = true;
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step8={step8} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>Please Enter your Days Preference ?</h4>
        </div>
        <div style={{ marginBottom: "80px", marginTop: "50px" }}>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Sunday"
              onChange={handleChange}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <b> Sunday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Monday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Monday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Tuesday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Tuesday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Wednesday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Wednesday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Thursday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Thursday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Friday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Friday</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Saturday"
              onChange={handleChange}
              id="flexCheckChecked"
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Saturday</b>
            </label>
          </div>
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

export default Step8;
