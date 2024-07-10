import { ArticleEditor } from ".";
import { AppAlert, AppSpinner } from "../../../components";
import { useArticleViewData } from "../hooks/useArticleViewData";

export function ArticleEdit() {
  const { data, status, message } = useArticleViewData();

  if (status === "loading") return <AppSpinner size="regular" full />;

  if (status === "fail") {
    return <AppAlert variant="danger">{message}</AppAlert>;
  }
  return <ArticleEditor article={data} />;
}
