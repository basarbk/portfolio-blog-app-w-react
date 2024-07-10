import { Link } from "react-router-dom";
import { ArticleInfo } from "../../ArticleInfo";

export function ArticleCard({ article }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <ArticleInfo
          author={article.author}
          publishedAt={article.publishedAt}
        />
        <Link
          className="text-decoration-none text-dark fs-3"
          to={`/${article.author.handle}/${article.slug}`}
        >
          {article.title}
        </Link>
      </div>
    </div>
  );
}
