import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import BackArrow from "./BackArrow";
import Notecontext from "../contextApi/Notecontext";
import { detailPush } from "../ApiCalls/DetailApi";
import { useNavigate } from "react-router-dom";
// import Modal from "./Modal";

const Step10 = () => {
  const navigate = useNavigate();
  const step10context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step10context;
  // const [modalEnable, setModalEnable] = useState(false);
  const [pref_Text, setpref_Text] = useState({
    remark_if_any: "",
    slot_preference: "",
    age_of_taecher: "",
    gender_of_taecher: "",
    taecher_qualification_detail: "",
    Monthly_Fees: "",
  });

  useEffect(() => {
    if (
      ApiDetail?.subject === "" ||
      ApiDetail?.class_val === "" ||
      ApiDetail?.board === "" ||
      ApiDetail?.zip_address === "" ||
      ApiDetail?.school === "" ||
      ApiDetail?.student_name === "" ||
      ApiDetail?.mobile_number === "" ||
      ApiDetail?.email === "" ||
      ApiDetail?.gender === "" ||
      ApiDetail?.classes_in_a_weak === "" ||
      ApiDetail?.day_preference === "" ||
      ApiDetail?.time_preference === ""
    ) {
      navigate("/");
    }
  }, [navigate, ApiDetail]);

  const handleClick = async () => {
    if (ApiDetail.time_preference === "") {
      navigate("/");
      toast(
        "Please Enter Your Details Again Page reload leads to Data loss! 🤔",
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    } else if (
      pref_Text.slot_preference === "" ||
      pref_Text.age_of_taecher === "" ||
      pref_Text.gender_of_taecher === "" ||
      pref_Text?.Monthly_Fees === ""
    ) {
      toast.warn("Please Fill All the Details 🤔", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (pref_Text?.taecher_qualification_detail.length > 50) {
      toast.warn("We do have not any teacher with such a higher Education 😲", {
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
      setApiDetail({
        ...ApiDetail,
        ...pref_Text,
      });
      localStorage.setItem("cartQtyDetails", 0);
      localStorage.setItem("studentName", ApiDetail?.student_name);
      localStorage.setItem("ID_Number", ApiDetail?.mobile_number);
      detailPush(ApiDetail);
      navigate("/modal");
    }
  };

  const handleText = (e) => {
    setpref_Text({ ...pref_Text, [e.target.name]: e.target.value });
    setApiDetail({
      ...ApiDetail,
      ...{ ...pref_Text, [e.target.name]: e.target.value },
    });
  };

  // const handleSelectTeacher = () => {
  //   toast("This feature is under Development! 😅", {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });
  // };
  const step10 = true;
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step10={step10} />
        </div>
        <div
          style={{
            marginTop: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>More Preferences</h4>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Preferred Time slot :</h5>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Morning slot (6:00 AM to 8:00 AM)"
              id="flexCheckDefault"
              name="slot_preference"
              onChange={handleText}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              <b> Morning slot (6:00 AM to 8:00 AM)</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="AfterNoon Slot (3:00 PM to 6:00 PM)"
              id="flexCheckChecked"
              name="slot_preference"
              onChange={handleText}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> AfterNoon Slot (3:00 PM to 6:00 PM)</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="Evening Slot (7:00 PM to 10:00 PM)"
              id="flexCheckChecked"
              name="slot_preference"
              onChange={handleText}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> Evening Slot (7:00 PM to 10:00 PM)</b>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              value="I will discuss with Tutor"
              id="flexCheckChecked"
              name="slot_preference"
              onChange={handleText}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              <b> I will discuss with Tutor</b>
            </label>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Age of Tutor :</h5>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="20 to 30"
                id="flexCheckDefault"
                name="age_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <b> 20 to 30</b>
              </label>
            </div>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="30 to 45"
                id="flexCheckChecked"
                name="age_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <b> 30 to 45</b>
              </label>
            </div>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="45 above"
                id="flexCheckChecked"
                name="age_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <b> 45 above</b>
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="Any"
                id="flexCheckChecked"
                name="age_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <b> Any</b>
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Gender Preference :</h5>
          </div>
          <div style={{ display: "flex" }}>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="Male"
                id="flexCheckDefault"
                name="gender_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <b> Male</b>
              </label>
            </div>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="Female"
                id="flexCheckChecked"
                name="gender_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <b> Female</b>
              </label>
            </div>
            <div className="form-check margin_right">
              <input
                className="form-check-input"
                type="radio"
                value="Any"
                id="flexCheckChecked"
                name="gender_of_taecher"
                onChange={handleText}
              />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                <b> Any</b>
              </label>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Budget (Fees) -Per Month :</h5>
          </div>
          <input
            style={{ width: "100%", border: "none", padding: "5px" }}
            type="text"
            placeholder="Eg 2500-3000"
            name="Monthly_Fees"
            value={pref_Text?.Monthly_Fees}
            onChange={handleText}
          />
          <hr style={{ color: "blue", marginTop: "0px" }} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Qualification Details (if Any) :</h5>
          </div>
          <input
            style={{ width: "100%", border: "none", padding: "5px" }}
            type="text"
            placeholder="Enter Qualification Details"
            name="taecher_qualification_detail"
            value={pref_Text?.taecher_qualification_detail}
            onChange={handleText}
          />
          <hr style={{ color: "blue", marginTop: "0px" }} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ marginBottom: "15px" }}>
            <h5 style={{ color: "blue" }}>Remarks (if Any) :</h5>
          </div>
          <textarea
            style={{ width: "100%", padding: "5px" }}
            type="text"
            placeholder="Please tell your teacher little bit about your Expectations"
            rows={4}
            cols={50}
            value={pref_Text?.remark_if_any}
            onChange={handleText}
            name="remark_if_any"
            maxLength={500}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          {`${pref_Text.remark_if_any?.length}/500`}
        </div>
        {/* <div
          className="Select_hover"
          style={{ width: "30%" }}
          onClick={handleSelectTeacher}
        >
          <b style={{ marginRight: "5px" }}>Click Here To Select Tutor</b>
          <i className="fa-solid fa-arrow-right"></i>
        </div> */}
        <button
          type="button"
          style={{ marginTop: "50px" }}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit
        </button>
        {/* {{ modalEnable } === true && <Modal />} */}
      </div>
    </>
  );
};
export default Step10;
