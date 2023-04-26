import { configureStore } from "@reduxjs/toolkit";
import teacherSliceReducer from "./createSlice/techSlice";

const store = configureStore({
  reducer: teacherSliceReducer,
});
export default store;
