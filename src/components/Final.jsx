import React from "react";
//import { useNavigate } from "react-router-dom";
import thankyou from "../images/thank.gif";
import { useEffect } from "react";

const Final = () => {
  //const navigate = useNavigate();
  localStorage.clear();
  useEffect(() => {
    setTimeout(() => {
      //navigate("/");
      window.location.href = "/";
    }, 5000);
  }, []);

  return (
    <div className="step2" style={{ padding: "0px", marginTop: "50px" }}>
      <img style={{ height: "70vh" }} src={thankyou} alt="Thank You" />
    </div>
  );
};

export default Final;
