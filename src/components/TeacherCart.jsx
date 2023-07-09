import React from "react";
import ppl from "../images/people.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../createSlice/techSlice";
import { useNavigate } from "react-router-dom";
import { CartDetailPush } from "../ApiCalls/CartDetailApi";
import Previous from "../images/previous.png";
import { toast } from "react-toastify";

const TeacherCart = () => {
  const [myVarAble, setMyVarAble] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state);
  const name_of_student = localStorage.getItem("studentName");
  const number_of_student = localStorage.getItem("ID_Number");
  const [teacherCart] = useState({
    studentName: name_of_student,
    studentPhone: number_of_student,
    teacherDetails: [...data.teacherCart],
  });

  useEffect(() => {
    if (name_of_student === null || number_of_student === null) {
      localStorage.clear();
      //navigate("/");
      window.location.href = "/";
    } else if (data.teacherCart.length === 0) {
      setMyVarAble(false);
      setTimeout(() => {
        navigate("/teacherProfileDetail");
      }, 800);
    }
  }, [navigate, data, name_of_student, number_of_student]);

  const handleDemo = (element) => {
    dispatch(removeFromCart(element));
  };
  const handleDOB = (dateofbirth) => {
    const dob = new Date(dateofbirth);
    //const dob = new Date("2008-03-02");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    return age;
  };
  //const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  const handleSubmitData = async () => {
    toast("success: Please wait we are processing your request 👌", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      icon: "✅",
    });
    await CartDetailPush(teacherCart);
  };
  return (
    <>
      <div style={{ padding: "5px", display: "flex" }}>
        <img
          className="previous_arrow"
          src={Previous}
          alt="Back"
          onClick={() => {
            navigate("/teacherProfileDetail");
          }}
        />
      </div>
      {data.teacherCart.length === 0 ? (
        <div
          className="container"
          style={{
            textAlign: "center",
            border: "2px solid black",
            background: "aqua",
          }}
        >
          <h4>Your cart is currenty Empty</h4>
        </div>
      ) : (
        data.teacherCart.map((element) => (
          <div
            key={element._id}
            style={{
              border: "3px solid black",
              marginBottom: "12px",
              padding: "10px",
              display: "flex",
              borderRadius: "10px",
              boxShadow: "-5px 10px red",
              //background: "#E4D9EB",
              //opacity: "0.2",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              {element.profilepicimg ? (
                <img
                  style={{
                    borderRadius: "10%",
                    border: "1px solid black",
                    marginTop: "20px",
                    width: "110px",
                    height: "110px",
                    padding: "5px",
                  }}
                  src={element.profilepicimg}
                  alt="profile"
                />
              ) : (
                <img
                  style={{
                    borderRadius: "10%",
                    border: "1px solid black",
                    marginTop: "20px",
                    width: "110px",
                    height: "110px",
                    padding: "5px",
                  }}
                  src={ppl}
                  alt="Default"
                />
              )}
            </div>
            <div>
              <div className="card-body">
                <h5 className="card-title">Mentor {element.profileName}</h5>
                <p className="card-text">{element.TeacherAbout}</p>
              </div>
              <div className="MentorProfileDetail" style={{ display: "flex" }}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Highest Qualification : {element.Qualification}
                  </li>
                  <li className="list-group-item">
                    Experience : {element.TeacherExperiance}
                  </li>
                  <li className="list-group-item">
                    Average Fees : {element.FeeAsked}
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    Age : {handleDOB(element.DOB)}
                  </li>
                  <li className="list-group-item">
                    Subject Experties : {element.TSubject}
                  </li>
                  <li className="list-group-item">
                    Class Experties : {element.TClasses}
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={() => handleDemo(element)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "5px",
          marginRight: "5px",
        }}
      >
        <button
          style={{ marginTop: "5px", marginBottom: "10px" }}
          type="button"
          className="btn btn-dark"
          disabled={myVarAble ? false : true}
          onClick={handleSubmitData}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default TeacherCart;
