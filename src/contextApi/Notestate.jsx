import React from "react";
import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props) => {
  const [edit, setEdit] = useState(false);
  const [details, setDetails] = useState({});
  const [ApiDetail, setApiDetail] = useState({
    subject: "",
    class_val: "",
    board: "",
    zip_address: "",
    school: "",
    student_name: "",
    mobile_number: "",
    email: "",
    gender: "",
    classes_in_a_weak: "",
    day_preference: "",
    time_preference: "",
    remark_if_any: "",
    slot_preference: "",
    age_of_taecher: "",
    gender_of_taecher: "",
    taecher_qualification_detail: "",
    Monthly_Fees: "",
  });
  //console.log(ApiDetail);
  return (
    <Notecontext.Provider
      value={{ ApiDetail, setApiDetail, edit, setEdit, details, setDetails }}
    >
      {props.children}
    </Notecontext.Provider>
  );
};

export default Notestate;
