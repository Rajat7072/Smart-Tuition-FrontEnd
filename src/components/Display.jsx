import React from "react";
import { Link } from "react-router-dom";

const Display = () => {
  return (
    <div className="display">
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Science
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Maths
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Commerce
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Humanities
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Language
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Computer
        </Link>
      </li>
      <li className="mx-5">
        <Link className="deco" to="/step1">
          Hobbies
        </Link>
      </li>
    </div>
  );
};
export default Display;
