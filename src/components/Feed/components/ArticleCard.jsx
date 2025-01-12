import { Link } from "react-router-dom";
import { ArticleInfo } from "../../ArticleInfo";
import { AppImage } from "../../AppImage";
import { ReactionButton } from "../../ReactionButton";
import { AVAILABLE_REACTIONS } from "../../../shared/constant";
export function ArticleCard({ article }) {
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-4">
          <AppImage
            image={article.image}
            className="w-100 rounded-start object-fit-cover"
            height={150}
          />
        </div>
        <div className="col-8">
          <div className="card-body text-truncate">
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
            <div className="d-flex gap-2">
              {AVAILABLE_REACTIONS.map((reaction) => {
                return (
                  <ReactionButton
                    key={reaction}
                    entityId={article.id}
                    reaction={reaction}
                    details={article.reactions[reaction]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
