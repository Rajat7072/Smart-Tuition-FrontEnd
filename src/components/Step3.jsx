import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Notecontext from "../contextApi/Notecontext";

const Step3 = () => {
  const step3 = true;
  const [board, setBoard] = useState("");
  const step3context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step3context;
  const navigate = useNavigate();
  const handleClick = () => {
    if (board === "") {
      toast("Please select your Board! 🤔", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setApiDetail({ ...ApiDetail, board: board });
      navigate("/step4");
    }
  };
  const handleChange = (e) => {
    setBoard(e.target.value);
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step3={step3} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>Please Select the Board Student is following ?</h4>
        </div>
        <div className="form-check" style={{ marginTop: "20px" }}>
          <input
            className="form-check-input bold"
            type="radio"
            name="flexRadioDefault"
            id="Icse"
            value="ICSE BOARD"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>ICSE BOARD</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Cbse"
            value="CBSE BOARD"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>CBSE BOARD</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Up"
            value="UP BOARD"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>UP BOARD</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Nios"
            value="NIOS BOARD"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b> NIOS BOARD</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="StateBoard"
            value="STATE BOARD"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>STATE BOARD</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="University"
            value="UNIVERSITY"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>UNIVERSITY</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="Prepration"
            value="PREPARATION"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>PREPARATION</b>
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="other"
            value="OTHER"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            <b>OTHER</b>
          </label>
        </div>
        <button
          style={{ marginTop: "80px" }}
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

export default Step3;
