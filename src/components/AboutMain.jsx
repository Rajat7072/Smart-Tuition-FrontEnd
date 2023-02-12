import React from "react";
import Footer from "./Footer";

const AboutMain = () => {
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step1" style={{ marginTop: "50px" }}>
        <h3>About Us</h3>
        <p>
          Smart-Tuition is Kanpur's largest and most trusted Learning Network.
          Our vision is to be one-stop learning partner for every Indian. With
          over ample amount of Verified Tutors, Trainers & Institutes, we are a
          trusted partner of choice for more than 25 thousand students, parents
          and professionals visiting us every month to fulfill learning
          requirements across more than 1000 categories. Using
          smarttuition.co.in, students, parents and professionals can compare
          multiple Tutors, Trainers and Institutes and choose the ones that best
          suit their requirements. If you are a Tutor, Trainer or an Institute,
          you can get relevant enquiries based on your skills and offer online
          as well as offline coaching services.
        </p>
      </div>
      <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
        <Footer />
      </div>
    </>
  );
};

export default AboutMain;
