import axios from "axios";
import { toast } from "react-toastify";

export const fetchLoginTeacherDetails = async () => {
  const tokenValue = JSON.parse(localStorage.getItem("detailsToken"));
  console.log(tokenValue.token);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/teacherLogin/getTeacherLoginDetails`,
      {
        headers: {
          "Content-Type": "application/json",
          //Authorization: `Bearer ${tokenValue.token}`,
          "auth-token": `${tokenValue.token}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error);
    toast(error, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
