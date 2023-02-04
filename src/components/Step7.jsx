import React from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import Breadcrumps from "./Breadcrumps";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Notecontext from "../contextApi/Notecontext";

const Step7 = () => {
  const [class_weak, setClass_weak] = useState("");
  const step7context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step7context;
  const navigate = useNavigate();
  const handleClick = () => {
    if (class_weak === "") {
      toast.warn("Fields cann't be Empty 🤔", {
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
      setApiDetail({ ...ApiDetail, classes_in_a_weak: class_weak });
      navigate("/step8");
    }
  };
  const handleText = (e) => {
    setClass_weak(e.target.value);
    console.log(class_weak);
  };
  const step7 = true;
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step7={step7} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>How many classes a weak is Required ?</h4>
        </div>
        <div className="form-check" style={{ marginTop: "50px" }}>
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="1 class a weak"
            onChange={handleText}
            id="Daily"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            1 class a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="2 classes a weak"
            onChange={handleText}
            id="Alternate"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            2 classes a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="3 classes a weak"
            onChange={handleText}
            id="Weekends"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            3 classes a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="4 classes a weak"
            onChange={handleText}
            id="Sunday"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            4 classes a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="5 classes a weak"
            onChange={handleText}
            id="Sunday"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            5 classes a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="6 classes a weak"
            onChange={handleText}
            id="Sunday"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            6 classes a weak
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="class_weak"
            value="I will discuss with Tutor"
            onChange={handleText}
            id="Grade4"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            I will discuss with Tutor
          </label>
        </div>
        <div className="div_desired_loc_head">
          <h5 className="desired_loc_head" style={{ color: "grey" }}>
            We have tutors available for all the seven days of the week.
          </h5>
        </div>
        <button
          style={{ marginTop: "90px" }}
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

export default Step7;
