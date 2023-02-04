import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="Number_detail">
        <h2 style={{ color: "aqua" }}>
          <i>BookMyTutor</i>
        </h2>
        <p className="mypara">
          Come experience the ultimate tuition destination in your neighbourhood
          with BookMyTutor. Upgrade your academic performance with the best of
          offline Proffessionals.
        </p>
      </div>
      <div className="Number_detail">
        <h2 style={{ color: "aqua" }}>Area of work</h2>
        <div className="mypara">
          <Link to="/step1" className="linkStyle">
            <h5>Tutors in India</h5>
          </Link>
          <Link to="/step1" className="linkStyle">
            <h5>Tutors in Kanpur</h5>
          </Link>
          <Link to="/step1" className="linkStyle">
            <h5>Many More Soon</h5>
          </Link>
        </div>
      </div>
      <div className="Number_detail">
        <h2 style={{ color: "aqua" }}>Information</h2>
        <div className="mypara">
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>About Us</h5>
          </Link>
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>FAQ</h5>
          </Link>
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>Contact Us</h5>
          </Link>
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>Terms of use</h5>
          </Link>
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>Privacy Policy</h5>
          </Link>
          <Link to="/tutors_in_india" className="linkStyle">
            <h5>Terms For Tutors</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
