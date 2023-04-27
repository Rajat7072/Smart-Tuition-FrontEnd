import axios from "axios";
import { toast } from "react-toastify";

export const fetchAllTeacherDetails = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/teacherDetail/teacherMap`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    //console.log(error);
    toast(error, {
      position: "bottom-left",
      icon: "❗",
    });
  }
};
