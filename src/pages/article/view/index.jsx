import { useArticleViewData } from "./useArticleViewData";
import { AppAlert, AppSpinner } from "../../../components";

export function ArticleView() {
  const { data, status, message } = useArticleViewData();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return (
    <main className="bg-white border rounded py-3 px-5">
      <div>
        <h1 className="text-capitalize">{data.title}</h1>
      </div>
      {data.content}
    </main>
  );
}
