import { RouteObject } from "react-router-dom";
import Login from "./login/Login";
import SignUp from "./signup/SignUp";

export const AuthRoutes:RouteObject[] = [
  {
    children: [
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
];
