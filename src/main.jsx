import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
