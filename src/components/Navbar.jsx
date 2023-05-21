import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import logoutImg from "../images/logout.png";
import click from "../images/click.gif";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) =>
    state.cartQty !== null ? state.cartQty : 0
  );
  const handleClickTutor = (e) => {
    e.preventDefault();
    navigate("/teacherProfileDetail");
  };
  const handletoHome = () => {
    window.location.href = "/";
    localStorage.clear();
  };
  const handleClickBookATutor = (e) => {
    e.preventDefault();
    navigate("/step1");
  };
  const handleCart = (e) => {
    e.preventDefault();
    if (cart === 0) {
      toast("Your cart is currently Empty Please fill Enquiry First", {
        position: "top-center",
        icon: "🚧",
        theme: "light",
      });
    } else {
      navigate("/cart");
    }
  };
  const handleRequirememnt = (e) => {
    e.preventDefault();
    navigate("/studentRequirement");
  };
  const handleClickBecomeATutor = (e) => {
    e.preventDefault();
    //navigate("/TeacherSignUp");
    // toast("This feature is under Development", {
    //   position: "bottom-left",
    //   icon: "🚧",
    //   theme: "light",
    // });
    navigate("/login");
  };

  //localStorage.setItem("studentName", "wwwww");
  const nav_display = localStorage.getItem("studentName");
  const nav_teacher_name = localStorage.getItem("nameData");
  const nav_teacher_phone = localStorage.getItem("nameData");
  // if (nav_display !== null) {
  //   var toDisplay = nav_display.split(" ")[0];
  // }
  const title_display =
    nav_display === null &&
    nav_teacher_name === null &&
    nav_teacher_phone === null ? (
      "Smart-Tuition"
    ) : (
      <div className="logout" style={{ display: "flex", height: "45px" }}>
        <img src={logoutImg} alt="Logout" />
      </div>
    );
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            style={{ fontSize: "25px" }}
            onClick={handletoHome}
          >
            <b>
              <i>{title_display}</i>
            </b>
          </Link>
          <div>
            <button
              className="btn btn-outline-dark mx-2"
              onClick={handleCart}
              style={{
                display: "flex",
                alignItems: "center",
                //background: "red",
                boxShadow: "2px -4px 5px black",
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i>
              &nbsp;
              {cart}
              <img
                style={{
                  display: "flex",
                  height: "30px",
                }}
                src={click}
                alt="NA"
              />
            </button>
          </div>
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
            <div className="ms-auto">
              <button
                onClick={handleClickTutor}
                className="btn btn-outline-dark mx-1 my-2"
              >
                <i className="fa-solid fa-chalkboard-user"></i>
                &nbsp; Mentor's Profile
              </button>
              <button
                //onClick={handleClickTutor}
                className="btn btn-outline-dark mx-1 my-2"
                onClick={handleRequirememnt}
              >
                <i className="fa-brands fa-openid"></i>
                &nbsp; Requirements
              </button>
              <button
                onClick={handleClickBecomeATutor}
                className="btn btn-outline-dark mx-1 my-2"
              >
                <i className="fa-solid fa-user"></i>
                &nbsp; Become a Tutor
              </button>
              <button
                onClick={handleClickBookATutor}
                className="btn btn-outline-dark mx-1 my-2"
              >
                <i className="fa-solid fa-user-graduate"></i>
                &nbsp; Book A Tutor
              </button>
            </div>
            <form className="d-flex"></form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
