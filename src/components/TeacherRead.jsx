import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "./Spinner";
// import { toast } from "react-toastify";
import ourbg from "../images/ourbg.jpg";
import ppl from "../images/people.png";
import { fetchLoginTeacherDetails } from "../ApiCalls/teacherDetailLogin";
import ModalDelete from "./ModalDelete";
import { useNavigate } from "react-router-dom";
import Notecontext from "../contextApi/Notecontext";

const TeacherRead = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const EditButtonEnable = useContext(Notecontext);
  const { setEdit, setDetails } = EditButtonEnable;
  const navigate = useNavigate();
  const handleDelete = () => {
    localStorage.clear("detailsToken");
    window.location.href = "/";
  };
  const handleEdit = () => {
    setEdit(true);
    setDetails({ ...data });
    navigate("/TeacherDetails");
  };
  useEffect(() => {
    const myResult = async () => {
      try {
        const result = await fetchLoginTeacherDetails();
        //console.log("Checking this wala", result);
        if (result === "") {
          navigate("/TeacherDetails");
        } else {
          setLoading(false);
          setData({ ...result });
        }
      } catch (error) {
        //console.log(error);
      }
    };
    myResult();
  }, [navigate]);
  // console.log("Your data", data);
  // console.log("My first", details);
  return (
    <>
      <ModalDelete name={data.profileName} />
      <div style={{ background: `url(${ourbg})` }}>
        <hr style={{ marginTop: "0px", marginBottom: "2px" }} />
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Spinner />
          </div>
        ) : (
          data && (
            <div key={data._id} style={{ padding: "0px 8px 8px 8px" }}>
              <div
                style={{
                  display: "flex",
                  marginRight: "20px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {data.profilepicimg !== "" ? (
                  <img
                    style={{
                      borderRadius: "10%",
                      border: "1px solid black",
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "110px",
                      height: "110px",
                      padding: "5px",
                    }}
                    src={data.profilepicimg}
                    alt="Default"
                  />
                ) : (
                  <img
                    style={{
                      borderRadius: "10%",
                      border: "1px solid black",
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "110px",
                      height: "110px",
                      padding: "5px",
                    }}
                    src={ppl}
                    alt="Default"
                  />
                )}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    style={{ marginBottom: "5px" }}
                    onClick={handleEdit}
                  >
                    Edit Profile &nbsp;
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    style={{ marginBottom: "5px" }}
                  >
                    Delete Profile &nbsp;
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={handleDelete}
                  >
                    Logout &nbsp;
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </button>
                </div>
              </div>
              <div>
                <h5 className="card-title">Mentor {data.profileName}</h5>
                <p className="card-text">{data.TeacherAbout}</p>
                <div>
                  <div>
                    <label className="form-label">
                      <b> Highest Qualification :</b>
                    </label>
                    <label className="form-control">{data.Qualification}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Experience :</b>
                    </label>
                    <label className="form-control">
                      {data.TeacherExperiance}
                    </label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Average Fees :</b>
                    </label>
                    <label className="form-control">{data.FeeAsked}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Age :</b>
                    </label>
                    <label className="form-control">{data.DOB}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Subject Experties :</b>
                    </label>
                    <label className="form-control">{data.TSubject}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Class Experties :</b>
                    </label>
                    <label className="form-control">{data.TClasses}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Address :</b>
                    </label>
                    <label className="form-control">{data.Add}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Aadhar Number :</b>
                    </label>
                    <label className="form-control">{data.AadharCardNum}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Gender :</b>
                    </label>
                    <label className="form-control">{data.TGender}</label>
                  </div>
                  <div>
                    <label className="form-label">
                      <b> Mobile Number :</b>
                    </label>
                    <label className="form-control">{data.TeacherMobile}</label>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default TeacherRead;
