import axios from "axios";
import { toast } from "react-toastify";

export const contactuspush = async ({ name, mobileNum, emailAdd }) => {
  try {
    //console.log("process", process.env.API_URL);
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/contact/contactus`,
      {
        name,
        mobileNum,
        emailAdd,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json_data = await response.data;
    if (json_data.success === true) {
      toast.success("we will contact you with in 24 hours", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } else if (json_data.errors) {
      toast.error(json_data.errors[0].msg, {
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
    }
  } catch (error) {
    //console.log(error.response.data.errors[0].msg);
    toast(error.response.data.errors[0].msg, {
      position: "bottom-left",
      icon: "❗",
    });
    //window.location.href = "/";
  }
};
