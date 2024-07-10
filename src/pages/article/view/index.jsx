import { useArticleViewData } from "./useArticleViewData";
import { AppAlert, AppSpinner, ArticleInfo } from "../../../components";

export function ArticleView() {
  const { data, status, message } = useArticleViewData();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return (
    <main className="bg-white border rounded py-3 px-5">
      <ArticleInfo author={data.author} publishedAt={data.publishedAt} />
      <div>
        <h1 className="text-capitalize">{data.title}</h1>
      </div>
      {data.content}
    </main>
  );
}
