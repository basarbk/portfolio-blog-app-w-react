import { useEffect, useState } from "react";
import { AppButton } from "../AppButton";
import { ArticleCard } from "./components/ArticleCard";
export function Feed() {
  const [data, setData] = useState({ content: [], page: 0, size: 5, total: 0 });

  useEffect(() => {
    loadPageData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPageData = async (pageIndex = 0) => {
    const result = await fetch(
      "/api/articles?" +
        new URLSearchParams({
          page: pageIndex,
          size: data.size,
          sort: "published_at",
          direction: "desc",
        })
    );
    const body = await result.json();
    setData((previousData) => {
      return {
        ...body,
        content: [...previousData.content, ...body.content],
      };
    });
  };

  return (
    <>
      <div>
        {data.content.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
      {data.page < data.total - 1 && (
        <AppButton
          variant="outline-secondary"
          onClick={() => loadPageData(data.page + 1)}
        >
          Load More
        </AppButton>
      )}
    </>
  );
}
