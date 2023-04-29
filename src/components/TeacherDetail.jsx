import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TeacherDetailPush } from "../ApiCalls/TeacherDetailApi";
import Profilepic from "./Profilepic";
import { useNavigate } from "react-router-dom";

const TeacherDetail = () => {
  //var FinalAadhar = "";
  const navigate = useNavigate();
  const name_of_techer = localStorage.getItem("nameData");
  const phone_of_teacher = localStorage.getItem("phoneData");
  //console.log(name_of_techer);
  const currentDate = new Date().toISOString().split("T")[0];
  const [teacherDetail, setTeacherDetail] = useState({
    profileName: name_of_techer,
    profilepicimg: "",
    DOB: "",
    TGender: "",
    Add: "",
    Qualification: "",
    TSubject: "",
    TClasses: "",
    AadharCardNum: "",
    FeeAsked: "",
    TeacherMobile: phone_of_teacher,
    TeacherExperiance: "",
    TeacherAbout: "",
  });
  const [AddressTeacher, setAddressTeacher] = useState({
    HouseNo: "",
    Street: "",
    City: "",
    Pincode: "",
  });
  const handleAddressT = (e) => {
    e.preventDefault();
    setAddressTeacher({ ...AddressTeacher, [e.target.name]: e.target.value });
    // setTeacherDetail({
    //   ...teacherDetail,
    //   // eslint-disable-next-line
    //   ["Add"]: `HouseNo: ${AddressTeacher?.HouseNo} Street: ${AddressTeacher?.Street} City: ${AddressTeacher?.City} Pincode: ${AddressTeacher?.Pincode}`,
    // });
  };
  // const handleAboutTeacher = (e) => {
  //   let descval = e.target.value;
  //   if (descval.length > 100) {
  //     descval.trim(0, 100);
  //     setTeacherDetail({ ...teacherDetail, [e.target.name]: descval });
  //   } else {
  //     setTeacherDetail({ ...teacherDetail, [e.target.name]: e.target.value });
  //   }
  // };
  const [AadharNum, setAadharNum] = useState({
    Aadhar1: "",
    Aadhar2: "",
    Aadhar3: "",
  });
  const handleAadhar = (e) => {
    e.preventDefault();
    setAadharNum({ ...AadharNum, [e.target.name]: e.target.value });
    //FinalAadhar = `${AadharNum.Aadhar1} - ${AadharNum.Aadhar2} - ${AadharNum.Aadhar3} - ${AadharNum.Aadhar4}`;
    //console.log(FinalAadhar);
    // setTeacherDetail({
    //   ...teacherDetail,
    //   // eslint-disable-next-line
    //   ["AadharCardNum"]: `${AadharNum.Aadhar1} - ${AadharNum.Aadhar2} - ${AadharNum.Aadhar3} - ${AadharNum.Aadhar4}`,
    // });
  };
  useEffect(() => {
    if (name_of_techer === null) {
      navigate("/");
    }
  }, [name_of_techer, navigate]);

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
  }, [AadharNum]);
  useEffect(() => {
    setTeacherDetail({
      ...teacherDetail,
      // eslint-disable-next-line
      ["Add"]: `House No: ${AddressTeacher?.HouseNo}, Street: ${AddressTeacher?.Street}, City: ${AddressTeacher?.City}, Pincode: ${AddressTeacher?.Pincode}`,
    });
    // eslint-disable-next-line
  }, [AddressTeacher]);

  const handleSubmit = (e) => {
    //console.log(teacherDetail);
    e.preventDefault();
    // if (teacherDetail?.profilepicimg === "") {
    //   toast("Profile Picture is Required", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     icon: "😅",
    //   });
    // } else
    if (
      AadharNum?.Aadhar1 === "" ||
      AadharNum?.Aadhar2 === "" ||
      AadharNum?.Aadhar3 === "" ||
      AadharNum?.Aadhar4 === "" ||
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
      isNaN(teacherDetail?.TeacherMobile)
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
    } else {
      console.log(teacherDetail);
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
          <h2>
            <i>Hi, {name_of_techer}</i>
            <hr style={{ color: "red" }} />
          </h2>
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
              type="text"
              className="form-control"
              placeholder="House No    ( Eg: 00/A )"
              name="HouseNo"
              //value={teacherDetail?.Add?.HouseNo}
              onChange={handleAddressT}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Street   ( Rajeev Nagar )"
              name="Street"
              //value={teacherDetail?.Add?.Street}
              onChange={handleAddressT}
            />
            <input
              type="text"
              className="form-control my-2"
              placeholder="city   ( Kanpur )"
              name="City"
              //value={teacherDetail?.Add?.City}
              onChange={handleAddressT}
            />
            <input
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
              Prefferred Subjects To Teach
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputSubject"
              placeholder="Eg: Hindi,Maths,Science (Seprated by commas)"
              name="TSubject"
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
                type="text"
                className="form-control"
                placeholder="0000"
                maxLength="4"
                name="Aadhar1"
                //value={teacherDetail?.AadharCardNum[0]?.Aadhar1}
                onChange={handleAadhar}
              />
              <input
                type="text"
                className="form-control mx-2"
                placeholder="0000"
                maxLength="4"
                name="Aadhar2"
                //value={teacherDetail?.AadharCardNum?.Aadhar2}
                onChange={handleAadhar}
              />
              <input
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
                placeholder="About Yourself"
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
