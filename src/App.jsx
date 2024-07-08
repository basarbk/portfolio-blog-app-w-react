import { Outlet } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Outlet />
      </div>
    </>
  );
}

export default App;
