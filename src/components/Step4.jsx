import React from "react";
import Breadcrumps from "./Breadcrumps";
import { useNavigate } from "react-router-dom";
import BackArrow from "./BackArrow";
import { useState, useContext } from "react";
import Notecontext from "../contextApi/Notecontext";
import { toast } from "react-toastify";

const Step4 = () => {
  const step4 = true;
  const [pincode, setPincode] = useState({
    HouseNo: "",
    BlockNo: "",
    Addressone: "",
    Addresstwo: "",
    city: "",
    state: "",
  });
  const step4context = useContext(Notecontext);
  const { ApiDetail, setApiDetail } = step4context;
  const navigate = useNavigate();
  const handleClick = () => {
    if (
      pincode?.HouseNo === "" ||
      pincode?.Addressone === "" ||
      (pincode?.city === "" && pincode?.state === "")
    ) {
      toast("Please Enter the * Mandatory Fields!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🤔",
      });
    } else if (pincode?.Addressone?.length < 3) {
      toast("Min 3 letters Required in Address Field!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "🤔",
      });
    } else {
      setApiDetail({ ...ApiDetail, zip_address: pincode });
      navigate("/step5");
      console.log(pincode);
    }
  };
  const handleChange = (e) => {
    setPincode({ ...pincode, [e.target.name]: e.target.value });
    console.log(pincode);
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <BackArrow />
        <div>
          <Breadcrumps step4={step4} />
        </div>
        <div className="div_desired_loc_head">
          <h4 className="desired_loc_head">
            Please Select the desired Location you want to study ?
          </h4>
        </div>
        <div>
          <div className="my-3" style={{ display: "flex" }}>
            <input
              className="form-control"
              style={{ width: "100%", marginRight: "5px" }}
              type="text"
              id="HouseNo"
              name="HouseNo"
              placeholder="House No *"
              value={pincode?.HouseNo}
              onChange={handleChange}
            />

            {/* <i className="fa-solid fa-magnifying-glass"></i> */}

            <input
              className="form-control"
              style={{ width: "100%" }}
              type="text"
              id="BlockNo"
              name="BlockNo"
              placeholder="Block No"
              value={pincode?.BlockNo}
              onChange={handleChange}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              className="form-control"
              style={{ width: "100%" }}
              type="text"
              id="Addressone"
              name="Addressone"
              placeholder="Address Line 1 *"
              value={pincode?.Addressone}
              onChange={handleChange}
            />
            <input
              className="form-control my-3"
              style={{ width: "100%" }}
              type="text"
              id="search"
              name="Addresstwo"
              placeholder="Address Line 2"
              value={pincode?.Addresstwo}
              onChange={handleChange}
            />
          </div>
          <div style={{ display: "flex" }}>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              id="city"
              name="city"
              style={{ width: "50%", padding: "8px", marginRight: "5px" }}
              onChange={handleChange}
            >
              <option defaultValue>Please select your city *</option>
              <option value="Kanpur">Kanpur</option>
            </select>
            <select
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
              id="state"
              name="state"
              style={{ width: "50%", padding: "8px" }}
              onChange={handleChange}
            >
              <option defaultValue>Please Select your state *</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
          </div>
        </div>
        <div className="div_desired_loc_head">
          <h5 className="desired_loc_head" style={{ color: "grey" }}>
            We will try to find out Tutor at your locality
          </h5>
        </div>
        <button
          style={{ marginTop: "50px" }}
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Step4;
