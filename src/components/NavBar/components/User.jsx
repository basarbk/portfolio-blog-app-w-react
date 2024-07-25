import { Link } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import { AppImage } from "../../AppImage";
export function User() {
  const { auth } = useAuth();
  return (
    <Link className="nav-link active" to={`/${auth.handle}`}>
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
  );
}
