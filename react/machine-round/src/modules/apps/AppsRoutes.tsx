import { RouteObject } from "react-router-dom";
import Todo from "./todo/Todo";

export const AppsRoutes: RouteObject[] = [
  {
    path: "",
    children: [
      { index: true, element: <Todo /> },
      { path: "to-do", element: <Todo /> },
    ],
  },
];
