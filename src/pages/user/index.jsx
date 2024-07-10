import { useParams } from "react-router-dom";
import { Feed } from "../../components/Feed";

export function User() {
  const params = useParams();
  return (
    <div>
      <Feed handle={params.handle} />
    </div>
  );
}
