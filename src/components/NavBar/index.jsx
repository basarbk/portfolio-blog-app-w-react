import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Logout } from "./components/Logout";

export function NavBar() {
  const { auth } = useAuth();
  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand icon-link" to="/">
          <span className="material-symbols-outlined">edit_square</span>
          My App
        </Link>
        <ul className="navbar-nav">
          {auth.id !== 0 && (
            <>
              <li className="nav-item">
                <Link className="nav-link active" to="/article/new">
                  Post Article
                </Link>
              </li>
              <Logout />
            </>
          )}
          {auth.id === 0 && (
            <>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/signup">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
