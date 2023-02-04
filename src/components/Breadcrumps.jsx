import React from "react";
import { Link } from "react-router-dom";

const Breadcrumps = ({
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  step9,
  step10,
}) => {
  return (
    <div className="BREADCRUMB">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {step1 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP1</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP1</li>
          )}
          {step2 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP2</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP2</li>
          )}
          {step3 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP3</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP3</li>
          )}
          {step4 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP4</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP4</li>
          )}
          {step5 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP5</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP5</li>
          )}
          {step6 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP6</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP6</li>
          )}
          {step7 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP7</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP7</li>
          )}
          {step8 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP8</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP8</li>
          )}
          {step9 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP9</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP9</li>
          )}
          {step10 ? (
            <li className="breadcrumb-item">
              <Link to="/step1">STEP10</Link>
            </li>
          ) : (
            <li className="breadcrumb-item disabled">STEP10</li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumps;
