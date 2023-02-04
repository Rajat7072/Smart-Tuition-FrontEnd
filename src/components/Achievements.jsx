import React from "react";

const Achievements = () => {
  return (
    <div className="achivements">
      <div className="head1">
        <h4>Achievements</h4>
        <hr className="new1" style={{ border: "1px solid red" }}></hr>
      </div>
      <div className="steps">
        <div className="Number_detail">
          <i className="fa-solid fa-people-group icon_achievement"></i>
          <h5 style={{ marginTop: "50px" }}>We are a team of</h5>
          <h2>8000+</h2>
          <h5>Verified & Tested Tutors</h5>
        </div>
        <div className="Number_detail">
          <i className="fa-solid fa-building-columns icon_achievement"></i>
          <h5 style={{ marginTop: "50px" }}>Our Students are from</h5>
          <h2>400+</h2>
          <h5>Schools of India</h5>
        </div>
        <div className="Number_detail">
          <i className="fa-solid fa-check-to-slot icon_achievement"></i>
          <h5 style={{ marginTop: "50px" }}>Inquiries Posted by</h5>
          <h2>4182</h2>
          <h5>Students</h5>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
