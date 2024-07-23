import { createBrowserRouter } from "react-router-dom";
import { SignUp } from "./sign-up";
import { Callback } from "./callback";
import App from "../App";
import { Home } from "./home";
import { Login } from "./login";
import { ArticleEdit, ArticleEditor, ArticleView } from "./article";
import { User } from "./user";
import { Edit } from "./user/Edit";

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
        path: "/:handle/:idOrSlug/edit",
        Component: ArticleEdit,
      },
      {
        path: "/:handle",
        Component: User,
      },
      {
        path: "/edit",
        Component: Edit,
      },
    ],
  },
]);
