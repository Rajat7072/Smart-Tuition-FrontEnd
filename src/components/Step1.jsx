import React from "react";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import Breadcrumps from "./Breadcrumps";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import Notecontext from "../contextApi/Notecontext";

const Step1 = () => {
  const navigate = useNavigate();
  const step1context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step1context;
  const [select_subject, setSelect_subject] = useState(
    "Please confirm your Subject"
  );
  const step1 = true;
  const handleClick = () => {
    if (select_subject === "Please confirm your Subject") {
      toast("Please select your subject! 😕", {
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
      console.log(select_subject);
      setApiDetail({ ...ApiDetail, subject: select_subject });
      navigate("/step2");
    }
  };
  const handleChange = (e) => {
    setSelect_subject(e.target.value);
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step1">
        <BackArrow />
        <div>
          <Breadcrumps step1={step1} />
        </div>
        <div>
          <h2>Learn with experts of your choice</h2>
        </div>
        <div style={{ marginTop: "8%" }}>
          <h5>Please Select the right fit tutor!</h5>
        </div>
        <div style={{ marginTop: "5px" }}>
          <h5>Which subjects do you want help in?</h5>
        </div>
        <div style={{ marginTop: "10px" }}>
          <select
            className="form-select form-select-sm"
            aria-label=".form-select-sm example"
            id="subjects"
            onChange={handleChange}
          >
            <option defaultValue>Please confirm your Subject</option>
            <option value="All Subjects">All Subjects</option>
            <option value="English">English</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Science">Science</option>
            <option value="Social Science">Social Science</option>
            <option value="Geography">Geography</option>
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Hindi">Hindi</option>
            <option value="Commerce">Commerce</option>
            <option value="Accounts">Accounts</option>
            <option value="Accountancy">Accountancy</option>
            <option value="Business Studies">Business Studies</option>
            <option value="Informatics Practices">Informatics Practices</option>
            <option value="Entrepreneurship">Entrepreneurship</option>
            <option value="Fashion Studies">Fashion Studies</option>
            <option value="Fine Arts">Fine Arts</option>
            <option value="Home Science">Home Science</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Music">Music</option>
            <option value="Dance">Dance</option>
          </select>
        </div>
        <div style={{ marginTop: "40px" }}>
          <p style={{ color: "grey", fontSize: "18px" }}>
            Your Search for Perfect home tutor ends here. Just fill out the
            details below & our team will find you "The Best" home tutor to help
            you or your kid with studies.
          </p>
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

export default Step1;
