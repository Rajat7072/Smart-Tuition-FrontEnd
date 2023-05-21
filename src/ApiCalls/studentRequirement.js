import axios from "axios";
import { toast } from "react-toastify";

export const fetchAllStudentRequirement = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_URL}/api/requirement/studentRequirementMap`
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
