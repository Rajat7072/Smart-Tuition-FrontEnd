import axios from "axios";
import { toast } from "react-toastify";

export const loginAuthpush = async ({ Signemail, Signpassword }) => {
  try {
    //console.log("It's failing here");
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/login/login-details`,
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
    const json_data = await response.data;
    //console.log("this data is crucial", response.status);
    if (json_data.success === true) {
      //console.log(json_data);
      localStorage.setItem("detailsToken", JSON.stringify(json_data));
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
      return json_data.success;
    } else {
      //console.log("Inside else Part");
      // toast.error(json_data.message, {
      //   position: "top-right",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   icon: "❗",
      // });
      return json_data.success;
    }
  } catch (error) {
    toast(error.response.data, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
