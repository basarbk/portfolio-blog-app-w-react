import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export function useCallbackData() {
  const [searchParams] = useSearchParams();

  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState();
  const { setLoggedIn } = useAuth();
  const navigate = useNavigate();

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
          if (searchParams.get("operation") === "login") {
            navigate("/");
          }
          setStatus("success");
          setMessage("Account is created");
          setLoggedIn(body);
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
  }, [searchParams, setLoggedIn, navigate]);

  return {
    status,
    message,
  };
}
