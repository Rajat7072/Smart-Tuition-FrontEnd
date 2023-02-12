import React from "react";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/step1");
  };
  return (
    <div className="setText">
      <b
        className="setTextBorder"
        style={{ fontSize: "20px", marginTop: "2px", marginRight: "4px" }}
      >
        Looking For A Tutor
      </b>
      <div className="d-flex mx-2">
        <button
          className="btn btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Click Here
        </button>
      </div>
    </div>
  );
};
export default Searchbox;
