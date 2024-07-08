import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand bg-primary" data-bs-theme="dark">
      <div className="container">
        <Link className="navbar-brand icon-link" to="/">
          <span className="material-symbols-outlined">edit_square</span>
          My App
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/signup">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
