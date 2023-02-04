import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClickBookATutor = (e) => {
    e.preventDefault();
    navigate("/step1");
  };
  const handleClickBecomeATutor = (e) => {
    e.preventDefault();
    //navigate("/TeacherSignUp");
    toast("This feature is under Development", {
      position: "bottom-left",
      icon: "🚧",
      theme: "light",
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ fontSize: "25px" }}>
            <b>
              <i>Smart-Tuition</i>
            </b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto"></div>
            <form className="d-flex">
              <button
                onClick={handleClickBecomeATutor}
                className="btn btn-outline-dark mx-2"
              >
                <i className="fa-solid fa-user"></i>
                &nbsp; Become a Tutor
              </button>
              <button
                onClick={handleClickBookATutor}
                className="btn btn-outline-dark"
              >
                <i className="fa-solid fa-user-graduate"></i>
                &nbsp; Book A Tutor
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
