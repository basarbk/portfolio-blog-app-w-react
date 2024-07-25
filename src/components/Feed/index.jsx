import { useEffect, useState } from "react";
import { AppButton } from "../AppButton";
import { ArticleCard } from "./components/ArticleCard";

export function Feed(props) {
  const [data, setData] = useState({ content: [], page: 0, size: 5, total: 0 });

  useEffect(() => {
    setData({ content: [], page: 0, size: 5, total: 0 });
    loadPageData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.handle, props.filter]);

  const loadPageData = async (pageIndex = 0) => {
    const url = props.handle
      ? `/api/users/${props.handle}/articles?`
      : "/api/articles?";
    const result = await fetch(
      url +
        new URLSearchParams({
          page: pageIndex,
          size: data.size,
          sort: "published_at",
          direction: "desc",
          ...(props.filter ? { reaction: props.filter } : {}),
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
