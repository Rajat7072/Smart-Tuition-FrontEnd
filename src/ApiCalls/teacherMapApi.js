import axios from "axios";

export const fetchAllTeacherDetails = async () => {
  try {
    const response = await axios.get(
      "https://smarttuition.co.in/api/teacherDetail/teacherMap"
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
