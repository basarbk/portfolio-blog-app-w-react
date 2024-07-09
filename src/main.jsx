import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/index.js";
import { AuthProvider } from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </AuthProvider>
);
