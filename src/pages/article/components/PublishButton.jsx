import { AppButton } from "../../../components";

export function PublishButton({ id, published, setPublished }) {
  const toggle = async () => {
    const result = await fetch(`/api/articles/${id}/publish`, {
      method: "PATCH",
    });
    if (result.ok) {
      const body = await result.json();
      setPublished(body.published);
    }
  };

  if (!id) return null;

  return (
    <AppButton
      type="button"
      onClick={toggle}
      variant={published ? "secondary" : "primary"}
    >
      {published ? "Un-publish" : "Publish"}
    </AppButton>
  );
}
