import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AppAlert } from "../../components";

export function Callback() {
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState();

  useEffect(() => {
    async function sendRequest() {
      setStatus("loading");
      try {
        const result = await fetch("/api/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: searchParams.get("token"),
            operation: searchParams.get("operation"),
          }),
        });
        const body = await result.json();
        if (result.ok) {
          setStatus("success");
          setMessage("Account is created");
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
  }, [searchParams]);

  return (
    <div>
      {status === "loading" ? (
        <span
          className="spinner-border spinner-border-sm"
          aria-hidden="true"
        ></span>
      ) : (
        <AppAlert variant={status === "fail" ? "danger" : "success"}>
          {message}
        </AppAlert>
      )}
    </div>
  );
}
