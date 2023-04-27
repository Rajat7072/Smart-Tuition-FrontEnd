import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  teacherCart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartQty: localStorage.getItem("cartQtyDetails")
    ? JSON.parse(localStorage.getItem("cartQtyDetails"))
    : 0,
};

const cartSlice = createSlice({
  name: "teacherSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.teacherCart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (state.cartQty >= 5) {
        toast.info("Maximum five teachers can be added for DEMO", {
          position: "bottom-left",
          autoClose: 1500,
        });
      } else if (index >= 0) {
        toast.info("This Mentor is Already available in your Cart", {
          position: "bottom-right",
          autoClose: 1500,
        });
      } else {
        state.cartQty += 1;
        const tempItemData = { ...action.payload };
        state.teacherCart.push(tempItemData);
        localStorage.setItem("cartItems", JSON.stringify(state.teacherCart));
        localStorage.setItem("cartQtyDetails", JSON.stringify(state.cartQty));
        toast.info(
          `Mentor ${action.payload.profileName} added successfully for Demo`,
          {
            position: "bottom-right",
            autoClose: 1500,
          }
        );
      }
    },
    removeFromCart: (state, action) => {
      let filterItem = state.teacherCart.filter(
        (item) => item._id !== action.payload._id
      );
      state.teacherCart = filterItem;
      localStorage.setItem("cartItems", JSON.stringify(state.teacherCart));
      toast.error(`${action.payload.profileName} removed successfully`, {
        position: "bottom-left",
        autoClose: 1500,
      });
      state.cartQty -= 1;
      localStorage.setItem("cartQtyDetails", JSON.stringify(state.cartQty));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
