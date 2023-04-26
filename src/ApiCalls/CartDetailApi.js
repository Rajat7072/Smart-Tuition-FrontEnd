import axios from "axios";
import { toast } from "react-toastify";

export const CartDetailPush = async ({
  studentName,
  studentPhone,
  teacherDetails,
}) => {
  try {
    const response = await axios.post(
      "https://smarttuition.co.in/api/teacherCart/teacher-cart",
      {
        studentName,
        studentPhone,
        teacherDetails,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json_data = await response.data;
    if (json_data.success === true) {
      window.location.href = "/final";
      localStorage.clear();
    } else if (json_data.error) {
      toast.error(json_data.Error, {
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
      localStorage.clear();
    }
  } catch (error) {
    console.log(error);
    toast(error, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
