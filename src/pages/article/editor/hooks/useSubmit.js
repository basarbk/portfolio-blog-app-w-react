import { useEditorData, useEditorMutator } from "../context/editorContext";

export function useSubmit() {
  const { id, title, content } = useEditorData();
  const { setId } = useEditorMutator();

  const saveArticle = async (event) => {
    event.preventDefault();
    const url = id ? `/api/articles/${id}` : "/api/articles";
    const response = await fetch(url, {
      method: id ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
    const body = await response.json();
    if (response.ok) {
      setId(body.id);
    }
  };

  return {
    saveArticle,
    saveButtonText: id ? "Update" : "Save as Draft",
  };
}
