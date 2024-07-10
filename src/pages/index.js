import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./sign-up";
import { Callback } from "./callback";
import App from "../App";
import { Home } from "./home";
import { Login } from "./login";
import { ArticleEditor, ArticleView } from "./article";
import { User } from "./user";

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
      {
        path: "/article/new",
        Component: ArticleEditor,
      },
      {
        path: "/:handle/:idOrSlug",
        Component: ArticleView,
      },
      {
        path: "/:handle",
        Component: User,
      },
    ],
  },
]);
