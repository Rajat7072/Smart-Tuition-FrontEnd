import React from "react";

const HowItWorks = () => {
  return (
    <div className="How_it_works">
      <div className="head1">
        <h4>How it works</h4>
        <hr className="new1" style={{ border: "1px solid red" }}></hr>
      </div>
      <div className="head2">
        <h6>Hire a teacher in 3 simple steps</h6>
      </div>
      <div className="steps">
        <div className="step">
          <h4>STEP 1</h4>
          <i className="fa-solid fa-envelope-open-text icon"></i>
          <h5 style={{ marginTop: "50px" }}>Choose your Mentor</h5>
          <p className="para">
            We have 8000+ qualified home tutors, Search for the best home tutor
            in your local area Or call us at (+91 8077772925) to make it quick,
            we will help you have only best fit tutors to contact you! Our
            Education Consultant will reach out to you with the profile of the
            prospective tutor and their prices that suits your budget.
          </p>
        </div>
        <div className="step">
          <h4>STEP 2</h4>
          <i className="fa-solid fa-user icon"></i>
          <h5 style={{ marginTop: "50px" }}>Communicate with Tutor</h5>
          <p className="para">
            Once we have identified a perfect home tutor for you that matches
            your tuition requirement, we will arrange a one day demo session
            with the home tutor in Kanpur at your preferred location.
          </p>
        </div>
        <div className="step">
          <div className="headings">
            <h4>STEP 3</h4>
          </div>
          <i className="fa-sharp fa-solid fa-credit-card icon"></i>
          <h5 style={{ marginTop: "50px" }}>Pay after Demo</h5>
          <p className="para">
            If you like the demo session, you continue with the same home tutor
            and we will collect the first month tuition fee in advance. In case,
            If you do not like the demo session, we will arrange a new home
            tutor for you.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HowItWorks;
