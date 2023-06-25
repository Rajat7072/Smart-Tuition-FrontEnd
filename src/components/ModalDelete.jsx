import React from "react";
import { deleteTeacher } from "../ApiCalls/DeleteTeacherApi";

const ModalDelete = (probs) => {
  const handleclick = () => {
    deleteTeacher();
  };
  console.log(probs.name);
  return (
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
              Mentor {probs.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <b>Are you Sure You want to delete Your Profile ❌</b>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleclick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
