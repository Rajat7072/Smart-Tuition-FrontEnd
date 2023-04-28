import React from "react";
//import { useState } from "react";
import { toast } from "react-toastify";
import defpic from "../images/play_store_512.png";

const Profilepic = (probs) => {
  const { teacherDetail, setTeacherDetail } = probs;
  //const [picturePro, setPicturePro] = useState("");
  const handleChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    let fileSize = file.size / 1e6;
    const lengthPro = file.name.split(".").length - 1;
    //console.log(lengthPro);
    const fileFormat = file.name.split(".")[lengthPro];
    if (fileSize > 5) {
      toast("Max file size supported is 5MB", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else if (!["jpg", "jpeg", "png"].includes(fileFormat.toLowerCase())) {
      toast("Only Image Format is supported ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: "😅",
      });
    } else {
      reader.onloadend = () => {
        //setPicturePro(reader.result);
        setTeacherDetail({
          ...teacherDetail,
          // eslint-disable-next-line
          ["profilepicimg"]: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column" }}
        className="profile_data"
      >
        {teacherDetail?.profilepicimg === "" ? (
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid black",
              justifyContent: "center",
              alignContent: "center",
              justifyItems: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
            src={defpic}
            alt="profile"
          />
        ) : (
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid black",
              justifyContent: "center",
              alignContent: "center",
              justifyItems: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
            //src={picturePro}
            src={teacherDetail?.profilepicimg}
            alt="profile pic"
          />
        )}
        <div>
          <input type="file" name="profilepicture" onChange={handleChange} />
        </div>
        <div style={{ marginTop: "5px", color: "grey" }}>
          <h6>Max file size supported : 5 MB</h6>
        </div>
      </div>
    </>
  );
};

export default Profilepic;
