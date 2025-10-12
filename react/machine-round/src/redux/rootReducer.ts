import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "@/modules/apps/todo/todoSlice";
// import dashboardReducer from "@/modules/dashboard/dashboardSlice";

export const rootReducer = combineReducers({
  todo: todoReducer,
  //   dashboard: dashboardReducer,
});
