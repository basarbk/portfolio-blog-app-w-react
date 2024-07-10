import { useState } from "react";
import { useEditorData, useEditorMutator } from "../context/editorContext";

export function useSubmit() {
  const { id, title, content } = useEditorData();
  const { setId, setErrors } = useEditorMutator();
  const [apiProgress, setApiProgress] = useState(false);

  const saveArticle = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      const errors = {
        title: undefined,
        content: undefined,
      };
      const [titleTextArea, contentTextArea] =
        form.querySelectorAll("textarea");
      if (!titleTextArea.checkValidity()) {
        errors.title = "Title is required";
      }

      if (!contentTextArea.checkValidity()) {
        errors.content = "Content is required";
      }
      setErrors(errors);
      return;
    }

    setApiProgress(true);
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
    } else if (response.status === 400) {
      setErrors(body.validationErrors);
    }
    setApiProgress(false);
  };

  return {
    saveArticle,
    saveButtonText: id ? "Update" : "Save as Draft",
    apiProgress,
  };
}
