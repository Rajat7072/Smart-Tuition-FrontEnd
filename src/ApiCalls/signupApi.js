import axios from "axios";
import { toast } from "react-toastify";

export const signupPush = async ({
  firstName,
  lastName,
  Signemail,
  mobileNumber,
  Signpassword,
  Signcpassword,
}) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/teacher/teacher-signup`,
      {
        firstName,
        lastName,
        Signemail,
        mobileNumber,
        Signpassword,
        Signcpassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json_data = response.data;
    //console.log(json_data);
    if (json_data.success === true) {
      toast.success("Details Saved Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😀",
      });
      localStorage.setItem("token", json_data.token);
      window.location.href = "/TeacherDetails";
    } else if (json_data.success === false) {
      toast.error(json_data.value, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "❗",
      });
    } else {
      toast.error("Some Error Occurred Please Try after Some Time", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "❗",
      });
      window.location.href = "/";
    }
  } catch (error) {
    //console.log(error);
    toast(error, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
