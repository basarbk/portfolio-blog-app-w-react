import { useState } from "react";
import { AppButton } from "../../../components";

export function PublishButton({ id, published, setPublished, setError }) {
  const [apiProgress, setApiProgress] = useState(false);
  const toggle = async () => {
    setError();
    setApiProgress(true);
    try {
      const result = await fetch(`/api/articles/${id}/publish`, {
        method: "PATCH",
      });
      const body = await result.json();
      if (result.ok) {
        setPublished(body.published);
      } else {
        setError(body.message);
      }
    } catch {
      setError("Unexpected error occurred, please try again");
    } finally {
      setApiProgress(false);
    }
  };

  if (!id) return null;

  return (
    <AppButton
      type="button"
      onClick={toggle}
      variant={published ? "secondary" : "primary"}
      loading={apiProgress}
    >
      {published ? "Un-publish" : "Publish"}
    </AppButton>
  );
}
