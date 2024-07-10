import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useArticleViewData() {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    async function sendRequest() {
      setStatus("loading");
      try {
        const result = await fetch(`/api/articles/${params.idOrSlug}`);
        const body = await result.json();
        if (result.ok) {
          setStatus("success");
          setData(body);
        } else {
          setStatus("fail");
          setMessage(body.message);
        }
      } catch {
        setStatus("fail");
        setMessage("Unexpected error occurred, please try again");
      }
    }

    sendRequest();
  }, [params.idOrSlug]);

  const setPublished = (published) => {
    const publishedAt = published ? new Date() : null;
    setData((previousData) => {
      return {
        ...previousData,
        published,
        publishedAt,
      };
    });
  };

  return {
    status,
    message,
    data,
    setPublished,
  };
}
