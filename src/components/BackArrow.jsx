import React from "react";
import Previous from "../images/previous.png";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <img
      className="previous_arrow"
      src={Previous}
      alt="Back"
      onClick={() => {
        navigate(-1);
      }}
    />
  );
};

export default BackArrow;
