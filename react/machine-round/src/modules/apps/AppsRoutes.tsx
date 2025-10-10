import { RouteObject } from "react-router-dom";
import Todo from "./todo/Todo";

export const AppsRoutes:RouteObject[] = [
  {
    children: [
      { path: "to-do", element: <Todo /> },
    ],
  },
];