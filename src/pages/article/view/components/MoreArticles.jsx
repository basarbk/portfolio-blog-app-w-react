import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function MoreArticles() {
  const [articles, setArticles] = useState([]);
  const params = useParams();

  useEffect(() => {
    const loadUserArticles = async () => {
      const result = await fetch(`/api/users/${params.handle}/articles?size=3`);
      const body = await result.json();
      if (result.ok) {
        setArticles(body.content);
      }
    };

    loadUserArticles();
  }, [params.handle]);

  if (articles.length === 0) return null;

  return (
    <div className="border bg-white rounded p-3">
      <span className="fs-4 fw-bold">More articles from</span>
      &nbsp;
      <Link
        className="fs-4 fw-bold text-decoration-none"
        to={`/${params.handle}`}
      >
        {articles[0].author.name}
      </Link>
      {articles.map((article) => {
        return (
          <div key={article.id} className="border-top py-2">
            <Link
              className="text-decoration-none text-light-emphasis text-capitalize"
              to={`/${params.handle}/${article.slug}`}
            >
              {article.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
