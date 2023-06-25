import React from "react";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { TeacherDetailPush } from "../ApiCalls/TeacherDetailApi";
import Profilepic from "./Profilepic";
import Notecontext from "../contextApi/Notecontext";
// import { useNavigate } from "react-router-dom";

const TeacherDetail = () => {
  //var FinalAadhar = "";
  // const navigate = useNavigate();
  var name_of_techer,
    phone_of_teacher = null;
  const EditProfile = useContext(Notecontext);
  const { edit, details } = EditProfile;
  console.log("Edit buttton ka kamal", edit, details);
  console.log("I am first", details?.TSubject);
  if (edit) {
    name_of_techer = details?.profileName;
    phone_of_teacher = details?.TeacherMobile;
    console.log("teachgername", name_of_techer);
  } else {
    name_of_techer = localStorage.getItem("nameData");
    phone_of_teacher = localStorage.getItem("phoneData");
  }

  const currentDate = new Date().toISOString().split("T")[0];

  const [teacherDetail, setTeacherDetail] = useState({
    profileName: name_of_techer === null ? "" : name_of_techer,
    profilepicimg:
      Object.keys(details).length === 0 ? "" : details?.profilepicimg,
    DOB: Object.keys(details).length === 0 ? "" : details?.DOB,
    TGender: "",
    Add: "",
    Qualification:
      Object.keys(details).length === 0 ? "" : details?.Qualification,
    TSubject: Object.keys(details).length === 0 ? "" : details?.TSubject,
    TClasses: Object.keys(details).length === 0 ? "" : details?.TClasses,
    AadharCardNum: "",
    FeeAsked: Object.keys(details).length === 0 ? "" : details?.FeeAsked,
    TeacherMobile: phone_of_teacher === null ? "" : phone_of_teacher,
    TeacherExperiance:
      Object.keys(details).length === 0 ? "" : details?.TeacherExperiance,
    TeacherAbout:
      Object.keys(details).length === 0 ? "" : details?.TeacherAbout,
  });
  const [AddressTeacher, setAddressTeacher] = useState({
    HouseNo:
      Object.keys(details).length === 0
        ? ""
        : details?.Add?.split(": ")[1].split(",")[0],
    Street:
      Object.keys(details).length === 0
        ? ""
        : details?.Add?.split(": ")[2].split(",")[0],
    City:
      Object.keys(details).length === 0
        ? ""
        : details?.Add?.split(": ")[3].split(",")[0],
    Pincode:
      Object.keys(details).length === 0
        ? ""
        : details?.Add?.split(": ")[4].split(",")[0],
  });
  const handleAddressT = (e) => {
    e.preventDefault();
    setAddressTeacher({ ...AddressTeacher, [e.target.name]: e.target.value });
  };
  const [AadharNum, setAadharNum] = useState({
    Aadhar1:
      Object.keys(details).length === 0
        ? ""
        : details?.AadharCardNum?.split(" - ")[0],
    Aadhar2:
      Object.keys(details).length === 0
        ? ""
        : details?.AadharCardNum?.split(" - ")[1],
    Aadhar3:
      Object.keys(details).length === 0
        ? ""
        : details?.AadharCardNum?.split(" - ")[2],
  });
  const handleAadhar = (e) => {
    e.preventDefault();
    setAadharNum({ ...AadharNum, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTeacherDetail({ ...teacherDetail, [e.target.name]: e.target.value });
    //console.log(teacherDetail);
  };
  useEffect(() => {
    setTeacherDetail({
      ...teacherDetail,
      // eslint-disable-next-line
      ["AadharCardNum"]: `${AadharNum.Aadhar1} - ${AadharNum.Aadhar2} - ${AadharNum.Aadhar3}`,
    });
    // eslint-disable-next-line
  }, [AadharNum, details]);
  useEffect(() => {
    setTeacherDetail({
      ...teacherDetail,
      // eslint-disable-next-line
      ["Add"]: `House No: ${AddressTeacher?.HouseNo}, Street: ${AddressTeacher?.Street}, City: ${AddressTeacher?.City}, Pincode: ${AddressTeacher?.Pincode}`,
    });
    // eslint-disable-next-line
  }, [AddressTeacher, details]);

  useEffect(() => {
    if (edit) {
      const checkboxValueApi = details?.TGender;
      const checkbox = document.getElementById("flexRadioDefault1");
      checkbox.checked = checkboxValueApi;
      const AadharValue1 = document.getElementById("Aadhar1");
      const AadharValue2 = document.getElementById("Aadhar2");
      const AadharValue3 = document.getElementById("Aadhar3");
      AadharValue1.value = details?.AadharCardNum?.split(" - ")[0];
      AadharValue2.value = details?.AadharCardNum?.split(" - ")[1];
      AadharValue3.value = details?.AadharCardNum?.split(" - ")[2];
      const AddressValue1 = document.getElementById("Address1");
      const AddressValue2 = document.getElementById("Address2");
      const AddressValue3 = document.getElementById("Address3");
      const AddressValue4 = document.getElementById("Address4");
      AddressValue1.value = details?.Add?.split(": ")[1].split(",")[0];
      AddressValue2.value = details?.Add?.split(": ")[2].split(",")[0];
      AddressValue3.value = details?.Add?.split(": ")[3].split(",")[0];
      AddressValue4.value = details?.Add?.split(": ")[4].split(",")[0];
    }
  }, [details, edit]);
  const handleSubmit = (e) => {
    //console.log(teacherDetail);
    e.preventDefault();
    if (
      AadharNum?.Aadhar1 === "" ||
      AadharNum?.Aadhar2 === "" ||
      AadharNum?.Aadhar3 === "" ||
      isNaN(AadharNum?.Aadhar1) ||
      isNaN(AadharNum?.Aadhar2) ||
      isNaN(AadharNum?.Aadhar3)
    ) {
      toast("Please Enter A valid Aadhar Card Number", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      teacherDetail?.TeacherMobile === "" ||
      isNaN(teacherDetail?.TeacherMobile) ||
      teacherDetail?.TeacherMobile === null
    ) {
      toast("Please Enter A valid Mobile Number", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      AddressTeacher?.HouseNo === "" ||
      AddressTeacher?.Street === "" ||
      AddressTeacher?.City === "" ||
      AddressTeacher?.Pincode === ""
    ) {
      toast("Address Feilds can not be Empty", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      teacherDetail?.DOB === "" ||
      teacherDetail?.TGender === "" ||
      teacherDetail?.Qualification === "" ||
      teacherDetail?.TSubject === "" ||
      teacherDetail?.FeeAsked === "" ||
      teacherDetail?.TeacherExperiance === "" ||
      teacherDetail?.TClasses === "" ||
      teacherDetail?.TeacherAbout === ""
    ) {
      toast("Please fill All the Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (teacherDetail?.DOB > currentDate) {
      toast("Date of Birth cannot be future Date", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (
      teacherDetail?.profileName === "" ||
      teacherDetail?.profileName === null
    ) {
      toast("Please Enter Your Name", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else {
      //console.log(teacherDetail);
      toast("✅ Please wait we are Processing your Request", {
        position: "bottom-right",
        autoClose: 2500,
        theme: "light",
        icon: "😅",
      });
      TeacherDetailPush(teacherDetail);
      //console.log(teacherDetail);
    }
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="detailprofil"
        >
          {edit || name_of_techer === null ? (
            <div className="mb-3">
              <label htmlFor="exampleInputClasses" className="form-label">
                Enter Your Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Eg: Jhon Doe"
                name="profileName"
                value={teacherDetail?.profileName}
                onChange={handleChange}
              />
            </div>
          ) : (
            <h2>
              <i>Hi, {name_of_techer}</i>
              <hr style={{ color: "red" }} />
            </h2>
          )}
          <Profilepic
            teacherDetail={teacherDetail}
            setTeacherDetail={setTeacherDetail}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleInputDate"
              aria-describedby="name"
              name="DOB"
              value={teacherDetail?.DOB}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Gender
            </label>
            <div style={{ display: "flex" }}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="TGender"
                  id="flexRadioDefault1"
                  value="Male"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Male
                </label>
              </div>
              <div className="form-check mx-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="TGender"
                  id="flexRadioDefault1"
                  value="Female"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mb-3 my-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              id="Address1"
              type="text"
              className="form-control"
              placeholder="House No    ( Eg: 00/A )"
              name="HouseNo"
              //value={teacherDetail?.Add?.HouseNo}
              onChange={handleAddressT}
            />
            <input
              id="Address2"
              type="text"
              className="form-control my-2"
              placeholder="Street   ( Rajeev Nagar )"
              name="Street"
              //value={teacherDetail?.Add?.Street}
              onChange={handleAddressT}
            />
            <input
              id="Address3"
              type="text"
              className="form-control my-2"
              placeholder="city   ( Kanpur )"
              name="City"
              //value={teacherDetail?.Add?.City}
              onChange={handleAddressT}
            />
            <input
              id="Address4"
              type="text"
              className="form-control my-2"
              placeholder="Pincode    ( 208022 )"
              name="Pincode"
              //value={teacherDetail?.Add?.Pincode}
              onChange={handleAddressT}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputQualification" className="form-label">
              Highest Qualification
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputQualification"
              placeholder="Eg: B.Tech (CSJMU Kanpur)"
              name="Qualification"
              value={teacherDetail?.Qualification}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputSubject" className="form-label">
              Preferred Subjects To Teach
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSubject"
              placeholder="Eg: Hindi,Maths,Science (Seprated by commas)"
              name="TSubject"
              value={teacherDetail?.TSubject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputClasses" className="form-label">
              Prefferred Classes To Teach
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSubject"
              placeholder="Eg: Class KG to Class 12th"
              name="TClasses"
              value={teacherDetail?.TClasses}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAdhar" className="form-label">
              Enter Your Aadhar Number
            </label>
            <div style={{ display: "flex" }}>
              <input
                id="Aadhar1"
                type="text"
                className="form-control"
                placeholder="0000"
                maxLength="4"
                name="Aadhar1"
                //value={teacherDetail?.AadharCardNum[0]?.Aadhar1}
                onChange={handleAadhar}
              />
              <input
                id="Aadhar2"
                type="text"
                className="form-control mx-2"
                placeholder="0000"
                maxLength="4"
                name="Aadhar2"
                //value={teacherDetail?.AadharCardNum?.Aadhar2}
                onChange={handleAadhar}
              />
              <input
                id="Aadhar3"
                type="text"
                className="form-control mx-2"
                placeholder="0000"
                maxLength="4"
                name="Aadhar3"
                //value={teacherDetail?.AadharCardNum?.Aadhar3}
                onChange={handleAadhar}
              />
              {/* <input
                type="text"
                className="form-control"
                placeholder="0000"
                maxLength="4"
                name="Aadhar4"
                //value={teacherDetail?.AadharCardNum?.Aadhar4}
                onChange={handleAadhar}
              /> */}
            </div>
            <div className="mb-3 my-3">
              <label htmlFor="exampleInputSubject" className="form-label">
                Fee Details
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputSubject"
                placeholder="Eg: 1000-2000 Per Month"
                name="FeeAsked"
                value={teacherDetail?.FeeAsked}
                onChange={handleChange}
              />
            </div>
            <>
              {edit || phone_of_teacher === null ? (
                <div className="mb-3 my-3">
                  <label htmlFor="exampleInputSubject" className="form-label">
                    Contact Details
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSubject"
                    name="TeacherMobile"
                    maxLength="10"
                    value={teacherDetail?.TeacherMobile}
                    placeholder="Eg : 8707258661"
                    onChange={handleChange}
                  />
                </div>
              ) : (
                <div className="mb-3 my-3">
                  <label htmlFor="exampleInputSubject" className="form-label">
                    Contact Details
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputSubject"
                    name="TeacherMobile"
                    maxLength="10"
                    value={teacherDetail?.TeacherMobile}
                    placeholder="Eg : 8707258661"
                    readOnly
                    //onChange={handleChange}
                  />
                </div>
              )}
            </>
            <div className="mb-3 my-3">
              <label htmlFor="exampleInputSubject" className="form-label">
                Teaching Experiance
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputExp"
                placeholder="Eg: 5 years"
                name="TeacherExperiance"
                value={teacherDetail?.TeacherExperiance}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3 my-3">
              <textarea
                rows={4}
                cols={5}
                type="text"
                className="form-control"
                id="exampleInputExp"
                placeholder="About Yourself *"
                name="TeacherAbout"
                maxLength={100}
                value={teacherDetail?.TeacherAbout}
                onChange={handleChange}
              />
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "end",
              }}
            >
              {`${teacherDetail.TeacherAbout?.length}/100`}
            </div>
          </div>
          <div>
            <h6 style={{ fontSize: "10px" }}>
              Note : Please Enter the Details in proper Eg format to have
              Parents read your details Appropriately
            </h6>
          </div>
          <div style={{ width: "21%", cursor: "pointer" }}>
            <h6 className="Select_hover">Already Registered Login</h6>
          </div>
          <button
            style={{ width: "100%" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default TeacherDetail;
