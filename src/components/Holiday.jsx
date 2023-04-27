import React from "react";
import BackArrow from "./BackArrow";

const Holiday = () => {
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <BackArrow />
      <div style={{ padding: "5px" }}>
        <div
          style={{
            marginTop: "5px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h4>HoliDay Calender 2023</h4>
        </div>
        <ul>
          <li>Sunday we have official Holiday for Teacher's</li>
          <li>26 Jan (Republic Day) Thursday</li>
          <li>7 March (Holi) Tuesday</li>
          <li>8 March (Holi) Wednesday</li>
          <li>28 Jun (Id-Ul-Zuha) Wednesday</li>
          <li>15 Aug (Independence Day) Tuesday</li>
          <li>5 Sep (Teacher's Day) Tuesday</li>
          <li>2 oct (Gandhi Jayanthi) Monday</li>
          <li>24 oct (Vijayadashmi) Tuesday</li>
          <li>25 oct (Vijayadashmi) Wednesday</li>
          <li>14 Nov (Children's Day) Tuesday</li>
        </ul>
      </div>
    </>
  );
};

export default Holiday;
