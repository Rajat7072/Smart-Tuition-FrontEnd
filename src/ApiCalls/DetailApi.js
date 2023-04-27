import axios from "axios";
import { toast } from "react-toastify";

export const detailPush = async ({
  subject,
  class_val,
  board,
  zip_address,
  school,
  student_name,
  mobile_number,
  email,
  gender,
  classes_in_a_weak,
  day_preference,
  time_preference,
  slot_preference,
  age_of_taecher,
  gender_of_taecher,
  taecher_qualification_detail,
  remark_if_any,
  Monthly_Fees,
}) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/api/details/student-detail`,
      {
        subject,
        class_val,
        board,
        zip_address,
        school,
        student_name,
        mobile_number,
        email,
        gender,
        classes_in_a_weak,
        day_preference,
        time_preference,
        slot_preference,
        age_of_taecher,
        gender_of_taecher,
        taecher_qualification_detail,
        remark_if_any,
        Monthly_Fees,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    //console.log("Detail Api");

    const json_data = await response.data;
    //console.log(json_data);
    if (json_data.success === true) {
      toast("Your Enquiry have been submitted successfully with us 😄", {
        position: "top-center",
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
      window.location.href = "/";
    }
  } catch (error) {
    //console.log(error);
    toast(error.response.data.errors[0].msg, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
