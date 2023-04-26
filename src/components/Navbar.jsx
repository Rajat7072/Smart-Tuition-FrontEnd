import React from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) =>
    state.cartQty !== null ? state.cartQty : 0
  );
  const handleClickTutor = () => {
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
  // const nav_display = JSON.parse(localStorage.getItem("cartQtyDetails"));
  // //const nav_display_val = nav_display[0].studentName + "(Logout)";
  // const title_display =
  //   nav_display === null
  //     ? "Smart-Tuition"
  //     : nav_display[0].studentName + "(Logout)";
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
                className="btn btn-outline-dark mx-2"
                onClick={handleCart}
                //to="/cart"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                &nbsp;
                {cart}
              </button>
              <button
                onClick={handleClickTutor}
                className="btn btn-outline-dark mx-2"
              >
                <i className="fa-solid fa-chalkboard-user"></i>
                &nbsp; Teacher's Profile
              </button>
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
