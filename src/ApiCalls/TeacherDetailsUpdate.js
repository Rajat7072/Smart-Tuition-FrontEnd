import axios from "axios";
import { toast } from "react-toastify";

export const TeacherUpdateDetailPush = async ({
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
  //console.log("Hi Wala");
  try {
    //console.log("Rajat");
    const token_value = JSON.parse(localStorage.getItem("detailsToken"));
    //console.log("ye wala token", token_value);
    // const direct_token = localStorage.getItem("token");
    // console.log("printing direct token", direct_token);
    const response = await axios.put(
      `${process.env.REACT_APP_URL}/api/detailsUpdate/teacher-details-update`,
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
          "auth-token": token_value.token,
        },
      }
    );
    const json_data = await response.data;
    //console.log("This data is ", json_data);
    if (json_data.success === true) {
      localStorage.clear();
      toast("Details updated Successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "👷‍♀️",
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
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
    //console.log(error);
    toast(error, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
