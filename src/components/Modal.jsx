import React from "react";
import { useNavigate } from "react-router-dom";
import thankyou from "../images/thank.gif";

const Modal = () => {
  const navigate = useNavigate();
  const handleSendBestSuitableTeachers = () => {
    navigate("/");
    localStorage.clear();
  };
  const handleSelectTeacher = () => {
    navigate("/teacherProfileDetail");
  };
  return (
    <>
      <div
        className="step2"
        style={{
          padding: "0px",
          marginTop: "50px",
          position: "relative",
        }}
      >
        <img src={thankyou} alt="Thank You" />
      </div>
      <div className="selectTeachersButtons">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleSelectTeacher}
          style={{ opacity: "0.9" }}
        >
          Click Here To Select Teachers &nbsp;
          <i className="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
        </button>
        <button
          type="button"
          className="btn btn-info"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={handleSendBestSuitableTeachers}
          style={{ opacity: "0.9", marginTop: "10px" }}
        >
          Send Best Suitable Teachers &nbsp;
          <i className="fa-sharp fa-solid fa-arrow-right-to-bracket"></i>
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Success 💯
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Your Enquiry has been succesfully submitted to us we will contact
              you soon 870-725-8661👍
              <br />
              Note: you can select Teachers According to your need.
              <br />
              Note: We can send Best suitable Teachers in your Area for you 🏫
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleSendBestSuitableTeachers}
              >
                Send Best suitable Teachers
              </button> */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
                // onClick={handleSelectTeacher}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
