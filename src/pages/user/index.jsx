import { useParams } from "react-router-dom";
import { Feed } from "../../components/Feed";
import { ProfileCard } from "./components/ProfileCard";

export function User() {
  const params = useParams();
  return (
    <div>
      <ProfileCard />
      <Feed handle={params.handle} />
    </div>
  );
}
