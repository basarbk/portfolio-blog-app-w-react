import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/authContext";

export function Actions({ article }) {
  const { auth } = useAuth();
  if (auth.id !== article.author.id) return null;
  return (
    <>
      <Link
        className="btn btn-warning icon-link"
        to={`/${article.author.handle}/${article.slug}/edit`}
      >
        <span className="material-symbols-outlined">edit</span>
        Edit
      </Link>
    </>
  );
}
