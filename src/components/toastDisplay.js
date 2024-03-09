import { toast } from "react-toastify";

export const toastDisplay = (displayValue, position, smiley, timeSec) => {
  toast(displayValue, {
    position: position,
    autoClose: timeSec,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    icon: smiley,
  });
};
