import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { loginAuthpush } from "../ApiCalls/loginAuthApi";

const Login = () => {
  // const navigate = useNavigate();
  const [login, setLogin] = useState({ Signemail: "", Signpassword: "" });
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginAuthpush(login);
    //console.log("result is ", result);
    if (result) {
      //navigate("/readTeacher");
      window.location.href = "/readTeacher";
    } else if (!result) {
      toast("Incorrect user Name or Password! 😕", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <hr style={{ marginTop: "0px" }} />
      <div className="step2">
        <h2 style={{ justifyContent: "center", display: "flex" }}>
          <i>Login</i>
        </h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div
              style={{
                display: "flex",
                width: "100%",
              }}
            ></div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="Signemail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              name="Signpassword"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div>
            <Link to="/signup">Don't have an Account click Here</Link>
          </div>
          <button
            style={{ marginTop: "20px", width: "100%" }}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
