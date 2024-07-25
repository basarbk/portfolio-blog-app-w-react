import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { AppImage } from "../../AppImage";
import { Logout } from "./Logout";
import { useEffect, useRef, useState } from "react";
export function User() {
  const { auth } = useAuth();
  const [show, setShow] = useState(false);
  const dropdownRef = useRef();

  const handleClick = (event) => {
    if (!dropdownRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <Link className="nav-link active" to="#" onClick={() => setShow(!show)}>
        <div className="d-flex gap-2">
          <AppImage
            image={auth.image}
            fallback="profile"
            width="30"
            height="30"
            className="rounded-circle shadow-sm"
          />
          {auth.name}
        </div>
      </Link>
      <ul className={`dropdown-menu end-0 ${show ? "show" : ""}`}>
        <li>
          <Link className="dropdown-item" to={`/${auth.handle}`}>
            Profile
          </Link>
        </li>
        <li>
          <Link className="dropdown-item" to="/edit">
            Edit
          </Link>
        </li>
        <li>
          <span className="dropdown-item">
            <Logout />
          </span>
        </li>
      </ul>
    </div>
  );
}
