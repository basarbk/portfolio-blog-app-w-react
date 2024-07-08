import { Link, Outlet } from "react-router-dom";
import { NavBar } from "./components";

function App() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <div>
          <Link to="/callback?token=123&operation=register">Register 123</Link>
        </div>
        <div>
          <Link to="/callback?token=456&operation=register">Register 456</Link>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
