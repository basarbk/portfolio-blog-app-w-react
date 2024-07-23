import { Link } from "react-router-dom";
import { AppAlert, AppImage, AppSpinner } from "../../../../components";
import { useProfileCard } from "./useProfileCard";
import { useAuth } from "../../../../context/authContext";

export function ProfileCard() {
  const { data, status, message } = useProfileCard();
  const { auth } = useAuth();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return (
    <div className="card mb-3 text-center">
      <div className="card-header">
        <AppImage
          image={data.image}
          fallback="profile"
          width="200"
          className="rounded-circle shadow-sm"
        />
      </div>
      <div className="card-body">
        <span className="h3">{data.name}</span>
      </div>
      {auth.id === data.id && (
        <div className="card-footer">
          <Link className="btn btn-primary" to="/edit">
            Edit
          </Link>
        </div>
      )}
    </div>
  );
}
