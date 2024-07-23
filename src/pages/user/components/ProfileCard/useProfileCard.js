import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useProfileCard() {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState();
  const [data, setData] = useState();
  const params = useParams();

  useEffect(() => {
    async function sendRequest() {
      setStatus("loading");
      try {
        const result = await fetch(`/api/users/${params.handle}`);
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
  }, [params.handle]);

  return {
    status,
    message,
    data,
  };
}
