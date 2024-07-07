import { useCallback, useState } from "react";

export function useSignUp() {
  const [email, setEmail] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setApiProgress(true);
      setSuccessMessage();
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const body = await response.json();
      setSuccessMessage(body.message);
      setApiProgress(false);
    },
    [email]
  );

  return {
    apiProgress,
    disabled: !email,
    successMessage,
    onSubmit,
    onChangeEmail,
  };
}
