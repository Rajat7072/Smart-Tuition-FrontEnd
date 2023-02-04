import React from "react";

const Scrollbar = ({ List_of_schools, school_value, set_school_value }) => {
  const handleClick = (val) => {
    school_value(val);
    set_school_value([]);
  };
  return (
    <div className="scroll-bg">
      <div className="scroll-div">
        {List_of_schools.map((value) => {
          return (
            <div
              className="scroll-text"
              key={value.id}
              onClick={() => handleClick(value.school)}
            >
              <b style={{ cursor: "pointer" }}>{value.school}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Scrollbar;
