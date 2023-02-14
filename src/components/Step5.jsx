import React from "react";
import Breadcrumps from "./Breadcrumps";
import data from "../schoolData.json";
import Scrollbar from "./Scrollbar";
import { useState, useContext, useEffect } from "react";
import Notecontext from "../contextApi/Notecontext";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { toast } from "react-toastify";

const Step5 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      ApiDetail.subject === "" ||
      ApiDetail.class_val === "" ||
      ApiDetail.board === "" ||
      ApiDetail.zip_address === ""
    ) {
      navigate("/");
    } // eslint-disable-next-line
  }, []);
  const step5context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step5context;
  const handleClick = () => {
    if (School_word === "") {
      toast("Please fill your School Details! 🤔", {
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
      setApiDetail({ ...ApiDetail, school: School_word });
      //console.log(School_word);
      navigate("/step6");
    }
  };
  const step5 = true;
  const school_data = data;
  const [School_text_input, setSchool_text_input] = useState([]);
  const [School_word, setSchool_word] = useState("");
  const handleChange = (e) => {
    const searchWord = e.target.value;
    setSchool_word(searchWord);
    const newFilter = school_data.filter((value) => {
      return value.school.toLowerCase().includes(searchWord.toLowerCase());
    });
    setSchool_text_input(newFilter);
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step5={step5} />
        </div>
        <div className="div_desired_loc_head">
          <h4 className="desired_loc_head">
            Please Enter your school/college details ?
          </h4>
        </div>
        <div className="border_hover_search">
          <input
            style={{ width: "100%", border: "none", outline: "none" }}
            type="text"
            id="search"
            placeholder="Search your School Details"
            value={School_word}
            onChange={handleChange}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        {School_word.length !== 0 && School_text_input.length !== 0 && (
          <Scrollbar
            List_of_schools={School_text_input}
            school_value={setSchool_word}
            set_school_value={setSchool_text_input}
          />
        )}

        <div className="div_desired_loc_head">
          <h5 className="desired_loc_head" style={{ color: "grey" }}>
            We will try to find out Tutor who have already taught students of
            your school.
          </h5>
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

export default Step5;
