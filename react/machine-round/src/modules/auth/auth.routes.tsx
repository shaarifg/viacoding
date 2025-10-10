import { RouteObject } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

export const authRoutes:RouteObject[] = [
  {
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
];
