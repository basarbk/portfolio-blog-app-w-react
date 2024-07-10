import { Link } from "react-router-dom";
import { useAuth } from "../../../../context/authContext";
import { PublishButton } from "../../components/PublishButton";

export function Actions({ article, setPublished }) {
  const { auth } = useAuth();
  if (auth.id !== article.author.id) return null;
  return (
    <div className="d-flex gap-2">
      <Link
        className="btn btn-warning icon-link"
        to={`/${article.author.handle}/${article.slug}/edit`}
      >
        <span className="material-symbols-outlined">edit</span>
        Edit
      </Link>
      <PublishButton
        id={article.id}
        published={article.published}
        setError={() => {}}
        setPublished={setPublished}
      />
    </div>
  );
}
