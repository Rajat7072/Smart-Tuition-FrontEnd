import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
import { fetchAllStudentRequirement } from "../ApiCalls/studentRequirement";

const StudentRequirement = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const myResult = async () => {
      try {
        const result = await fetchAllStudentRequirement();
        //console.log(result);
        setLoading(false);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    myResult();
  }, []);
  const handleAddress = (element) => {
    return `${element.zip_address.Addressone} ${element.zip_address.Addresstwo}`;
  };
  const handleDays = (element) => {
    let arr = element.map((currentElm) => {
      return currentElm + ", ";
    });
    return arr;
  };
  return (
    <>
      <hr style={{ marginTop: "0px", marginBottom: "2px" }} />
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
            <i>Note : For any queries please call 8707258661.</i>
          </h6>
        </div>
      </>
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
            <div>
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ textDecoration: "underline" }}
                >
                  {element.student_name}
                </h5>
                <p className="card-text">
                  <b style={{ textDecoration: "underline" }}>
                    {element.remark_if_any === ""
                      ? "Teacher should be Polite and Punctual."
                      : element.remark_if_any}
                  </b>
                </p>
              </div>
              <div
                className="MentorProfileDetail"
                style={{
                  display: "flex",
                  fontWeight: "bold",
                }}
              >
                <ul className="list-group list-group-flush borderRequirement">
                  <li className="list-group-item">
                    Teacher Qualification :
                    {element.taecher_qualification_detail === ""
                      ? "Teacher should be Convent Educated"
                      : element.taecher_qualification_detail}
                  </li>
                  <li className="list-group-item">
                    Teacher Age : {element.age_of_taecher}
                  </li>
                  <li className="list-group-item">
                    Monthly Fees : {element.Monthly_Fees}
                  </li>
                  <li className="list-group-item">
                    Time : {element.time_preference}
                  </li>
                </ul>
                <ul className="list-group list-group-flush borderRequirement">
                  <li className="list-group-item">
                    Teacher Gender : {element.gender_of_taecher}
                  </li>
                  <li className="list-group-item">
                    Subject : {element.subject}
                  </li>
                  <li className="list-group-item">{element.class_val}</li>
                  <li className="list-group-item">
                    Slot : {element.slot_preference}
                  </li>
                </ul>
                <ul className="list-group list-group-flush borderRequirement">
                  <li className="list-group-item">Board : {element.board}</li>
                  <li className="list-group-item">
                    Student Gender : {element.gender}
                  </li>
                  <li className="list-group-item">
                    Classes : {element.classes_in_a_weak}
                  </li>
                </ul>
                <ul className="list-group list-group-flush borderRequirement">
                  <li className="list-group-item">School : {element.school}</li>
                  <li className="list-group-item">
                    Address: {handleAddress(element)}
                  </li>
                  <li className="list-group-item">
                    Days : {handleDays(element.day_preference)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default StudentRequirement;
