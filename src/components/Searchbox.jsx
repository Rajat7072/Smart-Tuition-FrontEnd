import React from "react";
import { useNavigate } from "react-router-dom";

const Searchbox = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/step1");
  };
  const handleChange = () => {};
  return (
    <div className="setText">
      <b
        className="setTextBorder"
        style={{ fontSize: "20px", marginTop: "2px" }}
      >
        Looking For A Tutor
      </b>
      <form className="d-flex mx-2" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Type Subject"
          aria-label="Search"
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Searchbox;
