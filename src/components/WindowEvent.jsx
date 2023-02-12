import React from "react";

const WindowEvent = () => {
  window.addEventListener(
    "beforeunload",
    function (e) {
      e.preventDefault();
      e.returnValue = "";
    }
    // { passive: false }
  );
  // window.addEventListener("load", function (e) {
  //   navigate("/");
  // });
  return <></>;
};

export default WindowEvent;
