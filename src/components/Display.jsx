import React from "react";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <div className="display">
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Science
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Maths
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Commerce
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Humanities
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Language
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Computer
        </Link>
      </ul>
      <ul className="mx-4">
        <Link className="deco" to="/step1">
          Hobbies
        </Link>
      </ul>
    </div>
  );
};
export default Display;
