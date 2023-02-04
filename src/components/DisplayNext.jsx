import React from "react";
import people from "../images/people.png";
import smile from "../images/smile.png";
import professor from "../images/professor.png";

const DisplayNext = () => {
  return (
    <div className="Display_next">
      <div className="head1">
        <h4>why to choose us ?</h4>
        <hr className="new1" style={{ border: "1px solid black" }}></hr>
      </div>
      <div className="head1">
        <h6>Hire a teacher in 3 simple steps</h6>
      </div>
      <div className="steps_next">
        <div className="step">
          <img className="lift" src={people} alt="Group of People" />
          <h5 style={{ marginTop: "50px" }}>We Match Your Needs</h5>
          <p className="para">
            From the right professional to the right budget.
          </p>
        </div>
        <div className="step">
          <img className="lift" src={professor} alt="Professor" />
          <h5 style={{ marginTop: "50px" }}>Trusted Teachers</h5>
          <p className="para">
            We have Teachers of high end quality standards.
          </p>
        </div>
        <div className="step">
          <div className="headings"></div>
          <img className="lift" src={smile} alt="Smile" />
          <h5 style={{ marginTop: "50px" }}>Smooth Service</h5>
          <p className="para">
            We ensure a hassle free process to our students and parents.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayNext;
