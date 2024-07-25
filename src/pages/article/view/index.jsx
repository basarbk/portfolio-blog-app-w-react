import { useArticleViewData } from "../hooks/useArticleViewData";
import {
  AppAlert,
  AppImage,
  AppSpinner,
  ArticleInfo,
  ReactionButton,
} from "../../../components";
import { MoreArticles } from "./components/MoreArticles";
import { Actions } from "./components/Actions";
import marked from "./util/markdownParser";
import "highlight.js/styles/atom-one-light.min.css";
import { AVAILABLE_REACTIONS } from "../../../shared/constant";

export function ArticleView() {
  const { data, status, message, setPublished } = useArticleViewData();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return (
    <div className="row">
      <div className="col-lg-8">
        <main className="bg-white border rounded">
          <AppImage
            image={data.image}
            className="w-100 rounded-top object-fit-cover"
            height={300}
          />
          <div className="py-3 px-5">
            <div className="d-lg-flex align-items-center">
              <div className="flex-grow-1">
                <ArticleInfo
                  author={data.author}
                  publishedAt={data.publishedAt}
                />
              </div>
              <Actions article={data} setPublished={setPublished} />
            </div>
            <div className="d-flex gap-2">
              {AVAILABLE_REACTIONS.map((reaction) => {
                return (
                  <ReactionButton
                    key={reaction}
                    entityId={data.id}
                    reaction={reaction}
                    details={data.reactions[reaction]}
                  />
                );
              })}
            </div>
            <div>
              <h1 className="text-capitalize">{data.title}</h1>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: marked.parse(data.content) }}
            ></div>
          </div>
        </main>
      </div>
      <div className="col-lg-4">
        <MoreArticles />
      </div>
    </div>
  );
}
