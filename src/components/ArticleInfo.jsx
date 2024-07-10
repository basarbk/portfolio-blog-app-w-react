import { Link } from "react-router-dom";
import defaultProileImage from "../assets/profile.png";
import { format } from "timeago.js";

export function ArticleInfo({ author, publishedAt }) {
  return (
    <div className="d-flex align-items-center gap-3 mb-1">
      <Link to={`/${author.handle}`}>
        <img
          src={defaultProileImage}
          width={30}
          height={30}
          className="rounded-circle shadow-sm"
        />
      </Link>
      <div className="d-flex flex-column">
        <Link
          to={`/${author.handle}`}
          className="fw-bold text-decoration-none link-dark text-capitalize"
        >
          {author.name}
        </Link>
        {publishedAt ? (
          <span className="fw-light">Published at {format(publishedAt)}</span>
        ) : (
          <span className="fw-light text-bg-danger">
            <em>Unpublished</em>
          </span>
        )}
      </div>
    </div>
  );
}
