import axios from "axios";
import { toast } from "react-toastify";

export const loginAuthpush = async ({ Signemail, Signpassword }) => {
  try {
    const response = await axios.post(
      "https://smarttuition.co.in/api/login/login-details",
      {
        Signemail,
        Signpassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json_data = response.data;
    console.log(json_data);
    if (json_data.success === true) {
      console.log(json_data);
      toast.success("Please wait we are fetching Your Details", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
    toast(error.response.data.errors[0].msg, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
