import { useAuth } from "../../../context/authContext";

export function Logout() {
  const { setLoggedOut } = useAuth();
  const onClickLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setLoggedOut();
    } catch {
      /* empty */
    }
  };

  return (
    <li className="nav-item">
      <span className="nav-link active" onClick={onClickLogout}>
        Logout
      </span>
    </li>
  );
}
