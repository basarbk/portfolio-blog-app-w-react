import { useCallback, useState } from "react";

export function useSignUp() {
  const [email, setEmail] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [errors, setErrors] = useState({});

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
    setErrors({});
  };

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setSuccessMessage();
      setErrorMessage();
      const form = event.target;
      if (!form.checkValidity()) {
        setErrors({ email: "Invalid email" });
        return;
      }

      setApiProgress(true);
      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        const body = await response.json();
        if (response.ok) {
          setSuccessMessage(body.message);
        } else if (response.status === 400) {
          setErrors(body.validationErrors);
        }
      } catch {
        setErrorMessage("Unexpected error occurred, please try again");
      } finally {
        setApiProgress(false);
      }
    },
    [email]
  );

  return {
    apiProgress,
    disabled: !email,
    successMessage,
    errorMessage,
    errors,
    onSubmit,
    onChangeEmail,
  };
}
