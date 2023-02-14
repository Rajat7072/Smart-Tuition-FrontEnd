import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import Notecontext from "../contextApi/Notecontext";

const Step2 = () => {
  const [class_value, setClass_value] = useState("");
  const step2context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step2context;
  const navigate = useNavigate();
  useEffect(() => {
    if (ApiDetail.subject === "") {
      navigate("/");
    } // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    if (class_value === "") {
      toast("Please select your class! 🤔", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setApiDetail({ ...ApiDetail, class_val: class_value });
      navigate("/step3");
      //console.log(class_value);
    }
  };
  const handleChange = (e) => {
    setClass_value(e.target.value);
  };
  const step2 = true;
  return (
    <>
      <hr style={{ marginTop: "0px" }} />

      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step2={step2} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>Select The class you want to Study ?</h4>
        </div>

        <div className="form-check" style={{ marginTop: "10px" }}>
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="KG"
            value="KG"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Kinder Garten(KG)
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade1"
            value="Grade1"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade I
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade2"
            value="Grade2"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade II
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade3"
            value="Grade3"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade III
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade4"
            value="Grade4"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade IV
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade5"
            value="Grade5"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade V
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade6"
            value="Grade6"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade VI
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade7"
            value="Grade7"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade VII
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade8"
            value="Grade8"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade VIII
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade9"
            value="Grade9"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade IX
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade10"
            value="Grade10"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade X
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade11"
            value="Grade11"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade XI
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Grade12"
            value="Grade12"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Grade XII
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Neet"
            value="Neet"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Neet
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Iit"
            value="IIT"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            IIT-JEE
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Diploma"
            value="Diploma"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Diploma
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Graduation"
            value="Graduation"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Graduation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="PostGraduation"
            value="PostGraduation"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Post Graduation
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="other"
            value="other"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Others
          </label>
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

export default Step2;
