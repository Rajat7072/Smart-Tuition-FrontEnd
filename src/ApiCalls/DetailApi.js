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
}) => {
  try {
    const response = await axios.post(
      "http://localhost:8089/api/details/student-detail",
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
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Detail Api");
    const json_data = await response.data;
    console.log(json_data);
    if (json_data.success === true) {
      window.location.href = "/final";
    } else if (json_data.errors) {
      toast.danger(json_data.errors[0].msg, {
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
      toast.danger("Some Error Occurred", {
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
    toast("Please Try after some Time Server is Down", {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
