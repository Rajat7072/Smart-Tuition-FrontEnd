import axios from "axios";
import { toast } from "react-toastify";

export const TeacherDetailPush = async ({
  profileName,
  profilepicimg,
  DOB,
  TGender,
  Add,
  Qualification,
  TSubject,
  TClasses,
  AadharCardNum,
  FeeAsked,
  TeacherMobile,
  AgeofTeacher,
  TeacherExperiance,
  TeacherAbout,
}) => {
  try {
    const response = await axios.post(
      "https://smarttuition.co.in/detail/teacher-details",
      {
        profileName,
        profilepicimg,
        DOB,
        TGender,
        Add,
        Qualification,
        TSubject,
        TClasses,
        AadharCardNum,
        FeeAsked,
        TeacherMobile,
        AgeofTeacher,
        TeacherExperiance,
        TeacherAbout,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json_data = await response.data;
    if (json_data.success === true) {
      localStorage.clear();
      window.location.href = "/final";
    } else if (json_data.errors) {
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