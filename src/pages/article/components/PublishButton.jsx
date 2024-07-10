import { useState } from "react";
import { AppButton } from "../../../components";

export function PublishButton({ id, published, setPublished }) {
  const [apiProgress, setApiProgress] = useState(false);
  const toggle = async () => {
    setApiProgress(true);
    const result = await fetch(`/api/articles/${id}/publish`, {
      method: "PATCH",
    });
    if (result.ok) {
      const body = await result.json();
      setPublished(body.published);
    }
    setApiProgress(false);
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
