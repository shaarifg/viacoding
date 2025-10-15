import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "@/redux/rootReducer";

// we create the store, single state for our app, with the help of redux toolkit
export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
