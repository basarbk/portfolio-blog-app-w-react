import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { AppImage } from "./AppImage";

export function ArticleInfo({ author, publishedAt }) {
  return (
    <div className="d-flex align-items-center gap-3 mb-1">
      <Link to={`/${author.handle}`}>
        <AppImage
          image={author.image}
          width={30}
          height={30}
          fallback="profile"
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
