import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate();
  const handleSendBestSuitableTeachers = () => {
    navigate("/final");
    localStorage.clear();
  };
  const handleSelectTeacher = () => {
    navigate("/teacherProfileDetail");
  };
  return (
    <>
      {/* <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button> */}
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
              you soon 👍
              <br />
              Note: you can select Teachers According to your need.
              <br />
              Note: We can send Best suitable Teachers in your Area for you 🏫
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleSendBestSuitableTeachers}
              >
                Send Best suitable Teachers
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleSelectTeacher}
              >
                Proceed to select Teachers
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
