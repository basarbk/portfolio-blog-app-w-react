import { useArticleViewData } from "../hooks/useArticleViewData";
import { AppAlert, AppSpinner, ArticleInfo } from "../../../components";
import { MoreArticles } from "./components/MoreArticles";
import { Actions } from "./components/Actions";
import marked from "./util/markdownParser";
import "highlight.js/styles/atom-one-light.min.css";

export function ArticleView() {
  const { data, status, message, setPublished } = useArticleViewData();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return (
    <div className="row">
      <div className="col-lg-8">
        <main className="bg-white border rounded py-3 px-5">
          <div className="d-lg-flex align-items-center">
            <div className="flex-grow-1">
              <ArticleInfo
                author={data.author}
                publishedAt={data.publishedAt}
              />
            </div>
            <Actions article={data} setPublished={setPublished} />
          </div>
          <div>
            <h1 className="text-capitalize">{data.title}</h1>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: marked.parse(data.content) }}
          ></div>
        </main>
      </div>
      <div className="col-lg-4">
        <MoreArticles />
      </div>
    </div>
  );
}
