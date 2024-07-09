import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./sign-up";
import { Callback } from "./callback";
import App from "../App";
import { Home } from "./home";
import { Login } from "./login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/callback",
        Component: Callback,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
