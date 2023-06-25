import axios from "axios";
import { toast } from "react-toastify";

export const deleteTeacher = async () => {
  let value = JSON.parse(localStorage.getItem("detailsToken"));
  console.log("This value is", value.token);
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_URL}/api/delete/techerDelete`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": value.token,
        },
      }
    );
    const json_data = response.data;
    console.log("ye wala Json data hai", json_data);
    if (json_data.success === true) {
      localStorage.clear();
      toast.success("Profile Deleted Successfully", {
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
      }, 2000);
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
    console.log(error);
  }
};
