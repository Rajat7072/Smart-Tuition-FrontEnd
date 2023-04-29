import React from "react";
import ppl from "../images/people.png";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { addToCart } from "../createSlice/techSlice";
import { fetchAllTeacherDetails } from "../ApiCalls/teacherMapApi";

const TeacherProfileDetail = () => {
  const name_of_student = localStorage.getItem("studentName");
  const number_of_student = localStorage.getItem("ID_Number");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const handleDOB = (dateofbirth) => {
    const dob = new Date(dateofbirth);
    //const dob = new Date("2008-03-02");
    const currentDate = new Date();
    let age = currentDate.getFullYear() - dob.getFullYear();
    return age;
  };
  const handleDemo = (element) => {
    dispatch(addToCart(element));
  };
  useEffect(() => {
    const myResult = async () => {
      try {
        const result = await fetchAllTeacherDetails();
        //console.log(result);
        setLoading(false);
        setData(result);
      } catch (error) {
        //console.log(error);
      }
    };
    myResult();
  }, []);

  return (
    <>
      <hr style={{ marginTop: "0px", marginBottom: "2px" }} />
      {number_of_student !== null && name_of_student !== null && (
        <>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              padding: "5px",
              color: "black",
            }}
          >
            <h6 style={{ textDecoration: "underline" }}>
              <i>Note : Maximum Five Teachers can be Added to the Cart.</i>
            </h6>
          </div>
        </>
      )}
      {loading ? (
        <div className="step1">
          <Spinner />
        </div>
      ) : (
        data &&
        data.map((element) => (
          <div
            key={element._id}
            style={{
              border: "2px solid black",
              margin: "2px",
              padding: "10px",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <div style={{ marginRight: "20px" }}>
              {element.profilepicimg !== "" ? (
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
                  alt="Default"
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
              {number_of_student !== null && name_of_student !== null && (
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => handleDemo(element)}
                  >
                    Add For Demo
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default TeacherProfileDetail;
