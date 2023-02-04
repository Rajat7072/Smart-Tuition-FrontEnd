import React from "react";
import { useNavigate } from "react-router-dom";
import thankyou from "../images/thank.gif";

const Final = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 5000);
  return (
    <div className="step2" style={{ padding: "0px", marginTop: "50px" }}>
      <img style={{ height: "70vh" }} src={thankyou} alt="Thank You" />
    </div>
  );
};

export default Final;
